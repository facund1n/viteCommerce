import AllProductsFetch from "../components/products/AllProductsFetch";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Container from "react-bootstrap/Container";
import Footer from "../components/Footer";
import LogIn from "../components/LogIn";
import Register from "../components/Register";
import LogOut from "../components/LogOut";
import LogInOutInterface from "../components/LogInOutInterface";

const Main = ({ totalQ, cart, auth, userLogged, userId }) => {
  return (
    <>
      <NavBar cart={cart} userId={userId} />
      <LogInOutInterface auth={auth} userLogged={userLogged} userId={userId} />
      <Container fluid className="bg-light-gray min-vh-100">
        <Header />
        <AllProductsFetch className="bg-warning" />
      </Container>
      <Footer />
    </>
  );
};

export default Main;
