import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function BrandExample({ cart, userId }) {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img
                alt="15590524.webp"
                src="/15590524.webp"
                width="30"
                className="d-inline-block"
              />{" "}
              vite commerce
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Navbar.Text>
                {userId === "6450494eb499f437fa44e0ed" && (
                  <Link to="/panel">
                    <Button variant="outline-light" className="mx-1">
                      Administration Panel
                    </Button>
                  </Link>
                )}
                <Link to="/checkout">
                  <Button variant="outline-warning ">
                    🛒cart{" "}
                    <span className="badge">{cart && `${cart.length}`}</span>
                  </Button>
                </Link>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
