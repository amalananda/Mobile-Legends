import React from "react";
import "./index.css";

const ListNavbar = () => {
  return (
    <ul className="navbar-list">
      <div className="item-nav">
        <div href="/home" role="button">
          Home
        </div>
      </div>
      <div className="item-nav">
        <div href="/trending" role="button">
          Trending
        </div>
      </div>
      <div className="item-nav">
        <div href="/update" role="button">
          Recent Update
        </div>
      </div>
      <div className="item-nav">
        <div href="/newest" role="button">
          New Release
        </div>
      </div>
    </ul>
  );
};

export default ListNavbar;
