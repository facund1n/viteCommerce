import { useSignOut } from "react-auth-kit";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Cookies from "js-cookie";

const LogOut = ({ userLogged }) => {
  const signOut = useSignOut();

  return (
    <div className="d-flex flex-row ms-auto ">
      <span>Looged as:&nbsp;</span>
      <Link to={`/users/${userLogged}`} className="purple-hover">
        <strong>{userLogged}&nbsp;</strong>
      </Link>
      <span>|&nbsp;</span>
      <Link className="purple-hover">
        <strong
          onClick={() => {
            {
              signOut(), Cookies.remove("id"), window.location.reload();
            }
          }}
        >
          LOG OUT
        </strong>
      </Link>
    </div>
  );
};
export default LogOut;
