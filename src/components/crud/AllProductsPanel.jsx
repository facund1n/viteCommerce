import ListGroup from "react-bootstrap/ListGroup";
import PanelProducts from "./PanelProducts";
import NewProductButton from "./NewProductButton";
import Container from "react-bootstrap/Container";
import NavBar from "../NavBar";
//3.2

const AllProductsPanel = ({ data }) => {
  return (
    <>
      <NavBar />
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
