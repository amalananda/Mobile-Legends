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


      await OrderApi.checkout(payload)
        .then((response) => {
          setChosenProduct({
            ...chosenProduct,
            username: response.data.username,
            product_price: response.data.product_selling_price,
            payment_method: selectedPayment.name
          })
          setShowPopUp(true)
        })
        .catch((error) => console.log(error.response))
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
            <p className="my-3">{'Variasi Spesial'}</p>
            <div className="cads-flex">
              {specialProducts.map((data) => (
                <div
                  id={`${data.id}-product`}
                  className={clickedId === `${data.id}-product` ? "card-twilight clicked-diamond" : "card-twilight"}
                  onClick={() => handleProductClick(data)}
                  style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}
                >
                  <img
                    className="twilightpass"
                    src="TwilightPass_MLBB.png"
                    width="75px"
                  />
                  <div>{data.name}</div>
                  <div>{StringUtils.format_rupiah(data.selling_price)}</div>
                </div>
              ))}
            </div>


            {/* Diamond  */}
            <p className="my-3">{'Variasi Instan'}</p>
            <div className="cads-flex">
              {diamondProducts.map((data) => (
                <div
                  id={`${data.id}-product`}
                  className={clickedId === `${data.id}-product` ? "card-1 clicked-diamond" : "card-1"}
                  onClick={() => handleProductClick(data)}
                  style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}
                >
                  <img
                    className="diamonds"
                    src="Diamonds.png"
                    width="50px"
                  />
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
            form={form}
            paymentMethodName={selectedPayment.name}
          />
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default MobileLegendPage
