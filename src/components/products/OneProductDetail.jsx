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

import Gallery from "./Gallery";

const OneProductDetail = ({ data, addToCart, cart }) => {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <NavBar cart={cart} />
      <Container className="py-2 ">
        <div className="card-custom min-vh-100">
          <Row lg={12} md={12} xs={1}>
            <Col className="py-4" lg={6}>
              <Gallery data={data} />
            </Col>
            {/* className="d-flex flex-column align-items-center justify-content-around px-5" */}
            <Col lg={6}>
              <hr />

              <h3 className="my-2">{data.title}</h3>
              <hr />
              <p>{data.description}</p>
              <div className="bg-light card p-4 ">
                <h2 className="text-end fw-bold m-3">${data.price}</h2>
                <div className="text-end m-3">stock: {data.stock}</div>
                {/* + & - controls */}
                <Col className="d-flex ">
                  <ProductCounter setCounter={setCounter} counter={counter} />
                  <Button
                    variant="dark"
                    className="d-block mx-auto m-2 w-50"
                    onClick={() =>
                      addToCart({
                        id: data._id,
                        title: data.title,
                        price: data.price,
                        q: counter,
                      })
                    }
                  >
                    ADD TO{" "}
                    <FontAwesomeIcon
                      icon={faCartPlus}
                      style={{ color: "#18c944" }}
                    />
                  </Button>
                </Col>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default OneProductDetail;
