import { useState } from "react";
import { Modal } from "react-bootstrap";

import LogInForm from "./forms/LogInForm";

const LogIn = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <div onClick={() => setShow(true)}>LOG IN</div>
      <div className="mx-1"> | </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton className="banner">
          Login
        </Modal.Header>
        <div className="b-black">
          <Modal.Body>
            <LogInForm />
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default LogIn;
