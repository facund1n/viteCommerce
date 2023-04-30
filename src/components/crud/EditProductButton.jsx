import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

import EditProduct from "./EditProduct";

const EditProductButton = ({ data }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <>
      <Link onClick={() => setShow(true)}>🖉 EDIT</Link>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton className="banner">
          <img
            alt="logo"
            src="/img/logo.png"
            height="20px"
            className="d-block m-0 p-0"
          />
        </Modal.Header>
        <div className="b-black">
          <Modal.Body>
            <EditProduct data={data} />
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default EditProductButton;
