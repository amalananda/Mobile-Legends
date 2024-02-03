import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./home";
import MobileLegendPage from "./mobilelegendpage";
import Update from "./update";
import Newest from "./newest";
import CekPesanan from "./cekpesanan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mobilelegendpage",
    element: <MobileLegendPage />,
  },
  {
    path: "/update",
    element: <Update />,
  },
  {
    path: "/newest",
    element: <Newest />,
  },
  {
    path: "/cekpesanan",
    element: <CekPesanan />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
