import React, { useState, useEffect } from "react";
import ListNavbar from "./listnavbar";
import { Container, Button } from "reactstrap";
import MetodePembayaran from "./metode_pembayaran";
import { ProductApi } from "./apis/productApi";
import Footer from "./footer";
import popUp from "./pop_up";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Payment from "./payment_page";
import { Link } from "react-router-dom";

// MobileLgendPage
const MobileLegendPage = (args) => {
  const [clickedId, setClickedId] = useState("");
  const [chosenProduct, setChosenProduct] = useState(null);
  const [specialProducts, setSpecialProducts] = useState([]);

  const [diamondProducts, setDiamondProducts] = useState([]);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    const specialProductParams = {
      game_type: "mobile_legend",
      product_type: "special",
    };
    ProductApi.getAll(specialProductParams)
      .then((response) => setSpecialProducts(response.data.data))
      .catch((error) => console.log(error));

    const dimondProductParams = {
      game_type: "mobile_legend",
      product_type: "diamond",
    };
    ProductApi.getAll(dimondProductParams)
      .then((response) => setDiamondProducts(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  const hanldeClickProduct = (id, card_id) => {
    setChosenProduct(id);
    setClickedId(card_id);
  };

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
          {specialProducts.map((data) => {
            return (
              <div id={`${data.id}-product`} className={clickedId == `${data.id}-product` ? "card-twilight clicked-diamond" : "card-twilight"} button onClick={() => hanldeClickProduct(data.id, `${data.id}-product`)}>
                <img className="twilightpass" src="TwilightPass_MLBB.png" width="75px" />
                <div>{data.name}</div>
                <div>{data.price}</div>
              </div>
            );
          })}
        </div>
        <p className="my-3">Variasi Instan</p>
        <div className="cads-flex">
          {diamondProducts.map((data) => {
            return (
              <div i d={`${data.id}-product`} className={clickedId == `${data.id}-product` ? "card-1 clicked-diamond" : "card-1"} button onClick={() => hanldeClickProduct(data.id, `${data.id}-product`)}>
                <img className="diamonds" src="Diamonds.png" width="50px" />
                <div>{data.name}</div>
                <div>{data.price}</div>
              </div>
            );
          })}
        </div>
        <MetodePembayaran />
        <Button className="button-beli" onClick={toggle}>
          Beli
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>Detail Pesanan</ModalHeader>
          <ModalBody>
            Mohon konfirmasi Username anda sudah benar.
            <div className="order-info_row">
              <div className="first-col">Nickname:</div>
              <div className="second-col">HYDE</div>
            </div>
            <div className="order-info_row">
              <div className="first-col">ID:</div>
              <div className="second-col">36277462(2052)</div>
            </div>
            <div className="order-info_row">
              <div className="first-col">Bayar dengan:</div>
              <div className="second-col">QRIS</div>
            </div>
            <div className="order-info_row">
              <div className="first-col">Harga:</div>
              <div className="second-col">Rp.15.200</div>
            </div>
            <div className="order-info_row">
              <div className="first-col">Pajak:(11%)</div>
              <div className="second-col">Rp.1.672</div>
            </div>
            <div className="order-info_row">
              <div className="first-col">Total:</div>
              <div className="second-col">Rp.16.872</div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="first" onClick={toggle}>
              <Link style={{ textDecoration: "none", color: "black" }} to={`/payment_page`}>
                Confirm
              </Link>
            </Button>{" "}
            <Button color="second" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        {/* <Button className="button-beli" onClick={<popUp />}>
          {"Beli"}
        </Button> */}
      </Container>
      <Footer />
    </>
  );
};

export default MobileLegendPage;
