import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function BrandExample({ data }) {
  return (
    <>
      {console.log(data)}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img
                alt="15590524.webp"
                src="/15590524.webp"
                width="35"
                className="d-inline-block"
              />{" "}
              Vite Commerce
            </Navbar.Brand>
          </Link>
          <Navbar.Text>
            <Link to="/checkout">
              <Button variant="light">Cart {`( ${data} )`}</Button>
            </Link>
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
