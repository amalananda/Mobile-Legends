import React from 'react'
import { Modal, ModalBody, Button } from 'reactstrap'

const Alert = ({ showAlert, message, onClose }) => {
  return (
    <Modal isOpen={showAlert} toggle={onClose}>
      <ModalBody>
        <div className="alert-content">
          {message}
        </div>
        <div className="alert">
          <Button className="alert-button" onClick={onClose}>
            OK
          </Button>
        </div>
      </ModalBody>
    </Modal >
  )
}

export default Alert
