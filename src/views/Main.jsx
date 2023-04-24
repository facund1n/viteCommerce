import AllProductsFetch from "../components/products/AllProductsFetch";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Container from "react-bootstrap/Container";

const Main = ({ addToCart }) => {
  return (
    <>
      <NavBar />
      <Container>
        <Header />
        <AllProductsFetch addToCart={addToCart} />
      </Container>
    </>
  );
};

export default Main;
