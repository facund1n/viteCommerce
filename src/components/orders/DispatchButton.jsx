import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const DispatchButton = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <Link onClick={() => setShow(true)} className="fw-bold purple-hover">
        DISPATCH
      </Link>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <div className="b-grey">
          <Modal.Header closeButton className="banner">
            <span>Confirm operation:</span>
          </Modal.Header>
          <Modal.Body>
            <span>Dispatch item?</span>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default DispatchButton;
