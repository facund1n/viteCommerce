import Footer from "../components/Footer";

import { Container } from "react-bootstrap";

/* import LikedButton from "./LikedButton";
import SavedButton from "./SavedButton";
import AllPosts from "../CRUD/AllPosts";
import NewPostButton from "../CRUD/NewPostButton"; */

const UserPanel = ({ userLogged }) => {
  return (
    <>
      <Container className="px-0 d-flex flex-column min-vh-100">
        {/*         {userLogged !== "admin" ? (
          <SavedButton userLogged={userLogged} />
        ) : (
          <span></span>
        )}
        {userLogged !== "admin" ? (
          <LikedButton userLogged={userLogged} />
        ) : (
          <span></span>
        )}
        <Container>
          {userLogged === "admin" ? <NewPostButton /> : <span></span>}
          {userLogged === "admin" ? <AllPosts /> : <span></span>}
        </Container> */}
      </Container>
      <Footer />
    </>
  );
};
export default UserPanel;
