import React from "react";
import ListNavbar from "./listnavbar";
import { Container, Row, Col, Placeholder, Input } from "reactstrap";

const placeHolder = [
  {
    nama_dimamond: "Twilight Pass",
    harga: "Rp 145.190",
  },
  {
    nama_dimamond: "Weekly Diamond Pass",
    harga: "Rp 28.071",
  },
  {
    nama_dimamond: "2x Weekly Diamond Pass",
    harga: "Rp 56.141",
  },
  {
    nama_dimamond: "3x Weekly Diamond Pass",
    harga: "Rp 84.212",
  },
  {
    nama_dimamond: "4x Weekly Diamond Pass",
    harga: "Rp 112.283",
  },
  {
    nama_dimamond: "5x Weekly Diamond Pass",
    harga: "Rp 140.354",
  },
  {
    nama_dimamond: "5 (5+0)",
    harga: "Rp 1.452",
  },
  {
    nama_dimamond: "10 (9+1)",
    harga: "Rp 2.904",
  },
  {
    nama_dimamond: "12 (11+1)",
    harga: "Rp 3.388",
  },
  {
    nama_dimamond: "14 (13+1)",
    harga: "Rp 3.872",
  },
  {
    nama_dimamond: "15 (15+0)",
    harga: "Rp 4.356",
  },
  {
    nama_dimamond: "18 (17+1)",
    harga: "Rp 4.841",
  },
  {
    nama_dimamond: "19 (17+2)",
    harga: "Rp 5.325",
  },
  {
    nama_dimamond: "28 (26+2)",
    harga: "Rp 7.744",
  },
  {
    nama_dimamond: "36 (33+3)",
    harga: "Rp 9.546",
  },
  {
    nama_dimamond: "44 (40+4)",
    harga: "Rp 11.616",
  },
  {
    nama_dimamond: "46 (42+4)",
    harga: "Rp 12.584",
  },
  {
    nama_dimamond: "59 (53+6)",
    harga: "Rp 15.488",
  },
  {
    nama_dimamond: "71 (64+7)",
    harga: "Rp 18.846",
  },
  {
    nama_dimamond: "88 (80+8)",
    harga: "Rp 23.231",
  },
  {
    nama_dimamond: "113 (102+11)",
    harga: "Rp 30.007",
  },
  {
    nama_dimamond: "170 (154+16)",
    harga: "Rp 44.525",
  },
  {
    nama_dimamond: "222 (200+22)",
    harga: "Rp 57.989",
  },
  {
    nama_dimamond: "257 (234+23)",
    harga: "Rp 68.960",
  },
];

const Trending = () => {
  return (
    <Container>
      <div className="col-lg-6 mb-2">
        <p className="pl-3">User ID</p>
        <input type="number" name="user_id" className="form-control" placeholder="Masukkan User ID" autoComplete="off"></input>
        <p className="pl-3">Zone ID</p>
        <input type="number" name="zone_id" className="form-control zone-input" placeholder="Masukkan Zone ID" autoComplete="off"></input>
      </div>
      <Row>
        {placeHolder.map((data) => {
          return (
            <Col>
              <div className="card-1">
                <img className="diamonds" src="Diamonds.png" />
                <div className="rill"></div> {data.nama_dimamond}
                <div className="harga"></div> {data.harga}
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Trending;
