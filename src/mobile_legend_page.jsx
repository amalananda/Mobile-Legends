import React, { useState, useEffect } from "react";
import ListNavbar from "./listnavbar";
import { Container, Button } from "reactstrap";
import MetodePembayaran from "./metode_pembayaran";
import { ProductApi } from './apis/productApi';
import Footer from "./footer";


// MobileLgendPage
const MobileLegendPage = () => {
  const [clickedId, setClickedId] = useState("");
  const [specialProducts, setSpecialProducts] = useState([]);
  const [diamondProducts, setDiamondProducts] = useState([]);

  useEffect(() => {
    const specialProductParams = {
      game_type: 'mobile_legend',
      product_type: 'special'
    }
    ProductApi.getAll(specialProductParams)
      .then(response => setSpecialProducts(response.data.data))
      .catch(error => console.log(error))

      const dimondProductParams = {
        game_type: 'mobile_legend',
        product_type: 'diamond'
      }
      ProductApi.getAll(dimondProductParams)
        .then(response => setDiamondProducts(response.data.data))
      .catch(error=> console.log(error))
  }, [])
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
              <div id={`${data.id}-id`} className={clickedId == `${data.id}-id` ? "card-twilight clicked-diamond" : "card-twilight"} button onClick={() => setClickedId(`${data.id}-id`)}>
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
              <div id={`${data.id}-id`} className={clickedId == `${data.id}-id` ? "card-1 clicked-diamond" : "card-1"} button onClick={() => setClickedId(`${data.id}-id`)}>
                <img className="diamonds" src="Diamonds.png" width="50px" />
                <div>{data.name}</div>
                <div>{data.price}</div>
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
