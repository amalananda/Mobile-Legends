import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./home";
import Trending from "./legend";
import Update from "./update";
import Newest from "./newest";
// import OnePiece from "./onepiece";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/trending",
    element: <Trending />,
  },
  {
    path: "/update",
    element: <Update />,
  },
  {
    path: "/newest",
    element: <Newest />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <OnePiece>
  <RouterProvider router={router} />
  // </OnePiece>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
