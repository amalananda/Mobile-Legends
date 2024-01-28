// import logo from "./logo.svg";
import "./App.css";
// import FormMala from "./jancok";
import "./index.css";
import ListNavbar from "./listnavbar";
import "bootstrap/dist/css/bootstrap.css";
import OnePiece from "./onepiece";
import HomeSearch from "./search";
import BajakLaut from "./bajaklaut";
import ZoroIs from "./zoro";
import TopSearch from "./topsearch";
import DownBody from "./downbody";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import { Component } from "react";
import Home from "./home";
import Mobilegame from "./game";

function App() {
  return (
    <div className="App">
      <ListNavbar />
      <Mobilegame />

    </div>
  );
}

export default App;
