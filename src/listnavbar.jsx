import React from "react";
import "./index.css";
import DropdownNav from "./dropdown";
import { Link } from "react-router-dom";

const ListNavbar = () => {
  return (
    <ul className="navbar-list">
      <div className="item-nav">
        <DropdownNav />
      </div>
      <div className="item-nav">
        <Link style={{ textDecoration: "none", color: "black" }} to="/home" role="button">
          Home
        </Link>
      </div>
      <div className="item-nav">
        <Link style={{ textDecoration: "none", color: "black" }} to="/trending" role="button">
          Trending
        </Link>
      </div>
      <div className="item-nav">
        <Link style={{ textDecoration: "none", color: "black" }} to="/update" role="button">
          Recent Update
        </Link>
      </div>
      <div className="item-nav">
        <Link style={{ textDecoration: "none", color: "black" }} to="/newest" role="button">
          New Release
        </Link>
      </div>
    </ul>
  );
};

export default ListNavbar;
