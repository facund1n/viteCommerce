import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import ProductCounter from "../ProductCounter";
import { useState } from "react";

const Product = ({ data }) => {
  return (
    <Link to={`/products/${data._id}`}>
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
        <div className="h-50">
          <img
            className="img-fluid mx-auto d-block h-100 zoom"
            src={data.image[0]}
            alt={data.image[0]}
          />
        </div>

        <div className="h-50 d-flex flex-column justify-content-around pb-2">
          <hr />
          <h6 className="fw-bold purple-hover px-2">{data.title}</h6>
          <div className="d-flex flex-column align-items-end">
            <span className="fw-bold fs-4 py-1">$ {data.price}</span>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <span className="text-muted p-1">
              stock: <b>{data.stock}</b>
            </span>
            <span className=" bg-danger text-white fw-bold p-1">
              {data.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
