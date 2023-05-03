import { useState } from "react";
import { Modal, Button, Col } from "react-bootstrap";
import NewProduct from "./NewProduct";
import { Link } from "react-router-dom";

const NewProductButton = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <>
      <Col className="text-success text-end fw-bold py-2 my-2">
        <Link onClick={() => setShow(true)}>NEW PRODUCT</Link>
      </Col>
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
