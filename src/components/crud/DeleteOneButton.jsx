import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import DeleteOneProduct from "./DeleteOneProduct";
import { Link } from "react-router-dom";

const DeleteOneButton = ({ data }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <Link onClick={() => setShow(true)}> 🗑 DELETE</Link>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton className="banner">
          <b> Are you sure you want to delete?</b>
        </Modal.Header>
        <div className="b-black">
          <Modal.Body>
            <DeleteOneProduct data={data} />
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default DeleteOneButton;
