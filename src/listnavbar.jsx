import React from "react";
import "./index.css";
import DropdownNav from "./dropdown";
import { Link } from "react-router-dom";
// import { useRef } from "react";

// const ref = useRef(null);
//   const handleClick = () => {
//     ref.current?.scrollIntoView({ behavior: 'smooth' });
//   };
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
        <Link style={{ textDecoration: "none", color: "black" }} to="/cek_pesanan" role="button">
          Cek Pesanan
        </Link>
      </div>
      <div className="item-nav">
        <Link style={{ textDecoration: "none", color: "black" }} to="/daftar_harga" role="button">
          Daftar Harga
        </Link>
      </div>
      {/* <div className="item-nav">
        <button onClick={handleClick}>Kontak
          <div ref={ref} scrollIntoView="/footer"></div>
        </button>
      </div> */}
      <div className="item-nav">
        <Link style={{ textDecoration: "none", color: "black" }} to="/login_page" role="button">
          Login
        </Link>
      </div>
    </ul>
  );
};

export default ListNavbar;
