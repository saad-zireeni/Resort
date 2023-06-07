import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Resort.css";
import { Sidebar } from "react-feather";

const Resort = () => {
  const [resorts, setResorts] = useState([]);

  useEffect(() => {
    const fetchAllResort = async () => {
      try {
        const res = await axios.get("http://localhost:5000/resort");
        setResorts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllResort();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:5000/resort/" + id);
      window.location.reload();
    } catch {}
  };

  return (
    <div>
      <Sidebar />

      <section className="header">
        <div className="overlay">
          <h1 className="subtitle">Discover the Ultimate Resort Experience</h1>
          <h1 className="title">Escape to Paradise</h1>
        </div>
        <div className="shape">
          <svg viewBox="0 0 1500 200">
            <path d="m 0,240 h 1500.4828 v -71.92164 c 0,0 -286.2763,-81.79324 -743.19024,-81.79324 C 300.37862,86.28512 0,168.07836 0,168.07836 Z" />
          </svg>
        </div>
      </section>
      <section></section>
      <h1 className="title_card">Resort Gallery</h1>
      <div className="resorts">
        {resorts.map((resort) => (
          <div className="resort-cards">
            <div className="resort-card">
              <div className="resort-image-container">
                {resort.photo && (
                  <img src={resort.photo} alt="" height={420} width={327} />
                )}
              </div>
              <div className="resort-details">
                <h2 className="resort-name">{resort.name}</h2>
                <p className="resort-description">{resort.description}</p>
                <div className="resort-info">
                  <p className="city-info">{resort.city}</p>
                </div>
                <div className="resort-details-footer">
                  <p className="availability-info">
                    {resort.availability ? "Available" : "Not Available"}
                  </p>
                  <h3 className="price-info">${resort.price}/12H</h3>
                </div>
                <Link to={`/details/${resort.id}`}>
                  <button className="details-button">Details</button>
                </Link>
                <div className="add__butn">
                  <button
                    type="Delete"
                    className="resort__add"
                    onClick={() => handleDelete(resort.id)}
                  >
                    <i
                      className="fa-solid fa-trash fa-bounce"
                      style={{ color: "#ff0000" }}
                    />
                  </button>
                  <button type="Update" className="resort__add">
                    <Link to={`/update/${resort.id}`}>
                      <i
                        className="fa-solid fa-pen-to-square fa-bounce"
                        style={{ color: "#45a049" }}
                      />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="add_add">
        <button>
          <Link to="/add" className="add_button">
            add new resort
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Resort;
