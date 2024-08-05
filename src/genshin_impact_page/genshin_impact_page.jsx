import React, { useState, useEffect } from "react";
import ListNavbar from "../listnavbar";
import { Container, Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";
// import MetodePembayaran from "./metode_pembayaran";
import { ProductApi } from "../apis/productApi";
import { PaymentApi } from "../apis/paymentApi";
import Footer from "../footer";
import PopUp from "../pop_up";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Payment from "../payment_page/payment_page";
import { Link } from "react-router-dom";
import StringUtils from "../string_utilize";
import "./genshin_impact_page.css";
import PopupTimer from "../popup_timer";

// Genshin Impact 
const GenshinImpactPage = (args) => {
  const [clickedId, setClickedId] = useState(null);
  const [chosenProduct, setChosenProduct] = useState(null);
  const [moonProducts, setMoonProducts] = useState([]);

  const [crystalProducts, setCrystalProducts] = useState([]);
  const [payments, setPayments] = useState([]);
  const [modal, setModal] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isTimerExpired, setIsTimerExpired] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [form, setForm] = useState({
    user_id: '',
    zone_id: '',
    wa: ''
  });
  const [errors, setErrors] = useState({
    user_id: '',
    zone_id: '',
    wa: ''
  });
  const toggle = () => setModal(!modal);

  useEffect(() => {
    const moonProductParams = {
      game_name: "genshin_impact",
      product_type: "moon",
    };
    ProductApi.getAll(moonProductParams)
      .then((response) => setMoonProducts(response.data))
      .catch((error) => console.log(error));

    const crystalProductParams = {
      game_name: "genshin_impact",
      product_type: "crystal",
    };
    ProductApi.getAll(crystalProductParams)
      .then((response) => {
        setCrystalProducts(response.data)

      } )
      .catch((error) => console.log(error));

      PaymentApi.getAll()
      .then((response) => {
        setPayments(response.data)

      } )
      .catch((error) => console.log(error));
  }, []);



  useEffect(() => {
    const checkTime = () => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();

      // Adjust the time to WIB (GMT+7)
      const currentWIBTime = new Date(currentTime.getTime() + (currentTime.getTimezoneOffset() + 420) * 60000);
      const currentWIBHour = currentWIBTime.getHours();

      // Set disable time range (23:00 to 08:00 WIB)
      if (currentWIBHour >= 24 || currentWIBHour < 8) {
          setIsDisabled(true);
      } else {
          setIsDisabled(false);
        }
    };
  
    
    // Check time initially
    checkTime();

    // Optionally, set an interval to check periodically
    const interval = setInterval(checkTime, 60000); // Check every minute
    
    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Clear the error message for the field being edited
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { user_id: '', zone_id: '', wa: '' };

    if (!form.user_id) {
      newErrors.user_id = 'Please fill out this field';
      valid = false;
    }

    if (!form.zone_id) {
      newErrors.zone_id = 'Please fill out this field';
      valid = false;
    }

    if (!form.wa) {
      newErrors.wa = 'Please fill out this field';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const hanldeClickProduct = (id, card_Id) => {
    if (isDisabled) return; // Disable click if within disable time range
    setClickedId(card_Id); // Assuming you have a function like this
    // Your click handling logic
  };

  const handleButtonClick = () => {
    if (validateForm()) {
      setShowPopUp(true);
    }
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };
  return (
    <>
      <ListNavbar />
      <div className="page">
      <Container>
        <PopupTimer show={showPopUp} />
        <Form>
          <FormGroup>
            <Label className="label-page" for="user_id" >User ID</Label>
            <Input
              type="number"
              name="user_id"
              id="user_id"
              placeholder="Masukkan User ID"
              value={form.user_id}
              onChange={handleChange}
              disabled={isDisabled}
              invalid={!!errors.user_id}
            />
            {errors.user_id && <FormText color="danger">{errors.user_id}</FormText>}
          </FormGroup>
          <FormGroup>
            <Label for="server">Zone ID</Label>
            <Input
              type="number"
              name="server"
              id="server"
              placeholder="Masukkan Server"
              value={form.server}
              onChange={handleChange}
              disabled={isDisabled}
              invalid={!!errors.zone_id}
            />
            {errors.zone_id && <FormText color="danger">{errors.server}</FormText>}
            <p>
              <em>
                "Contoh: 12345678 (1234). ID = 123456789 dan Server = 123. Untuk mengetahui User ID Anda, silahkan klik menu profile dibagian kiri atas pada menu profile dibagian kiri atas pada menu utama game. User ID akan terlihat dibagian
                bawah Nama karakter game Anda."
              </em>
            </p>
          </FormGroup>
          <FormGroup>
            <Label for="wa">No.Whatsapp</Label>
            <Input
              type="text"
              name="wa"
              id="wa"
              placeholder="08xxxxx"
              value={form.wa}
              onChange={handleChange}
              disabled={isDisabled}
              invalid={!!errors.wa}
            />
            {errors.wa && <FormText color="danger">{errors.wa}</FormText>}
          </FormGroup>
          <p className="my-3">Variasi Spesial</p>
          <div className="cads-flex">
            {moonProducts.map((data) => (
              <div
                id={`${data.id}-product`}
                className={clickedId === `${data.id}-product` ? "card-moon clicked-crystal" : "card-moon"}
                onClick={() => !isDisabled && setClickedId(`${data.id}-product`)}
                style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}
              >
                <img className="moon" src="blessing_moon.jpeg" width="90px" />
                <div>{data.name}</div>
                <div>{StringUtils.format_rupiah(data.selling_price)}</div>
              </div>
            ))}
          </div>
          <p className="my-3">Variasi Instan</p>
          <div className="cads-flex">
            {crystalProducts.map((data) => (
              <div
                id={`${data.id}-product`}
                className={clickedId === `${data.id}-product` ? "card-2 clicked-crystal" : "card-2"}
                onClick={() => !isDisabled && setClickedId(`${data.id}-product`)}
                style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}
              >
                <img className="crystal" src="genesis_crystal.png" width="70px" />
                <div>{data.name}</div>
                <div>{StringUtils.format_rupiah(data.selling_price)}</div>
              </div>
            ))}
          </div>
          <Button className="button-beli" onClick={handleButtonClick} disabled={isDisabled}>
            {"Beli"}
          </Button>
        </Form>
        <PopUp show={showPopUp} onClose={handleClosePopUp} />
      </Container>
      </div>
      <Footer />
    </>
  );
};

export default GenshinImpactPage