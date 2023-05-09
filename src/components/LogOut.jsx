import { useSignOut } from "react-auth-kit";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Cookies from "js-cookie";

const LogOut = ({ userLogged, userId }) => {
  const signOut = useSignOut();

  return (
    <div className="py-2 bg-yellow">
      <Container className="d-flex flex-row justify-content-end">
        <Nav variant="ligth">
          <NavDropdown
            title={userLogged}
            id="basic-nav-dropdown"
            className="text-dark fw-bold purple-hover"
          >
            <NavDropdown.Item
              href={`/user/${userId}/orders`}
              className="purple-hover "
            >
              <strong>Orders</strong>
            </NavDropdown.Item>
            <NavDropdown.Item
              href={`/user/${userId}`}
              className="purple-hover "
            >
              <strong>Profile</strong>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="purple-hover">
              <strong
                onClick={() => {
                  {
                    signOut(), Cookies.remove("id"), window.location.reload();
                  }
                }}
              >
                Log out
              </strong>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            className="text-dark fw-bold purple-hover"
            href={`/user/${userId}/orders`}
          >
            Orders
          </Nav.Link>
          <Nav.Link
            className="text-dark fw-bold  purple-hover "
            href={`/user/${userId}`}
          >
            Profile
          </Nav.Link>
        </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </div>
  );
};
export default LogOut;
