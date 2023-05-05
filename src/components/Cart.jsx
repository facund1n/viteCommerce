import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Cart = ({ cart, deleteOne, clearCart, totalPrice }) => {
  return (
    <Container>
      <Row className="card-custom my-3">
        {cart.length === 0 ? (
          <div className="text-center my-5">
            <p>Cart is empty</p>
            <Link to="/">
              <h4>take me to buy!</h4>
            </Link>
          </div>
        ) : (
          cart.map((element, key) => (
            <>
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
                  <div
                    className="d-block col-sm-2 text-danger fw-bold mb-1 py-2 pointer"
                    onClick={() => deleteOne(element.id)}
                    variant="danger"
                  >
                    DELETE
                  </div>
                  <hr />
                </Col>
              </Container>
            </>
          ))
        )}

        {cart.length !== 0 && (
          <>
            <h5
              /* VER SI SE HACE MODAL PARA CONFIRMAR */
              className="text-end col-sm-2 ms-auto fw-bold text-danger py-3 pointer"
              onClick={() => clearCart()}
            >
              🗑 CLEAR CART
            </h5>
            <h5 className="text-end fw-bold">total: ${totalPrice()}</h5>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Cart;
