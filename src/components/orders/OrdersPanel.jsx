import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import NavBar from "../NavBar";
import Orders from "./Orders";
import LogInOutInterface from "../LogInOutInterface";

const OrdersPanel = ({ data, auth, userLogged, userId }) => {
  return (
    <>
      <NavBar auth={auth} userLogged={userLogged} userId={userId} />
      <LogInOutInterface auth={auth} userLogged={userLogged} userId={userId} />
      <Container className="mt-2">
        <ListGroup>
          {data.map((data) => (
            <Orders data={data} key={data._id} userId={userId} />
          ))}
        </ListGroup>
      </Container>
    </>
  );
};

export default OrdersPanel;
