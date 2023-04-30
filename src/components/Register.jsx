import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import RegisterForm from "./forms/RegisterForm";

const Register = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <Link onClick={() => setShow(true)}>REGISTER</Link>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton className="banner">
          Registration:
        </Modal.Header>
        <div className="b-grey">
          <Modal.Body>
            <RegisterForm /> {/* COMPONENTE FORMULARIO REGISTRO */}
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default Register;
