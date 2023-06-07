import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Add.css";

const Add = () => {

  const [resort, setResort] = useState({
    name: "",
    description: "",
    city: "",
    price: null,
    photo: "",
  });
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/resort", resort);
      console.log();
      navigate("/resorts");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setResort((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div className="add-form">
        <h1>add new resort</h1>
        <input
          type="text"
          placeholder="title"
          onChange={handleChange}
          name="name"
        />
        <select
              id="city"
              onChange={handleChange}
              name="city"
              className="filter-option-select"
            >
              <option value="">All Cities</option>
              <option value="Zarqa">Zarqa</option>
              <option value="Amman">Amman</option>
              <option value="Mafraq">Mafraq</option>
              <option value="Aqaba">Aqaba</option>
              <option value="Ajloun">Ajloun</option>
              <option value="Irbid">Irbid</option>
              <option value="Balqa">Balqa</option>
              <option value="Madaba">Madaba</option>
              <option value="Jarash">Jarash</option>
              <option value="Tafelah">Tafelah</option>
              <option value="Karak">Karak</option>
              <option value="Maan">Maan</option>
            </select>
        <input
          type="text"
          placeholder="description"
          onChange={handleChange}
          name="description"
        />
        <input
          type="number"
          placeholder="price"
          onChange={handleChange}
          name="price"
        />
        <input
          type="text"
          placeholder="cover"
          onChange={handleChange}
          name="photo"
        />

        <button onClick={handleClick}>Add</button>
      </div>
    </>
  );
};

export default Add;
