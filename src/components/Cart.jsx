import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Checkout from "../components/Checkout";

const Cart = ({ cart, deleteOne, clearCart, totalPrice, auth, userLogged }) => {
  return (
    <Container className="card-custom min-vh-100 my-2">
      <Row className=" my-3">
        {auth && userLogged ? (
          <>
            {cart.length === 0 ? (
              <div className="text-center my-5">
                <p>Cart is empty</p>
                <Link to="/">
                  <h4>take me to buy!</h4>
                </Link>
              </div>
            ) : (
              cart.map((element, key) => (
                <Container className="my-2" key={key}>
                  <Col>
                    <b>{element.title}</b>
                    <br />
                    <h5>
                      Price:{" "}
                      <strong>
                        $ {element.price} × {element.q} =
                      </strong>
                      <span className="text-muted">
                        &nbsp;${element.price * element.q}
                      </span>
                    </h5>
                  </Col>
                  <Col xs={2} lg={1}>
                    <div
                      className="d-block text-danger fw-bold mb-1 py-2 pointer"
                      onClick={() => deleteOne(element.id)}
                      variant="danger"
                    >
                      DELETE
                    </div>
                  </Col>
                  <hr />
                </Container>
              ))
            )}
            {cart.length !== 0 && (
              <>
                <Col xs={5} lg={3} className="ms-auto">
                  <h5
                    /* VER SI SE HACE MODAL PARA CONFIRMAR */
                    className="text-end fw-bold text-danger py-3 pointer"
                    onClick={() => clearCart()}
                  >
                    🗑 CLEAR CART
                  </h5>
                  <h5 className="text-end fw-bold">total: ${totalPrice()}</h5>{" "}
                </Col>
              </>
            )}
          </>
        ) : (
          <div className="text-center my-5">
            <p>Please log in or register to see cart</p>
            <Link to="/login">
              <h4 className="purple-hover">Log in</h4>
            </Link>
            <Link to="/register">
              <h4 className="purple-hover">Register</h4>
            </Link>
          </div>
        )}
      </Row>
      {/* CHECKOUT COMPONENT: RENDERS BUY FUNCTION */}
      <Row>
        <Checkout cart={cart} userLogged={userLogged} clearCart={clearCart} />
      </Row>
    </Container>
  );
};

export default Cart;
