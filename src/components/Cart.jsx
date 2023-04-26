import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Cart = ({ cart, deleteOne, clearCart }) => {
  return (
    <Container>
      <Row lg="3" md="3" xs="1">
        {cart.length === 0 || null || undefined ? (
          <p>
            Cart is empty,{" "}
            <Link to="/">
              <strong>take me to buy</strong>
            </Link>
          </p>
        ) : (
          cart.map((element, key) => (
            <>
              <Col key={key}>
                <Card
                  className="p-1 d-flex flex-column align-items-center justify-content-between"
                  style={{ height: "200px" }}
                >
                  <Card.Text>
                    <strong>{element.title}</strong>
                  </Card.Text>
                  <Card.Text>
                    Price <strong>$ {element.price}</strong>
                  </Card.Text>
                  <Card.Text>
                    Quantity: <strong>{element.q}</strong>
                  </Card.Text>{" "}
                  <Button
                    onClick={() => deleteOne(element.id)}
                    variant="danger"
                  >
                    DELETE
                  </Button>
                </Card>
              </Col>
              <Col>
                <Button
                  /* VER SI SE HACE MODAL PARA CONFIRMAR */
                  className="d-block ms-auto my-1"
                  onClick={() => clearCart()}
                  variant="outline-danger"
                >
                  CLEAR CART
                </Button>
              </Col>
            </>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Cart;
