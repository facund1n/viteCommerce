import { Row, Col, ListGroup, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
/* import EditProductButton from "./EditProductButton";
import DeleteOneButton from "./DeleteOneButton"; */
// 3.3

const PanelProducts = ({ data }) => {
  console.log(data);
  //const dateConvert = date.toUTCString();
  return (
    <>
      <ListGroup>
        <ListGroup.Item className="bg-white">
          <span>order: {data._id}</span>
          <br />
          <span>client: {data.userName}</span>
          <br />
          <span>cart: {}</span>
          <br />
          {data.isDispatched === false ? (
            <span>Status: NOT DISPATCHED</span>
          ) : (
            <span>Status: DISPATCHED</span>
          )}
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default PanelProducts;
