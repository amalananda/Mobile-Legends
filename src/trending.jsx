import React from "react";
import ListNavbar from "./listnavbar";
import { Container, Row, Col, Placeholder } from "reactstrap";

const placeHolder = [
  {
    nama_dimamond: "3 Diamonds",
    harga: "1171",
  },
  {
    nama_dimamond: "3 Diamonds",
    harga: "1171",
  },
  {
    nama_dimamond: "3 Diamonds",
    harga: "1171",
  },
  {
    nama_dimamond: "5 Diamonds",
    harga: "1423",
  },
  {
    nama_dimamond: "12 Diamonds(11+ 1 Bonus)",
    harga: "1171",
  },
  {
    nama_dimamond: "19 Diamonds(17+ 2 Bonus)",
    harga: "3323",
  },
  {
    nama_dimamond: "12 Diamonds(11+ 1 Bonus)",
    harga: "5223",
  },
];

const Trending = () => {
  return (
    <Container>
      <Row>
        {placeHolder.map((data) => {
          return (
            <Col>
              <div className="card-1">
                <img className="diamonds" src="Diamonds.png" />
                <div className="rill"></div> {data.nama_dimamond}
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Trending;
