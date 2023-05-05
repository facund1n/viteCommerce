import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OneProductDetail from "./OneProductDetail";
import Loader from "../Loader";

const OneProductFetch = ({ addToCart, cart, auth }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    fetch(`https://vite-commerce-back-end.vercel.app/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <OneProductDetail
          data={data}
          addToCart={addToCart}
          cart={cart}
          auth={auth}
        />
      )}
    </>
  );
};

export default OneProductFetch;
