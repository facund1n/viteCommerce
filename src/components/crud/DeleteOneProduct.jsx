import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Success, Error } from "../Common";
import axios from "axios";

const DeletePost = ({ data }) => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  const deleteById = async () => {
    const response = await axios
      .delete(
        `https://vite-commerce-back-end.vercel.app/products/delete/${data._id}`
      )
      .catch((err) => {
        if (err) setError(err.response.data.message);
        setSuccess(false);
      });
    if (response) {
      setError(false);
      setSuccess(response.data.message);
      setInterval(() => {
        navigate("/panel");
        window.location.reload();
      }, 3500);
    }
  };

  return (
    <>
      <span>
        ID: <b>{data._id}</b>
      </span>
      <br />
      <span>
        Title: <b>{data.title}</b>
      </span>
      <br />
      <span>
        $ <b>{data.price}</b>
      </span>
      <br />
      {success && (
        <Success className="notification-animation">
          {<span>🛈 {success}</span>}
        </Success>
      )}
      {error && (
        <Error className="notification-animation">
          {<span>🛈 {error}</span>}
        </Error>
      )}
      <br />
      <Button variant="danger" size="lg" onClick={deleteById}>
        DELETE
      </Button>
    </>
  );
};

export default DeletePost;
