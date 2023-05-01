import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Product from "./Product";

const AllProductsGrid = ({ data, addToCart }) => {
  return (
    <Container className="bg-white min-vh-100">
      <Row lg="4" md="3" xs="1" className="my-1">
        {data.map((data) => (
          <Col key={data._id} className="my-1">
            <Product data={data} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllProductsGrid;
