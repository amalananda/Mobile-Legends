import React, { useState, useEffect } from "react";
import ListNavbar from "../listnavbar";
import { Container, Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";
import MetodePembayaran from "./metode_pembayaran";
import { ProductApi } from "../apis/productApi";
import { PaymentApi } from "../apis/paymentApi";
import Footer from "../footer";
import PopUp from "../pop_up";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Payment from "../payment_page/payment_page";
import { Link } from "react-router-dom";
import StringUtils from "../string_utilize";
import "./mobile_legend_page.css";
import PopupTimer from "../popup_timer";

// MobileLgendPage
const MobileLegendPage = (args) => {
  const [clickedId, setClickedId] = useState(null);
  const [chosenProduct, setChosenProduct] = useState(null);
  const [specialProducts, setSpecialProducts] = useState([]);

  const [diamondProducts, setDiamondProducts] = useState([]);
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
    const specialProductParams = {
      game_name: "mobile_legend",
      product_type: "special",
    };
    ProductApi.getAll(specialProductParams)
      .then((response) => setSpecialProducts(response.data))
      .catch((error) => console.log(error));

    const dimondProductParams = {
      game_name: "mobile_legend",
      product_type: "diamond",
    };
    ProductApi.getAll(dimondProductParams)
      .then((response) => {
        setDiamondProducts(response.data)

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
      <Container>
        <PopupTimer show={showPopUp} />
        <Form>
          <FormGroup>
            <Label for="user_id">User ID</Label>
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
            <Label for="zone_id">Zone ID</Label>
            <Input
              type="number"
              name="zone_id"
              id="zone_id"
              placeholder="Masukkan Zone ID"
              value={form.zone_id}
              onChange={handleChange}
              disabled={isDisabled}
              invalid={!!errors.zone_id}
            />
            {errors.zone_id && <FormText color="danger">{errors.zone_id}</FormText>}
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
            {specialProducts.map((data) => (
              <div
                id={`${data.id}-product`}
                className={clickedId === `${data.id}-product` ? "card-twilight clicked-diamond" : "card-twilight"}
                onClick={() => !isDisabled && setClickedId(`${data.id}-product`)}
                style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}
              >
                <img className="twilightpass" src="TwilightPass_MLBB.png" width="75px" />
                <div>{data.name}</div>
                <div>{StringUtils.format_rupiah(data.selling_price)}</div>
              </div>
            ))}
          </div>
          <p className="my-3">Variasi Instan</p>
          <div className="cads-flex">
            {diamondProducts.map((data) => (
              <div
                id={`${data.id}-product`}
                className={clickedId === `${data.id}-product` ? "card-1 clicked-diamond" : "card-1"}
                onClick={() => !isDisabled && setClickedId(`${data.id}-product`)}
                style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}
              >
                <img className="diamonds" src="Diamonds.png" width="50px" />
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
      <Footer />
    </>
  );
};
// const MobileLegendPage = (args) => {
//   const [clickedId, setClickedId] = useState(null);
//   const [chosenProduct, setChosenProduct] = useState(null);
//   const [specialProducts, setSpecialProducts] = useState([]);

//   const [diamondProducts, setDiamondProducts] = useState([]);
//   const [payments, setPayments] = useState([]);
//   const [modal, setModal] = useState(false);
//   const [isDisabled, setIsDisabled] = useState(false);
//   const [isTimerExpired, setIsTimerExpired] = useState(false);
//   const [showPopUp, setShowPopUp] = useState(false);
//   const toggle = () => setModal(!modal);

//   useEffect(() => {
//     const specialProductParams = {
//       game_name: "mobile_legend",
//       product_type: "special",
//     };
//     ProductApi.getAll(specialProductParams)
//       .then((response) => setSpecialProducts(response.data))
//       .catch((error) => console.log(error));

//     const dimondProductParams = {
//       game_name: "mobile_legend",
//       product_type: "diamond",
//     };
//     ProductApi.getAll(dimondProductParams)
//       .then((response) => {
//         setDiamondProducts(response.data)

//       } )
//       .catch((error) => console.log(error));

//       PaymentApi.getAll()
//       .then((response) => {
//         setPayments(response.data)

//       } )
//       .catch((error) => console.log(error));
//   }, []);



//   useEffect(() => {
//     const checkTime = () => {
//       const currentTime = new Date();
//       const currentHour = currentTime.getHours();

//       // Adjust the time to WIB (GMT+7)
//       const currentWIBTime = new Date(currentTime.getTime() + (currentTime.getTimezoneOffset() + 420) * 60000);
//       const currentWIBHour = currentWIBTime.getHours();

//       // Set disable time range (23:00 to 08:00 WIB)
//       if (currentWIBHour >= 10 || currentWIBHour < 8) {
//           setIsDisabled(true);
//       } else {
//           setIsDisabled(false);
//         }
//     };
  
    
//     // Check time initially
//     checkTime();

//     // Optionally, set an interval to check periodically
//     const interval = setInterval(checkTime, 60000); // Check every minute
    
//     // Cleanup interval on component unmount
//     return () => clearInterval(interval)
//   }, []);

//   const hanldeClickProduct = (id, card_Id) => {
//     if (isDisabled) return; // Disable click if within disable time range
//     setClickedId(card_Id); // Assuming you have a function like this
//     // Your click handling logic
//   };

//   const handleButtonClick = () => {
//     setShowPopUp(true);
//   };

//   const handleClosePopUp = () => {
//     setShowPopUp(false);
//   };
//   return (
//     <>
//       <ListNavbar />
//       <Container>
//         <PopupTimer show={showPopUp} />
//         <div className="col-lg-6 mb-2">
//           <p className="pl-3">User ID</p>
//           <input type="number" name="user_id" className="form-control" placeholder="Masukkan User ID" autoComplete="off" disabled={isDisabled}></input>
//         </div>
//         <div className="col-lg-6 mb-2">
//           <p className="pl-3">Zone ID</p>
//           <input type="number" name="zone_id" className="form-control zone-input" placeholder="Masukkan Zone ID" autoComplete="off" disabled={isDisabled}></input>
//           <p>
//             <em>
//               "Contoh: 12345678 (1234). ID = 123456789 dan Server = 123. Untuk mengetahui User ID Anda, silahkan klik menu profile dibagian kiri atas pada menu profile dibagian kiri atas pada menu utama game. User ID akan terlihat dibagian
//               bawah Nama karakter game Anda."
//             </em>
//           </p>
//         </div>
//         <div className="form-row pt-3">
//           <div className="col-lg-6">
//             <p className="pl-3">No.Whatsapp</p>
//             <input type="number" name="wa" placeholder="08xxxxx" className="form-control" required disabled={isDisabled}></input>
//           </div>
//         </div>
//         <p className="my-3">Variasi Spesial</p>
//         <div className="cads-flex">
//           {specialProducts.map((data) => {
//             return (
//               <div id={`${data.id}-product`} className={clickedId == `${data.id}-product` ? "card-twilight clicked-diamond" : "card-twilight"} button onClick={() => hanldeClickProduct(data.id, `${data.id}-product`)} style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}>
//                 <img className="twilightpass" src="TwilightPass_MLBB.png" width="75px" />
//                 <div>{data.name}</div>
//                 <div>{StringUtils.format_rupiah(data.selling_price)}</div>
//               </div>
//             );
//           })}
//         </div>
//         <p className="my-3">Variasi Instan</p>
//         <div className="cads-flex">
//           {diamondProducts.map((data) => {
//             return (
//               <div i d={`${data.id}-product`} className={clickedId == `${data.id}-product` ? "card-1 clicked-diamond" : "card-1"} button onClick={() => hanldeClickProduct(data.id, `${data.id}-product`)} style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}>
//                 <img className="diamonds" src="Diamonds.png" width="50px" />
//                 <div>{data.name}</div>
//                 <div>{StringUtils.format_rupiah(data.selling_price)}</div>
//               </div>
//             );
//           })}
//         </div>
//         <div className="button-container">
//             <PopUp show={showPopUp} onClose={handleClosePopUp} onClick={handleButtonClick} disabled={isDisabled} />
//         </div>
//       </Container>
//       <Footer />
//     </>
//   );
// };

export default MobileLegendPage;
