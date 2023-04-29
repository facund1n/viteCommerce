import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import NewProduct from "./NewProduct";

const NewProductButton = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <>
      <Button
        variant="success"
        size="lg"
        className="d-block ms-auto m-2"
        onClick={() => setShow(true)}
      >
        New Product
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton className="banner">
          <b>NEW PRODUCT</b>
        </Modal.Header>
        <div className="b-black">
          <Modal.Body>
            <NewProduct />
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default NewProductButton;
