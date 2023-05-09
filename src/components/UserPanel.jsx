import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../components/NavBar";
import LogInOutInterface from "./LogInOutInterface";
/* import LikedButton from "./LikedButton";
import SavedButton from "./SavedButton";
import AllPosts from "../CRUD/AllPosts";
import NewPostButton from "../CRUD/NewPostButton"; */

const UserPanel = ({ userLogged, userId, auth, cart }) => {
  return (
    <>
      <NavBar userId={userId} cart={cart} />
      <LogInOutInterface auth={auth} userLogged={userLogged} userId={userId} />
      <Footer />
    </>
  );
};
export default UserPanel;
