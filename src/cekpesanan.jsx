import React, { useState } from "react";
import ListNavbar from "./listnavbar";
import Footer from "./footer";
import { Container, Button } from "reactstrap";

const CekPesanan = () => {
  const [clickedId, setClickedId] = useState("");
  return (
    <>
      <ListNavbar />
      <Container>
        <div className="form-pes pt-3">
          <div className="col-lg-7">
            <p>Cek Status Pesanan</p>
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
      <Footer />
    </>
  );
};

export default CekPesanan;
