import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const Cart = ({ cart, deleteOne, clearCart, totalP }) => {
  return (
    <Container>
      <Row>
        {cart.length === 0 || null || undefined ? (
          <p>
            Cart is empty,{" "}
            <Link to="/">
              <strong>take me to buy</strong>
            </Link>
          </p>
        ) : (
          cart.map((element, key) => (
            <Container className="my-1" key={key}>
              <ListGroup>
                <ListGroup.Item>
                  <Row>
                    <Col xs="8">
                      <strong>{element.title}</strong>
                      <br />
                      <span>
                        Price: <strong>$ {element.price}</strong>
                      </span>
                      <br />
                      <span>
                        Quantity: <strong>{element.q}</strong>
                      </span>
                    </Col>
                    <Col xs="4">
                      <Button
                        className="d-block ms-auto"
                        onClick={() => deleteOne(element._id)}
                        variant="danger"
                      >
                        DELETE
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Container>
          ))
        )}
      </Row>
      <Button
        /* VER SI SE HACE MODAL PARA CONFIRMAR */
        className="d-block ms-auto my-1"
        onClick={() => clearCart()}
        variant="outline-danger"
      >
        CLEAR CART
      </Button>
      <ListGroup>
        <ListGroup.Item>
          TOTAL: ${cart == [] ? <span>0</span> : totalP(cart)}
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default Cart;
