import React, { useState } from "react";
import ListNavbar from "../listnavbar";
import Footer from "../footer";
import { Container, Button } from "reactstrap";
import "./cek_pesanan_page.css";

const CekPesanan = () => {
  const [clickedId, setClickedId] = useState("");
  return (
    <>
      <ListNavbar />
      <div className="page">
      <Container>
        <div className="form-pes pt-3">
          <div className="col-lg-7">
            {/* <p>Cek Status Pesanan</p> */}
            <div className="wrappedform">
              <div className="numberform">
                <p className="pes-3">No.Pesanan</p>
                <input type="text" name="pesanan" placeholder=" " className="form-control" required></input>
                <Button className="button-cekpesanan">{"Cek Pesanan"}</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      </div>
      <Footer />
    </>
  );
};

export default CekPesanan;
