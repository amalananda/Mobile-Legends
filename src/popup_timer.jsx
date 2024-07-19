import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Payment from "./payment_page/payment_page"
import { Link } from "react-router-dom";
import "./index.css";

function PopupTimer(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  useEffect(() => {
    const checkTime = () => {
      const currentTime = new Date();
      // Adjust the time to WIB (GMT+7)
      const currentWIBTime = new Date(
        currentTime.getTime() + (currentTime.getTimezoneOffset() + 420) * 60000
      );
      const currentWIBHour = currentWIBTime.getHours();

      // Set time range (23:00 to 08:00 WIB)
      if (currentWIBHour >= 24|| currentWIBHour < 8) {
        setModal(true);
      } else {
        setModal(false);
      }
    };

    // Check time initially
    checkTime();

    // Optionally, set an interval to check periodically
    const interval = setInterval(checkTime, 60000); // Check every minute

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader className="header-modal" toggle={toggle}>WARNING</ModalHeader>
        <ModalBody className="body-modal">
        Website ini tutup antara jam 23:00 hingga 08:00 WIB. Mohon kembali lagi di luar waktu tersebut.
            {/* Mohon konfirmasi Username anda sudah benar.
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
            </div> */}
          </ModalBody>
          <ModalFooter>
            <Button style={{ backgroundColor: 'red', color: 'white' }} onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
      </Modal>
    </div>
  );
}


export default PopupTimer;
