import { Row, Col, ListGroup, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import DeleteOneProduct from "./DeleteOneProduct";
import DeleteOneButton from "./DeleteOneButton";

// 3.3

const PanelProducts = ({ data }) => {
  return (
    <Container>
      <ListGroup>
        <ListGroup.Item className="bg-white">
          <Row xs={1} md={4} lg={4} className="align-items-center">
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
            <Col className="text-primary fw-bold text-end py-2">
              <Link to={`/products/${data._id}`}>👁 VIEW PRODUCT</Link>
            </Col>
            <Col className="fw-bold text-end py-2">
              🖉 edit{/* <EditPostButton data={data} /> */}
            </Col>
            <Col className="text-danger fw-bold text-end py-2">
              <DeleteOneButton data={data} />
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default PanelProducts;
