import ListGroup from "react-bootstrap/ListGroup";
import PanelProducts from "./PanelProducts";
import NewProductButton from "./NewProductButton";
import Container from "react-bootstrap/Container";
import NavBar from "../NavBar";
import LogInOutInterface from "../LogInOutInterface";
//3.2

const AllProductsPanel = ({ data, auth, userLogged, userId }) => {
  return (
    <>
      <NavBar auth={auth} userLogged={userLogged} userId={userId} />
      <LogInOutInterface auth={auth} userLogged={userLogged} userId={userId} />
      <Container>
        <NewProductButton />
        <ListGroup>
          {data.map((data) => (
            <PanelProducts data={data} key={data._id} />
          ))}
        </ListGroup>
      </Container>
    </>
  );
};

export default AllProductsPanel;
