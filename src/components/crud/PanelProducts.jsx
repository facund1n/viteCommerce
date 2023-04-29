import { Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

// 3.3

const PanelProducts = ({ data }) => {
  return (
    <>
      <ListGroup>
        <ListGroup.Item className="bg-white">
          <Row xs={1} md={1} lg={6}>
            <Col>
              <img
                style={{ height: "120px" }}
                className="img-fluid"
                src={data.image[0]}
                alt={data.image[0]}
              />
              <b>ID: {data._id} </b>
              <h5>{data.title}</h5>
              <span className="bg-danger text-white p-1">{data.category}</span>
            </Col>
            <Col>
              <Link to={`/products/${data._id}`}>VIEW PRODUCT</Link>
            </Col>
            <Col className="text-end">
              edit{/* <EditPostButton data={data} /> */}
            </Col>
            <Col className="text-end">
              delete
              {/*    <DeletePostButton data={data} /> */}
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default PanelProducts;
