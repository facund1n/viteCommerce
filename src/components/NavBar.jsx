import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

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
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
