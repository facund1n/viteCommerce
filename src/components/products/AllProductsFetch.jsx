import { useEffect, useState } from "react";
import AllProductsGrid from "./AllProductsGrid";
import Cart from "../Cart";
import Loader from "../Loader";

const AllProductsFetch = ({ addToCart }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://vite-commerce-back-end.vercel.app/products")
      .then((res) => res.json())
      .then((json) => setData(json))
      .then(setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <AllProductsGrid data={data} addToCart={addToCart} />
      )}
    </>
  );
};

export default AllProductsFetch;
