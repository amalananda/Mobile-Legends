import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./home";
import MobileLegendPage from "./mobile_legend_page/mobile_legend_page";
import Newest from "./newest";
import CekPesanan from "./cek_pesanan_page/cek_pesanan";
import LoginPage from "./login_page/login_page";
import Payment from "./payment_page/payment_page";
import SignUp from "./sign_up_page/sign_up_page";
import DaftarHarga from "./daftar_harga_page/daftar_harga";
import GenshinImpactPage from "./genshin_impact_page/genshin_impact_page";

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
    path: "/genshin_impact",
    element: <GenshinImpactPage />
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
    element: <LoginPage />,
  },
  {
    path: "/payment_page",
    element: <Payment />,
  },
  {
    path: "/sign_up",
    element: <SignUp />,
  },
  {
    path: "/daftar_harga",
    element: <DaftarHarga />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
