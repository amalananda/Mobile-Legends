import React, { useState, useEffect } from "react";
import ListNavbar from "../listnavbar";
import { Container, Button } from "reactstrap";
import Footer from "../footer";
import { Link } from "react-router-dom";
import { useCountdown } from "../use_count_down";
import "./payment_page.css";

const defaultcountDown = new Date().setTime(new Date().getTime() + 1 * 60 * 60 * 1000);

const Payment = () => {
  const [countDown, setCountDown] = useState(defaultcountDown);
  useEffect(() => {
    const time = JSON.parse(localStorage.getItem("countdown"));
    if (time) {
      //   console.log(time);
      setCountDown(new Date(time));
    } else {
      localStorage.setItem("countdown", JSON.stringify(new Date().setTime(new Date().getTime() + 1 * 60 * 60 * 1000)));
    }
  }, []);
  //   localStorage.getItem("countdown");
  const [days, hours, minutes, seconds] = useCountdown(countDown);
  return (
    <>
      <ListNavbar />
      <Container>
        <div className="collabs-row">
          <div className="first-row">MENUNGGU PEMBAYARAN</div>
          <div className="second-row">Bayar Sebelum</div>
          <div className="card-time">
            <div className="time-section">
              <div id="hours" className="value">
                {hours}
              </div>
              <div className="time-label">Hours</div>
            </div>
            <div className="time-section">
              <div id="minutes" className="value">
                {minutes}
              </div>
              <div className="time-label">minutes</div>
            </div>
            <div className="time-section">
              <div id="seconds" className="value">
                {seconds}
              </div>
              <div className="time-label">Seconds</div>
            </div>
          </div>
        </div>
        <div className="scan-code">
          <img className="kode-pembayaran" src="qrcode.png"></img>{" "}
        </div>
        <div className="info-row">
          <div className="first-info">
            <header>Informasi Cara Pembayaran</header>
          </div>
          <div className="second-info">Cara melakukan pembayaran e-wallet dengan 1 HP</div>
          <div className="cara-row">
            {" "}
            <li>1. Screenshot QR code pembayaran</li>
            <li>2. Buka e-wallet (Ovo/Gopay/Dana/Shopee/Link Aja)</li>
            <li>3. Tekan tombol scan</li>
            <li>4. Pilih upload gambar atau ambil gambar dari galeri</li>
            <li>5. Lalu pilih gambar yang tadi di screenshot</li>
            <li>6. Lakukan pembayaran</li>
            <li>7. Diamond akan langsung masuk, silahkan dicek di game</li>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

// const Page = () => {
//   const time = new Date().setTime(new Date().getTime() + 1 * 60 * 60 * 1000);

//   return <Payment countDown={time} />;
// };

export default Payment;
