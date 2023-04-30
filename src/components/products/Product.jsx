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
        className=""
        style={{
          height: "100%",
          width: "100%",
          border: "solid 0.1rem lightgray",
          borderRadius: "3px",
          padding: "0.3em",
          margin: "0",
          textOverflow: "ellipsis",
          overflow: "hidden",
        }}
      >
        <div className="h-50 ">
          <img
            className="img-fluid mx-auto d-block h-100 zoom"
            src={data.image[0]}
            alt={data.image[0]}
            style={{ overflow: "hidden " }}
          />
        </div>
        <div className="h-50 d-flex flex-column justify-content-between px-1">
          <hr />
          <h6 className="fw-bold purple-hover">{data.title}</h6>
          <div className="d-flex flex-column align-items-end">
            <h2>
              <strong>$ {data.price}</strong>
            </h2>
            <span className="bg-danger text-white fw-bold p-1">
              {data.category}
            </span>
            <br />
            <span>stock: {data.stock}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
