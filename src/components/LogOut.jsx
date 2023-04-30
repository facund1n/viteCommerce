// import { useSignOut } from "react-auth-kit";
import { Link } from "react-router-dom";

const LogOut = ({ userLogged }) => {
  const signOut = useSignOut();

  return (
    <div className="text-end justify-content-end">
      <span>Logedo como: </span>
      <br />
      <Link to={`/users/${userLogged}`}>
        <h3 className="btn btn-outline-warning btn-lg my-2">{userLogged}</h3>
      </Link>
      <div
        className=" mx-1 links"
        onClick={() => signOut().finally(window.location.reload())}
      >
        CERRAR SESION
      </div>
    </div>
  );
};
export default LogOut;
