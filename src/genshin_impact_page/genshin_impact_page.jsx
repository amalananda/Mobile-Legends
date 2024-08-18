import React, { useState, useEffect } from "react"
import ListNavbar from "../listnavbar"
import { Container, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"
// import MetodePembayaran from "./metode_pembayaran";
import { ProductApi } from "../apis/productApi"
import { PaymentApi } from "../apis/paymentApi"
import Footer from "../footer"
import PopUp from "../pop_up"
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import Payment from "../payment_page/payment_page"
import { Link } from "react-router-dom"
import StringUtils from "../string_utilize"
import "./genshin_impact_page.css"
import PopupTimer from "../popup_timer"
import GenshinImpactForm from './genshin_impact_form'
import MetodePembayaran from '../mobile_legend_page/metode_pembayaran'
import Alert from '../mobile_legend_page/alert'


const defaultInputFields = {
  user_id: '',
  zone_id: '',
  wa: ''
}

const defaultChosenProduct = {
  username: '',
  product_price: '',
  payment_method: ''
}
// Genshin Impact
const GenshinImpactPage = (args) => {
  const [clickedId, setClickedId] = useState(null)
  const [chosenProduct, setChosenProduct] = useState(defaultChosenProduct)
  const [moonProducts, setMoonProducts] = useState([])
  const [selectedPayment, setSelectedPayment] = useState({ name: 'Metode Pembayaran Tidak Dipilih' })
  const [crystalProducts, setCrystalProducts] = useState([])
  const [payments, setPayments] = useState([])
  const [modal, setModal] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [showPopUp, setShowPopUp] = useState(false)
  const [form, setForm] = useState(defaultInputFields)
  const [errors, setErrors] = useState(defaultInputFields)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const toggle = () => setModal(!modal)

  useEffect(() => {
    const moonProductParams = {
      game_name: "genshin_impact",
      product_type: "moon",
    }
    ProductApi.getAll(moonProductParams)
      .then((response) => setMoonProducts(response.data))
      .catch((error) => console.log(error))

    const crystalProductParams = {
      game_name: "genshin_impact",
      product_type: "crystal",
    }
    ProductApi.getAll(crystalProductParams)
      .then((response) => {
        setCrystalProducts(response.data)

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

      // Adjust the time to WIB (GMT+7)
      const currentWIBTime = new Date(currentTime.getTime() + (currentTime.getTimezoneOffset() + 420) * 60000)
      const currentWIBHour = currentWIBTime.getHours()

      const isDeactiveTime = currentWIBHour >= 24 || currentWIBHour < 8

      // Set disable time range (23:00 to 08:00 WIB)
      if (isDeactiveTime) {
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
    setForm({
      ...form,
      [name]: value
    })
    // Clear the error message for the field being edited
    setErrors({
      ...errors,
      [name]: ''
    })
  }

  const validateForm = () => {
    let valid = true
    const newErrors = defaultInputFields

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

  const handleProductClick = (product) => {
    if (!isDisabled) {
      setClickedId(`${product.id}-product`)
      setChosenProduct({
        ...chosenProduct,
        product_price: product.selling_price,
        product_type: product.product_type,
      })
    }
  }

  const handleButtonClick = async () => {
    if (validateForm()) {
      const payload = {
        id: form.user_id,
        zone: form.zone_id,
        product_id: clickedId ? clickedId.split("-")[0] : '',
        payment_id: selectedPayment.id
      }

      try {
        const response = await OrderApi.checkout(payload)

        if (!response.data.username || response.data.username === "Username Tidak Ditemukan") {
          setAlertMessage("User ID atau Zone ID tidak valid. Mohon periksa kembaliiiiii.")
          setShowAlert(true)
        } else {
          setChosenProduct({
            ...chosenProduct,
            username: response.data.username,
            product_price: response.data.product_selling_price,
            payment_method: selectedPayment.name
          })
          setShowPopUp(true) // Pastikan ini dipanggil
        }
      } catch (error) {
        setChosenProduct(defaultChosenProduct)
        console.log("Error:", error)
        setAlertMessage("User ID atau Zone ID tidak valid. Mohon periksa kembali")
        setShowAlert(true)

        // Tampilkan pesan error jika diperlukan
        // setShowPopUp(true) // Atau tampilkan pop-up error jika diperlukan
      }
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
            <GenshinImpactForm
              form={form}
              handleChange={handleChange}
              isDisabled={isDisabled}
              errors={errors}
            />
            <p className="my-3">{'Variasi Spesial'}</p>
            <div className="cads-flex">
              {moonProducts.map((data) => (
                <div
                  key={data.id}
                  id={`${data.id}-product`}
                  className={clickedId === `${data.id}-product` ? "card-moon clicked-crystal" : "card-moon"}
                  onClick={() => handleProductClick(data)}
                  style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}
                >
                  <img
                    className="moon"
                    src="blessing_moon.jpeg"
                    width="90px" />
                  <div>{data.name}</div>
                  <div>{StringUtils.format_rupiah(data.selling_price)}</div>
                </div>
              ))}
            </div>
            <p className="my-3">{'Variasi Instan'}</p>
            <div className="cads-flex">
              {crystalProducts.map((data) => (
                <div
                  key={data.id}
                  id={`${data.id}-product`}
                  className={clickedId === `${data.id}-product` ? "card-2 clicked-crystal" : "card-2"}
                  onClick={() => handleProductClick(data)}
                  style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}
                >
                  <img
                    className="crystal"
                    src="genesis_crystal.png"
                    width="70px" />
                  <div>{data.name}</div>
                  <div>{StringUtils.format_rupiah(data.selling_price)}</div>
                </div>
              ))}
            </div>
            <MetodePembayaran
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
          <Alert
            showAlert={showAlert}
            message={alertMessage}
            onClose={() => setShowAlert(false)}
          />
          <PopUp
            chosenProduct={chosenProduct}
            show={showPopUp}
            onClose={handleClosePopUp}
            form={form}
          // paymentMethodName={selectedPayment.name}
          />
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default GenshinImpactPage
