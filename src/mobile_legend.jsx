import React, { useState } from "react";
import ListNavbar from "./listnavbar";
import { Container, Button } from "reactstrap";

const placeHolder2 = [
  {
    nama_diamond: "Twilight Pass",
    harga: "Rp 145.190",
  },
  {
    nama_diamond: "Weekly Diamond Pass",
    harga: "Rp 28.071",
  },
  {
    nama_diamond: "2x Weekly Diamond Pass",
    harga: "Rp 56.141",
  },
  {
    nama_diamond: "3x Weekly Diamond Pass",
    harga: "Rp 84.212",
  },
  {
    nama_diamond: "4x Weekly Diamond Pass",
    harga: "Rp 112.283",
  },
  {
    nama_diamond: "5x Weekly Diamond Pass",
    harga: "Rp 140.354",
  },
];

const placeHolder = [
  {
    nama_diamond: "5 (5+0)",
    harga: "Rp 1.452",
  },
  {
    nama_diamond: "10 (9+1)",
    harga: "Rp 2.904",
  },
  {
    nama_diamond: "12 (11+1)",
    harga: "Rp 3.388",
  },
  {
    nama_diamond: "14 (13+1)",
    harga: "Rp 3.872",
  },
  {
    nama_diamond: "15 (15+0)",
    harga: "Rp 4.356",
  },
  {
    nama_diamond: "18 (17+1)",
    harga: "Rp 4.841",
  },
  {
    nama_diamond: "19 (17+2)",
    harga: "Rp 5.325",
  },
  {
    nama_diamond: "28 (26+2)",
    harga: "Rp 7.744",
  },
  {
    nama_diamond: "36 (33+3)",
    harga: "Rp 9.546",
  },
  {
    nama_diamond: "44 (40+4)",
    harga: "Rp 11.616",
  },
  {
    nama_diamond: "46 (42+4)",
    harga: "Rp 12.584",
  },
  {
    nama_diamond: "59 (53+6)",
    harga: "Rp 15.488",
  },
  {
    nama_diamond: "71 (64+7)",
    harga: "Rp 18.846",
  },
  {
    nama_diamond: "88 (80+8)",
    harga: "Rp 23.231",
  },
  {
    nama_diamond: "113 (102+11)",
    harga: "Rp 30.007",
  },
  {
    nama_diamond: "170 (154+16)",
    harga: "Rp 44.525",
  },
  {
    nama_diamond: "222 (200+22)",
    harga: "Rp 57.989",
  },
  {
    nama_diamond: "257 (234+23)",
    harga: "Rp 68.960",
  },
];

// MobileLgendPage
const MobileLegend = () => {
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
        {placeHolder2.map((data) => {
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
        {placeHolder.map((data) => {
          return (
            <div id={`${data.nama_diamond}-id`} className={clickedId == `${data.nama_diamond}-id` ? "card-1 clicked-diamond" : "card-1"} button onClick={() => setClickedId(`${data.nama_diamond}-id`)}>
              <img className="diamonds" src="Diamonds.png" width="50px" />
              <div>{data.nama_diamond}</div>
              <div>{data.harga}</div>
            </div>
          );
        })}
      </div>

      <Button className="button-beli">{"Beli"}</Button>
    </Container>
    </>
  );
};

export default MobileLegend;
