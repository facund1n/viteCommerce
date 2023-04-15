import AllProducts from "../components/AllProducts";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Container from "react-bootstrap/Container";

function Main() {
  return (
    <>
      <NavBar />
      <Container>
        <Header />
        <AllProducts />
      </Container>
    </>
  );
}

export default Main;
