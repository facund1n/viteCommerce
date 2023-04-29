import ListGroup from "react-bootstrap/ListGroup";
import PanelProducts from "./PanelProducts";
import NewProductButton from "./NewProductButton";
//3.2

const AllProductsPanel = ({ data }) => {
  return (
    <>
      <NewProductButton />
      <ListGroup>
        {data.map((data) => (
          <PanelProducts data={data} key={data._id} />
        ))}
      </ListGroup>
    </>
  );
};

export default AllProductsPanel;
