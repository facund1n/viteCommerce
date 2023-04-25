import AllProductsFetch from "../components/products/AllProductsFetch";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Container from "react-bootstrap/Container";

const Main = ({ addToCart, totalQ, cart }) => {
  return (
    <>
      <NavBar cart={cart} />
      <Container>
        <Header />
        <AllProductsFetch addToCart={addToCart} />
      </Container>
    </>
  );
};

export default Main;
