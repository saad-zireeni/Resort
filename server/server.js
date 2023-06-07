const axios = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const port = 5000;

app.use(cors());
app.use(express.json());

//Get all Resorts
app.get("/resorts", async (req, res) => {
  try {
    const query = "SELECT * FROM resort";
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(201).json({ error: "Internal server error" });
  }
});

// Get a specific resort by ID
app.get("/resorts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const query = "SELECT * FROM resort WHERE id = $1";
    const result = await pool.query(query, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Resort not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(201).json({ error: "Internal server error" });
  }
});

// Add a new resort
app.post("/resort", async (req, res) => {
  try {
    const { name, description, city, price, photo } = req.body;

    const query =
      "INSERT INTO resort (name, description, city, price, photo) VALUES ($1, $2, $3, $4, $5) RETURNING *";

    const values = [name, description, city, price, photo];

    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Handle signup request
app.post("/Signup", (req, res) => {
  const { name, email, password, role } = req.body;
  console.log(name, email, password, role);
  console.log("passssssssss");
  // const hashedPassword = bcrypt.hashSync(password,10)
  pool.query(
    "INSERT INTO users(name,email,password,role) VALUES($1,$2,$3,$4) RETURNING*",
    [name, email, password, role],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result.rows);
        const variabl0 = pool.query("SELECT * FROM users WHERE email = $1", [
          email,
        ]);
        // console.log(variabl0)
        res.status(201).send(result.rows);
      }
    }
  );
});

// Handle Login request
app.post("/Login/:id", async function (req, res) {
  let email = req.params.id;
  try {
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (user.rows.length === 0) {
      // User not found
      res.json("not passed");
    } else {
      const { role } = user.rows[0];
      res.json({ role });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// Handle Payment reuest + Update Availability
app.post("/payment/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  try {
    // const cardnumber = req.body.cardnumber;
    const expirationdate = req.body.expirationdate;
    const cvv = req.body.cvv;

    const cardholder = req.body.cardholder;
    // const hashedCardNumber = bcrypt.hashSync(cardnumber, 10);

    const newPayment = await pool.query(
      "INSERT INTO payment ( expirationdate,cvv, cardholder) VALUES($1, $2, $3) RETURNING *",
      [expirationdate, cvv, cardholder]
    );

    const updateAvailability = await pool.query(
      "UPDATE resort SET availability = false WHERE id = $1",
      [id]
    );

    res.json(newPayment.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// Get a specific user data by Id
app.get("/user/:email", async function (req, res) {
  try {
    const { email } = req.params;
    const user = await pool.query("SELECT * FROM users WHERE email = $1 ", [
      email,
    ]);
    res.json(user.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// app.get("/records/:id", async function (req, res) {
//   let email=req.params.id
//   try {
//     const all_records = await pool.query(
//       "select * from users where email =$1",[email]
//     );
//     console.log(all_records.rows)
//     res.json(all_records.rows);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
