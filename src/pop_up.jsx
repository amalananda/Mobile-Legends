import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import Payment from "./payment_page/payment_page"
import StringUtils from "./string_utilize"
import { Link } from "react-router-dom"

function PopUp({
  show,
  onClose,
  chosenProduct,
  form,
}) {
  const [showAlert, setShowAlert] = useState(false)

  const handleConfirm = () => {
    // Validasi UserID dan ZoneID
    if (!chosenProduct || !chosenProduct.username || chosenProduct.username === "Username Tidak Ditemukan") {
      setShowAlert(true)
      return
    }
  }

  return (
    <Modal isOpen={show} toggle={onClose}>
      <ModalHeader toggle={onClose}>Detail Pesanan</ModalHeader>
      <ModalBody>
        {showAlert && (
          <div className="alert">
            User ID atau Zone ID tidak valid. Mohon periksa kembali.
          </div>
        )}
        Mohon konfirmasi Username anda sudah benar.
        <div className="order-info_row">
          <div className="first-col">Nickname:</div>
          <div className="second-col">{chosenProduct?.username || "Username Tidak Ditemukan"}</div>
        </div>
        <div className="order-info_row">
          <div className="first-col">ID:</div>
          <div className="second-col">{form.user_id}</div>
        </div>
        <div className="order-info_row">
          <div className="first-col">Zone ID:</div>
          <div className="second-col">{form.zone_id}</div>
        </div>
        <div className="order-info_row">
          <div className="first-col">Bayar dengan:</div>
          <div className="second-col">{chosenProduct.payment_method}</div>
        </div>
        <div className="order-info_row">
          <div className="first-col">Total:</div>
          <div className="second-col">{StringUtils.format_rupiah(chosenProduct.product_price)}</div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button className="button-confirm" color="first" onClick={handleConfirm}>
          <Link style={{ textDecoration: "none", color: "black" }} to={`/payment_page`}>
            Confirm
          </Link>
        </Button>
        <Button className="button-cancel" color="second" onClick={onClose}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  )
}

// function PopUp(args) {
//   const [modal, setModal] = useState(false);

//   const toggle = () => setModal(!modal);

//   return (
//     <div>
//       <Button onClick={toggle}>
//         Beli
//       </Button>
//       <Modal isOpen={modal} toggle={toggle} {...args}>
//         <ModalHeader toggle={toggle}>Detail Pesanan</ModalHeader>
//         <ModalBody>
//             Mohon konfirmasi Username anda sudah benar.
//             <div className="order-info_row">
//               <div className="first-col">Nickname:</div>
//               <div className="second-col">HYDE</div>
//             </div>
//             <div className="order-info_row">
//               <div className="first-col">ID:</div>
//               <div className="second-col">36277462(2052)</div>
//             </div>
//             <div className="order-info_row">
//               <div className="first-col">Bayar dengan:</div>
//               <div className="second-col">QRIS</div>
//             </div>
//             <div className="order-info_row">
//               <div className="first-col">Harga:</div>
//               <div className="second-col">Rp.15.200</div>
//             </div>
//             <div className="order-info_row">
//               <div className="first-col">Pajak:(11%)</div>
//               <div className="second-col">Rp.1.672</div>
//             </div>
//             <div className="order-info_row">
//               <div className="first-col">Total:</div>
//               <div className="second-col">Rp.16.872</div>
//             </div>
//           </ModalBody>
//           <ModalFooter>
//             <Button color="first" onClick={toggle}>
//               <Link style={{ textDecoration: "none", color: "black" }} to={`/payment_page`}>
//                 Confirm
//               </Link>
//             </Button>
//             <Button color="second" onClick={toggle}>
//               Cancel
//             </Button>
//           </ModalFooter>
//       </Modal>
//     </div>
//   );
// }

export default PopUp
