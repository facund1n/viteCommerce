import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import NavBar from "../NavBar";

const OneProductDetail = ({ data }) => {
  return (
    <>
      <NavBar />
      <Row lg={2} md={2} xs={1}>
        <h3 className="text-center">{data.title}</h3>
        <hr />
        <Col>
          <div>
            <img
              className="img-fluid mx-auto d-block h-100"
              src={data.image}
              alt={data.image}
            />
          </div>
        </Col>
        <Col className="d-flex flex-column aling-self-center">
          <div className="">
            <h6>{data.title}</h6>
            <p>{data.description}</p>
          </div>
          <div className="aling-self-end">
            <h2 className="text-center">${data.price}</h2>
            <Button variant="dark" className="w-100">
              ADD TO{" "}
              <FontAwesomeIcon icon={faCartPlus} style={{ color: "#18c944" }} />
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default OneProductDetail;
