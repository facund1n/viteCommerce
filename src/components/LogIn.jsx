import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogInForm from "./forms/LogInForm";

const LogIn = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <Link onClick={() => setShow(true)} className="fw-bold purple-hover">
        LOG IN &nbsp;
      </Link>

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
