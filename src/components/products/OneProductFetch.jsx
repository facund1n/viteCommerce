import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OneProductDetail from "./OneProductDetail";

const OneProductFetch = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <OneProductDetail data={data} />
    </>
  );
};

export default OneProductFetch;
