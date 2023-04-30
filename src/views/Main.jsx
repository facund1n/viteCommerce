import AllProductsFetch from "../components/products/AllProductsFetch";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Container from "react-bootstrap/Container";
import Footer from "../components/Footer";
import LogIn from "../components/LogIn";
import Register from "../components/Register";

const Main = ({ addToCart, totalQ, cart }) => {
  return (
    <>
      <NavBar cart={cart} />
      <Container fluid className="bg-light-gray min-vh-100">
        <Container className="min-vh-100">
          <Header />
          <div className="d-flex flex-row justify-content-end">
            <LogIn />
            <Register />
          </div>
          <AllProductsFetch addToCart={addToCart} className="bg-warning" />
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default Main;
