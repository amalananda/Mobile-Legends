import React, { useState, useEffect } from "react"
import ListNavbar from "../listnavbar"
import {
  Container,
  Button,
  Form
} from "reactstrap"
import MetodePembayaran from "./metode_pembayaran"
import { ProductApi } from "../apis/productApi"
import { PaymentApi } from "../apis/paymentApi"
import Footer from "../footer"
import PopUp from "../pop_up"
import StringUtils from "../string_utilize"
import PopupTimer from "../popup_timer"
import { OrderApi } from '../apis/orderApi'
import MobileLegendForm from './mobile_legend_form'
import "./mobile_legend_page.css"
import Alert from "./alert"
import DiamondProducts from './diamond_product'
import SpecialProducts from './special_product'

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

// MobileLgendPage
const MobileLegendPage = (args) => {
  const [clickedId, setClickedId] = useState(null)
  const [chosenProduct, setChosenProduct] = useState(defaultChosenProduct)
  const [specialProducts, setSpecialProducts] = useState([])
  const [selectedPayment, setSelectedPayment] = useState({ name: 'Metode Pembayaran Tidak Dipilih' })
  const [diamondProducts, setDiamondProducts] = useState([])
  const [payments, setPayments] = useState([])
  const [modal, setModal] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [showPopUp, setShowPopUp] = useState(false)
  const [form, setForm] = useState(defaultInputFields)
  const [errors, setErrors] = useState(defaultInputFields)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

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
            <MobileLegendForm
              form={form}
              handleChange={handleChange}
              isDisabled={isDisabled}
              errors={errors}
            />

            {/* Variasi Spesial */}
            <SpecialProducts
              specialProducts={specialProducts}
              clickedId={clickedId}
              handleProductClick={handleProductClick}
              isDisabled={isDisabled}
            />

            {/* Variasi Instan */}
            <DiamondProducts
              diamondProducts={diamondProducts}
              clickedId={clickedId}
              handleProductClick={handleProductClick}
              isDisabled={isDisabled}
            />
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

export default MobileLegendPage
