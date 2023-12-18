import React from "react";
import "./index.css";

const ToggleMenu = () => {
  return (
    <nav className="toggle-menu">
      <ul className="hamburger-lines">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      </ul>
    </nav>
  );
};

export default ToggleMenu;
