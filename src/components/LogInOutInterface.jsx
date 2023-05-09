import LogOut from "../components/LogOut";
import LogIn from "../components/LogIn";
import Register from "../components/Register";
import Container from "react-bootstrap/Container";

const LogInOutInterface = ({ auth, userLogged, userId }) => {
  return (
    <div>
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
    </div>
  );
};

export default LogInOutInterface;
