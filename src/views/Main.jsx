import AllProductsFetch from "../components/products/AllProductsFetch";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Container from "react-bootstrap/Container";
import Footer from "../components/Footer";
import LogIn from "../components/LogIn";
import Register from "../components/Register";
import LogOut from "../components/LogOut";

const Main = ({ totalQ, cart, auth, userLogged, userId }) => {
  return (
    <>
      <NavBar cart={cart} userId={userId} />
      {auth ? (
        <LogOut userLogged={userLogged} userId={userId} />
      ) : (
        <div className="py-3 bg-yellow">
          <Container className="d-flex flex-row justify-content-end">
            <LogIn />
            <Register />
          </Container>
        </div>
      )}
      <Container fluid className="bg-light-gray min-vh-100">
        <Header />
        <AllProductsFetch className="bg-warning" />
      </Container>
      <Footer />
    </>
  );
};

export default Main;
