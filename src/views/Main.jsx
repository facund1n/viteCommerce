import AllProductsFetch from "../components/products/AllProductsFetch";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Container from "react-bootstrap/Container";

function Main() {
  return (
    <>
      <NavBar />
      <Container>
        <Header />
        <AllProductsFetch />
      </Container>
    </>
  );
}

export default Main;
