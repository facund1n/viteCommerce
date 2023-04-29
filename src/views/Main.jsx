import AllProductsFetch from "../components/products/AllProductsFetch";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Container from "react-bootstrap/Container";

const Main = ({ addToCart, totalQ, cart }) => {
  return (
    <>
      <NavBar cart={cart} />
      <Container fluid className="bg-light-gray min-vh-100">
        <Container className="bg-white min-vh-100">
          <Header />
          <AllProductsFetch addToCart={addToCart} className="bg-warning" />
        </Container>
      </Container>
    </>
  );
};

export default Main;
