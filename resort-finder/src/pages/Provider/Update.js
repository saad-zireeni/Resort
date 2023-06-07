import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Update.css";

const Update = () => {
  const [resort, setResort] = useState({
    name: "",
    description: "",
    price: null,
    photo: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const resortId = location.pathname.split("/")[2];
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:5000/resort/" + resortId, resort);
      navigate("/resort");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setResort((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(resort);
  return (
    <div className="Update-form">
      <h1>Update resort</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="name"
      />
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
      <button onClick={handleClick}>Update</button>
    </div>
  );
};

export default Update;
