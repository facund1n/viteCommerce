import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import NavBar from "../NavBar";
import ProductCounter from "../ProductCounter";
import { useState } from "react";

const OneProductDetail = ({ data }) => {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <NavBar />
      <Container className="py-2">
        <div
          style={{
            height: "100%",
            width: "100%",
            boxShadow: "0 0 2px",
            borderRadius: "3px",
            padding: "0px",
            margin: "0",
            textOverflow: "ellipsis",
          }}
        >
          <Row>
            <Col>
              <h3 className="text-center my-2">{data.title}</h3>
              <hr />
            </Col>
          </Row>
          <Row lg={2} md={2} xs={1}>
            <Col>
              <div>
                <img
                  className="img-fluid mx-auto d-block w-50 py-2"
                  src={data.image}
                  alt={data.image}
                />
              </div>
            </Col>
            <Col className="d-flex flex-column justify-content-center">
              <h3>{data.title}</h3>
              <p>{data.description}</p>
              <h2 className="text-center">${data.price}</h2>
              <div className="d-flex bg-light">
                <ProductCounter setCounter={setCounter} counter={counter} />
                <Button variant="dark" className="d-block mx-auto m-2 w-50">
                  ADD TO{" "}
                  <FontAwesomeIcon
                    icon={faCartPlus}
                    style={{ color: "#18c944" }}
                  />
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default OneProductDetail;
