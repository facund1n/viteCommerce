import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function BrandExample({ /* data */ isAdmin }) {
  return (
    <>
      {console.log(/* data */)}
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
                {isAdmin === "6450494eb499f437fa44e0ed" && (
                  <Link to="/panel">
                    <Button variant="light" className="mx-1">
                      Administration Panel
                    </Button>
                  </Link>
                )}
                <Link to="/checkout">
                  <Button variant="light">
                    🛒 Cart {/* {`( ${data} )`} */}
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
