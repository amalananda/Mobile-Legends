import React, { useState, useEffect } from "react"
import ListNavbar from "../listnavbar"
import { Container, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"
import MetodePembayaran from "./metode_pembayaran"
import { ProductApi } from "../apis/productApi"
import { PaymentApi } from "../apis/paymentApi"
import Footer from "../footer"
import PopUp from "../pop_up"
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import Payment from "../payment_page/payment_page"
import { Link } from "react-router-dom"
import StringUtils from "../string_utilize"
import "./mobile_legend_page.css"
import PopupTimer from "../popup_timer"
import { OrderApi } from '../apis/orderApi'
import MobileLegendForm from './mobile_legend_form'

// MobileLgendPage
const MobileLegendPage = (args) => {
  const [clickedId, setClickedId] = useState(null)
  const [chosenProduct, setChosenProduct] = useState({ result: { username: '' } })
  const [specialProducts, setSpecialProducts] = useState([])
  const [selectedPayment, setSelectedPayment] = useState(null)
  const [diamondProducts, setDiamondProducts] = useState([])
  const [payments, setPayments] = useState([])
  const [modal, setModal] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [isTimerExpired, setIsTimerExpired] = useState(false)
  const [showPopUp, setShowPopUp] = useState(false)
  const [form, setForm] = useState({
    user_id: '',
    zone_id: '',
    wa: ''
  })
  const [errors, setErrors] = useState({
    user_id: '',
    zone_id: '',
    wa: ''
  })
  const toggle = () => setModal(!modal)

  useEffect(() => {
    const specialProductParams = {
      game_name: "mobile_legend",
      product_type: "special",
    }
    ProductApi.getAll(specialProductParams)
      .then((response) => setSpecialProducts(response.data))
      .catch((error) => console.log(error))

    const dimondProductParams = {
      game_name: "mobile_legend",
      product_type: "diamond",
    }
    ProductApi.getAll(dimondProductParams)
      .then((response) => {
        setDiamondProducts(response.data)

      })
      .catch((error) => console.log(error))

    PaymentApi.getAll()
      .then((response) => {
        setPayments(response.data)

      })
      .catch((error) => console.log(error))
  }, [])



  useEffect(() => {
    const checkTime = () => {
      const currentTime = new Date()
      const currentHour = currentTime.getHours()

      // Adjust the time to WIB (GMT+7)
      const currentWIBTime = new Date(currentTime.getTime() + (currentTime.getTimezoneOffset() + 420) * 60000)
      const currentWIBHour = currentWIBTime.getHours()

      // Set disable time range (23:00 to 08:00 WIB)
      if (currentWIBHour >= 24 || currentWIBHour < 8) {
        setIsDisabled(true)
      } else {
        setIsDisabled(false)
      }
    }


    // Check time initially
    checkTime()

    // Optionally, set an interval to check periodically
    const interval = setInterval(checkTime, 60000) // Check every minute

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    // Clear the error message for the field being edited
    setErrors({ ...errors, [name]: '' })
  }

  const validateForm = () => {
    let valid = true
    const newErrors = { user_id: '', zone_id: '', wa: '' }

    if (!form.user_id) {
      newErrors.user_id = 'Please fill out this field'
      valid = false
    }

    if (!form.zone_id) {
      newErrors.zone_id = 'Please fill out this field'
      valid = false
    }

    if (!form.wa) {
      newErrors.wa = 'Please fill out this field'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const hanldeClickProduct = (id, card_Id) => {
    if (isDisabled) return // Disable click if within disable time range
    setClickedId(card_Id) // Assuming you have a function like this
    // Your click handling logic
  }

  const handleButtonClick = async () => {
    const payload = {
      id: form.user_id,
      zone: form.zone_id
    }
    await OrderApi.checkout(payload)
      .then((response) => {
        console.log(response.data)
        setChosenProduct(response.data)
      })
      .catch((error) => console.log(error))

    if (validateForm()) {
      setShowPopUp(true)
    }
  }

  const handleClosePopUp = () => {
    setShowPopUp(false)
  }
  return (
    <>
      <ListNavbar />
      <div className="page">
        <Container>
          <PopupTimer show={showPopUp} />
          <Form>
            <MobileLegendForm
              form={form}
              handleChange={handleChange}
              isDisabled={isDisabled}
              errors={errors}
            />

            {/* List of Price Products */}
            {/* Variant */}
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


            {/* Diamond  */}
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

            < MetodePembayaran
              payments={payments}
              onPaymentSelect={setSelectedPayment}
            />

            <Button
              className="button-beli"
              onClick={handleButtonClick}
              disabled={isDisabled}>
              {"Beli"}
            </Button>
          </Form>
          <PopUp
            chosenProduct={chosenProduct}
            show={showPopUp}
            onClose={handleClosePopUp}
            user_id={form.user_id}
            zone_id={form.zone_id}
            payment_method={selectedPayment ? selectedPayment.name : 'Metode Pembayaran Tidak Dipilih'}
          />
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default MobileLegendPage
