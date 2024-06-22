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
    <div className="navbar-list">
      <div className="malls">
        <img src="Malls_no_background.png" width="125px" />
      </div>
      <div className="mobile-item-nav">
        <DropdownNav />
      </div>
      <div className="item-nav">
        <Link className="nav-item" to="/" role="button">
          Home
        </Link>
        <Link className="nav-item" to="/cek_pesanan" role="button">
          Cek Pesanan
        </Link>
        <Link className="nav-item" to="/daftar_harga" role="button">
          Daftar Harga
        </Link>
      {/* <div className="item-nav">
        <button onClick={handleClick}>Kontak
          <div ref={ref} scrollIntoView="/footer"></div>
        </button>
      </div> */}
        <Link className="nav-item" to="/login_page" role="button">
          Login
        </Link>
      </div>
    </div>
  );
};

export default ListNavbar;
