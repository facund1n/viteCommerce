import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { Success, Error } from "../components/Common";

import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Checkout({ cart, userLogged, clearCart }) {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState([]);
  const [cartIsEmpty, setCartIsEmpty] = useState(null);
  const getUserID = Cookies.get("id");

  useEffect(() => {
    cart.length === 0 ? setCartIsEmpty(true) : setCartIsEmpty(false);
  }, [cart]);

  const onSubmit = async (values) => {
    const response = await axios
      // http://localhost:4000/ local testing
      // https://vite-commerce-back-end.vercel.app/ online back
      .post("https://vite-commerce-back-end.vercel.app//orders/new ", values)
      .catch((err) => {
        if (err) setError(err.response.data.message);
        setSuccess(false);
      });
    if (response) {
      setError(false);
      setSuccess(response.data.message);
      setOrder(response.data.newOrder);
      clearCart();
    }
  };

  const formik = useFormik({
    initialValues: {
      userId: getUserID,
      userName: userLogged,
      cart: [...cart],
    },
    validateOnBlur: true,
    onSubmit,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      {success && (
        <Success className="d-flex flex-column notification-animation align-items-center ">
          {
            <>
              <span>🛈 {success}</span>
              <br />
              <span>Your Order is: </span>
              <span>{order._id}</span>
              <br />
              <Link to={`/orders/${order.userId}`}>View Order/s</Link>
            </>
          }
        </Success>
      )}
      {error && (
        <Error className="notification-animation">
          {<span>🛈 {error}</span>}
        </Error>
      )}
      {!cartIsEmpty && (
        <Button
          type="submit"
          variant="warning"
          className="mx-auto w-100 py-2 mt-3 "
        >
          <strong>Order</strong>
        </Button>
      )}
    </Form>
  );
}
