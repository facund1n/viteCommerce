import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import ProductCounter from "../ProductCounter";
import { useState } from "react";

const Product = ({ data, addToCart }) => {
  const [counter, setCounter] = useState(1);

  return (
    <Link to={`/products/${data._id}`} style={{ textDecoration: "none" }}>
      <div
        className="zoom"
        style={{
          height: "100%",
          width: "100%",
          border: "solid 1px lightgray",
          borderRadius: "3px",
          padding: "0.3em",
          margin: "0",
          textOverflow: "ellipsis",
          overflow: "hidden",
        }}
      >
        <div className="h-50 ">
          <img
            className="img-fluid mx-auto d-block h-100 "
            src={data.image[0]}
            alt={data.image[0]}
            style={{ overflow: "hidden " }}
          />
        </div>

        <div className="h-50 d-flex flex-column justify-content-around px-2">
          <hr />
          <p className="fw-normal">{data.title}</p>
          <h3 className="fw-bold ms-auto ">${data.price}</h3>
          <p className="bg-danger text-white fw-bold ms-auto p-1">
            {data.category}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
