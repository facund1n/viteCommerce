import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function BrandExample({ cart, userId }) {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Link to="/"></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">Orders</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Navbar.Text>
                {/*                 {userId === "6450494eb499f437fa44e0ed" && (
                  <Link to="/panel">
                    <Button variant="light" className="mx-1">
                      Administration Panel
                    </Button>
                  </Link>
                )}
                <Link to="/checkout">
                  <Button variant="light">
                    🛒 Cart {cart && `(${cart.length})`}
                  </Button>
                </Link> */}
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
