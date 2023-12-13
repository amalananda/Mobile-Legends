import React from "react";
import { FaSearch } from "react-icons/fa";
import ZoroIs from "./zoro";

const HomeSearch = () => {
  return (
    <div className="form-home-search">
      <form className="bg-search" action="/filter" autoComplete="off">
        <input type="text" className="search-input" name="keyword" placeholder="Search anime..." required></input>
        <div className="bg-icon">
          <FaSearch className="search-icon" />
        </div>
      </form>
    </div>
  );
};

export default HomeSearch;
