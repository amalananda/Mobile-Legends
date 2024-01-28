import React from "react";
import "./index.css";
import DropdownNav from "./dropdown";
import { Link } from "react-router-dom";

const ListNavbar = () => {
  return (
    <ul className="navbar-list">
      <div className="mobile-item-nav">
        <DropdownNav />
      </div>
      <div className="item-nav">
        <Link style={{ textDecoration: "none", color: "black" }} to="/" role="button">
          Home
        </Link>
      </div>
      <div className="item-nav">
        <Link style={{ textDecoration: "none", color: "black" }} to="/pesanan" role="button">
          Cek Pesanan
        </Link>
      </div>
      <div className="item-nav">
        <Link style={{ textDecoration: "none", color: "black" }} to="/daftar" role="button">
          Daftar Harga
        </Link>
      </div>
      <div className="item-nav">
        <Link style={{ textDecoration: "none", color: "black" }} to="/kontak" role="button">
          Kontak
        </Link>
      </div>
    </ul>
  );
};

export default ListNavbar;
