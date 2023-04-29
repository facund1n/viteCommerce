import { useState, useEffect } from "react";
import Toast from "react-bootstrap/Toast";
import Card from "react-bootstrap/Card";

function ToastA({ success, response, show }) {
  const [variant, setVariant] = useState(success);

  useEffect(() => {
    success ? setVariant("success") : setVariant("danger");
  }, []);

  return (
    <>
      <Toast
        className="d-block mx-auto my-2"
        bg={variant}
        show={show}
        delay={3000}
        autohide
      >
        <Card.Header className="bg-dark text-white text-center">
          Operation:
        </Card.Header>
        <Toast.Body className={variant === { success }}>
          <h6 className="text-light text-center">{response}</h6>
        </Toast.Body>
      </Toast>
    </>
  );
}

export default ToastA;
