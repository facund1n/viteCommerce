import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OneProductDetail from "./OneProductDetail";
import Navbar from "../NavBar";

const OneProductFetch = ({ addToCart }) => {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`https://vite-commerce-back-end.vercel.app/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <OneProductDetail data={data} addToCart={addToCart} />
    </>
  );
};

export default OneProductFetch;
