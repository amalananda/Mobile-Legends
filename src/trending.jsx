import React from "react";
import ListNavbar from "./listnavbar";
import { Container, Row, Col, Input, Button } from "reactstrap";

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

const Trending = () => {
  return (
    <Container>
      <div className="col-lg-6 mb-2">
        <p className="pl-3">User ID</p>
        <input type="number" name="user_id" className="form-control" placeholder="Masukkan User ID" autoComplete="off"></input>
        <input type="hidden" name="zone_id" id="zone_id" value="1"></input>
      </div>
      <div className="col-lg-6 mb-2">
        <p className="pl-3">Zone ID</p>
        <input type="number" name="zone_id" className="form-control zone-input" placeholder="Masukkan Zone ID" autoComplete="off"></input>
        <p>
          <em>
            "Contoh: 12345678 (1234). ID = 123456789 dan Server = 123. Untuk mengetahui User ID Anda, silahkan klik menu profile dibagian kiri atas pada menu profile dibagian kiri atas pada menu utama game. USer ID akan terlihat dibagian
            bawah Nama karakter game Anda."
          </em>
        </p>
      </div>
      <div className="form-row pt-3">
        <div className="col-lg-6">
          <p className="pl-3">No.Whatsapp</p>
          <input type="text" name="wa" placeholder="Masukkan No. Whatsapp" className="form-control" value="088888888888" required></input>
        </div>
      </div>
      <p>Variasi Spesial</p>
      <Row>
        {placeHolder2.map((data) => {
          return (
            <Col md={3} sm={6} xs={6}>
              <div className="card-twilight" button onClick={() => alert("Button Clicked")}>
                <i className="fas fa-arrow-right">
                  <img className="twilightpass" src="TwilightPass_MLBB.png" width="75px" />
                  <div className="rill"></div> {data.nama_diamond}
                  <div className="harga"></div> {data.harga}
                </i>
              </div>
            </Col>
          );
        })}
      </Row>
      <p>Variasi Instan</p>
      <Row>
        {placeHolder.map((data) => {
          return (
            <Col md={3} sm={6} xs={6}>
              <div className="card-1" button onClick={() => alert("Button clicked!")}>
                <i className="fas fa-arrow-right">
                  <img className="diamonds" src="Diamonds.png" width="50px" />
                  <div className="rill"></div> {data.nama_diamond}
                  <div className="harga"></div> {data.harga}
                </i>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Trending;
