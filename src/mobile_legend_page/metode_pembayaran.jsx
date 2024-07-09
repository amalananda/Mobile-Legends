import React, { useState } from "react";
import "./metode_pembayaran.css";


// TODO: remove when image ratio fix
const placeMetodePembayaran = [
  {
    nama_pembayaran: "Shopee Pay",
    image: "shopeepay.png",
    image_height: "30px",
    image_widht: "30px",
  },
  {
    nama_pembayaran: "GoPay",
    image: "gopay.png",
    image_height: "22px",
    image_widht: "22px",
  },
  {
    nama_pembayaran: "Qris",
    image: "qris.png",
    image_height: "25px",
    image_widht: "22px",
  },
  {
    nama_pembayaran: "BCA VA",
    image: "bca.png",
    image_height: "23px",
    image_widht: "20px",
  },
  {
    nama_pembayaran: "BNI VA",
    image: "BNI.png",
    image_height: "22px",
    image_widht: "20px",
  },
  {
    nama_pembayaran: "BRI VA",
    image: "BRI.png",
    image_height: "22px",
    image_widht: "20px",
  },
  {
    nama_pembayaran: "Mandiri VA",
    image: "Mandiri.png",
    image_height: "25px",
    image_widht: "25px",
  },
  {
    nama_pembayaran: "Permata Bank VA",
    image: "permatabank.png",
    image_height: "30px",
    image_widht: "32px",
  },
  {
    nama_pembayaran: "ATM Bersama",
    image: "atmbersama.png",
    image_height: "30px",
    image_widht: "35px",
  },
  {
    nama_pembayaran: "Prima",
    image: "prima.png",
    image_height: "35px",
    image_widht: "35px",
  },
  {
    nama_pembayaran: "ALTO",
    image: "alto.png",
    image_height: "36px",
    image_widht: "36px",
  },
  {
    nama_pembayaran: "CIMB Niaga VA",
    image: "CIMB.png",
    image_height: "40px",
    image_widht: "45px",
  },
];

const MetodePembayaran = ({payments}) => {
  const [clickedId, setClickedId] = useState("");

  return (
    <>
      <p className="my-3">Metode Pembayaran</p>
      <div className="meth-flex">
        {payments .map((payment) => {
          return (
            <div
              key={`${payment.id}`}
              id={`${payment.id}`}
              className={clickedId == `${payment.name}-id` ? "metode-pembayaran clicked-pembayaran" : "metode-pembayaran"}
              button
              onClick={() => setClickedId(`${payment.name}-id`)}
            >
              <img
                className="image"
                src={payment.image_url}
                // height={data.image_height}
                // width={data.image_width}
                // margin={data.image_top}
              />
              <div className="text-pembayaran">{payment.name}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MetodePembayaran;
