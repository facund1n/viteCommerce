import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ProductCounter from "../ProductCounter";

import { useState } from "react";

const Product = ({ data, addToCart }) => {
  const [counter, setCounter] = useState(1);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        boxShadow: "0.5px 0.5px 3px gray",
        borderRadius: "3px",
        padding: "0px",
        margin: "0",
        textOverflow: "ellipsis",
      }}
    >
      <div className="h-50">
        <img
          className="img-fluid mx-auto d-block h-100"
          src={data.image}
          alt={data.image}
        />
        <hr />
        <h5 className="text-center">{data.title}</h5>
      </div>

      <div className="h-50 d-flex flex-column justify-content-end">
        <h2 className="text-center font-price my-1">${data.price}</h2>
        <ProductCounter setCounter={setCounter} counter={counter} />
        <Button
          variant="dark"
          className="w-100 my-1"
          onClick={() =>
            addToCart({
              id: data.id,
              title: data.title,
              price: data.price,
              q: counter,
            })
          }
        >
          ADD TO{" "}
          <FontAwesomeIcon icon={faCartPlus} style={{ color: "#18c944" }} />
        </Button>
        <Link to={`/products/${data.id}`}>
          <Button variant="outline-dark" className="w-100 my-1">
            DETAILS
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
