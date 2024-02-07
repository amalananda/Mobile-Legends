import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./home";
import MobileLegendPage from "./mobile_legend_page";
import Update from "./update";
import Newest from "./newest";
import CekPesanan from "./cek_pesanan";
import SignUp from "./login_page";

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
    path: "/mobile_legend",
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
    path: "/cek_pesanan",
    element: <CekPesanan />,
  },
  {
    path: "/login_page",
    element: <SignUp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
