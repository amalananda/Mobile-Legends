import React, { useState } from "react";
import ListNavbar from "./listnavbar";
import { Container, Button } from "reactstrap";
import MetodePembayaran from "./metodepembayaran";
import Footer from "./footer";

const placeHolderTwilight = [
  {
    nama_diamond: "Twilight Pass",
    harga: "Rp 145.190",
  },
  {
    nama_diamond: "Weekly Diamond Pass",
    harga: "Rp 27.704",
  },
  {
    nama_diamond: "2x Weekly Diamond Pass",
    harga: "Rp 55.408",
  },
  {
    nama_diamond: "3x Weekly Diamond Pass",
    harga: "Rp 83.112",
  },
  {
    nama_diamond: "4x Weekly Diamond Pass",
    harga: "Rp 110.816",
  },
  {
    nama_diamond: "5x Weekly Diamond Pass",
    harga: "Rp 138.520",
  },
];

const placeHolderDiamond = [
  {
    nama_diamond: "86",
    harga: "Rp 22.720",
  },
  {
    nama_diamond: "172",
    harga: "Rp 43.659",
  },
  {
    nama_diamond: "257",
    harga: "Rp 62.518",
  },
  {
    nama_diamond: "343",
    harga: "Rp 85.238",
  },
  {
    nama_diamond: "429",
    harga: "Rp 106.177",
  },
  {
    nama_diamond: "514",
    harga: "Rp 125.036",
  },
  {
    nama_diamond: "600",
    harga: "Rp 147.756",
  },
  {
    nama_diamond: "706",
    harga: "Rp 166.320",
  },
  {
    nama_diamond: "792",
    harga: "Rp 189.040",
  },
  {
    nama_diamond: "878",
    harga: "Rp 209.979",
  },
  {
    nama_diamond: "963",
    harga: "Rp 228.838",
  },
  {
    nama_diamond: "1050",
    harga: "Rp 253.638",
  },
  {
    nama_diamond: "1135",
    harga: "Rp 272.497",
  },
  {
    nama_diamond: "1220",
    harga: "Rp 291.356",
  },
  {
    nama_diamond: "1412",
    harga: "Rp 332.640",
  },
  {
    nama_diamond: "1584",
    harga: "Rp 376.299",
  },
  {
    nama_diamond: "1669",
    harga: "Rp 395.158",
  },
  {
    nama_diamond: "1756",
    harga: "Rp 419.958",
  },
  {
    nama_diamond: "1841",
    harga: "Rp 438.817",
  },
  {
    nama_diamond: "2195",
    harga: "Rp 502.821",
  },
  {
    nama_diamond: "2539",
    harga: "Rp 590.139",
  },
  {
    nama_diamond: "2901",
    harga: "Rp 669.141",
  },
  {
    nama_diamond: "3073",
    harga: "Rp 712.800",
  },
  {
    nama_diamond: "3688",
    harga: "Rp 838.728",
  },
  {
    nama_diamond: "4394",
    harga: "Rp 1.005.048",
  },
  {
    nama_diamond: "5532",
    harga: "Rp 1.262.220",
  },
  {
    nama_diamond: "6238",
    harga: "Rp 1.431.540",
  },
  {
    nama_diamond: "7727",
    harga: "Rp 1.768.041",
  },
  {
    nama_diamond: "9288",
    harga: "Rp 2.102.463",
  },
];

// MobileLgendPage
const MobileLegendPage = () => {
  const [clickedId, setClickedId] = useState("");

  return (
    <>
      <ListNavbar />
      <Container>
        <div className="col-lg-6 mb-2">
          <p className="pl-3">User ID</p>
          <input type="number" name="user_id" className="form-control" placeholder="Masukkan User ID" autoComplete="off"></input>
        </div>
        <div className="col-lg-6 mb-2">
          <p className="pl-3">Zone ID</p>
          <input type="number" name="zone_id" className="form-control zone-input" placeholder="Masukkan Zone ID" autoComplete="off"></input>
          <p>
            <em>
              "Contoh: 12345678 (1234). ID = 123456789 dan Server = 123. Untuk mengetahui User ID Anda, silahkan klik menu profile dibagian kiri atas pada menu profile dibagian kiri atas pada menu utama game. User ID akan terlihat dibagian
              bawah Nama karakter game Anda."
            </em>
          </p>
        </div>
        <div className="form-row pt-3">
          <div className="col-lg-6">
            <p className="pl-3">No.Whatsapp</p>
            <input type="text" name="wa" placeholder="081xxxx" className="form-control" required></input>
          </div>
        </div>
        <p className="my-3">Variasi Spesial</p>
        <div className="cads-flex">
          {placeHolderTwilight.map((data) => {
            return (
              <div id={`${data.nama_diamond}-id`} className={clickedId == `${data.nama_diamond}-id` ? "card-twilight clicked-diamond" : "card-twilight"} button onClick={() => setClickedId(`${data.nama_diamond}-id`)}>
                <img className="twilightpass" src="TwilightPass_MLBB.png" width="75px" />
                <div>{data.nama_diamond}</div>
                <div>{data.harga}</div>
              </div>
            );
          })}
        </div>
        <p className="my-3">Variasi Instan</p>
        <div className="cads-flex">
          {placeHolderDiamond.map((data) => {
            return (
              <div id={`${data.nama_diamond}-id`} className={clickedId == `${data.nama_diamond}-id` ? "card-1 clicked-diamond" : "card-1"} button onClick={() => setClickedId(`${data.nama_diamond}-id`)}>
                <img className="diamonds" src="Diamonds.png" width="50px" />
                <div>{data.nama_diamond}</div>
                <div>{data.harga}</div>
              </div>
            );
          })}
        </div>
        <MetodePembayaran />
        <Button className="button-beli">{"Beli"}</Button>
      </Container>
      <Footer />
    </>
  );
};

export default MobileLegendPage;
