import { Row, Col, ListGroup, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import DispatchButton from "./DispatchButton";
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
          {data.isDispatched === false ? (
            <span>Status: NOT DISPATCHED</span>
          ) : (
            <span>Status: DISPATCHED</span>
          )}
          <br />
          <DispatchButton />
          <br />
          <br />
          <span>
            cart detail: <br />
            {data.cart.map((c, key) => (
              <div key={key}>
                <span>product id: {c.id}</span>
                <br />
                <span>{c.title}</span>
                <br />
                <span>cuantity: {c.q}</span>
                <br />
                <Link to={`/products/${c.id}`}>👁 VIEW PRODUCT</Link>
              </div>
            ))}
          </span>
          <br />
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default PanelProducts;
