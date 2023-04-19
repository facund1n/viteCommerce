import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function BrandExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="15590524.webp"
              src="/15590524.webp"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Vite Commerce
          </Navbar.Brand>
          <Navbar.Text>
            <Link to="/checkout">
              <Button variant="light">Cart</Button>
            </Link>
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
