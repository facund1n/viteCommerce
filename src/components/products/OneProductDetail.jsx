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
import Footer from "../Footer";

const OneProductDetail = ({ data, addToCart, cart, auth, isAdmin }) => {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <NavBar cart={cart} isAdmin={isAdmin} />
      <Container className="pb-2">
        {!auth && (
          <div className="text-center my-4">
            <p>Please log in or register to shop</p>
            <Link to="/login">
              <h4 className="purple-hover">Log in</h4>
            </Link>
            <Link to="/register">
              <h4 className="purple-hover">Register</h4>
            </Link>
          </div>
        )}
        <div className="card-custom min-vh-100 mt-2">
          <Row lg={12} md={12} xs={1}>
            <Col className="py-4" lg={6}>
              <div className="text-muted text-center mt-1">
                {`<`} slide to view {`>`}
              </div>
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
                {auth && (
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
                )}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default OneProductDetail;
