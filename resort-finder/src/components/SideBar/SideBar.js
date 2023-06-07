import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="side_nav">
      <ul>
        <Link to="/">
          <li>
            <div className="home-icon">
              <i className="fa-solid fa-house icon__sidebar"></i>
            </div>
          </li>
        </Link>
        <Link to="/resort">
          <li>
            <div className="about-icon">
              <i className="fa-solid fa-plus icon__sidebar"></i>
            </div>
          </li>
        </Link>
        <Link to="/providerprofile">
          <li>
            <div className="work-icon">
              <i className="fa-solid fa-user icon__sidebar"></i>
            </div>
          </li>
        </Link>
        <Link>
          <li>
            <div className="logout-icon">
              <i className="fa-solid fa-right-from-bracket icon__sidebar"></i>
            </div>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Sidebar;
