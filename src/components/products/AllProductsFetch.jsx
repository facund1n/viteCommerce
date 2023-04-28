import { useEffect, useState } from "react";
import AllProductsGrid from "./AllProductsGrid";

const AllProductsFetch = ({ addToCart }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://vite-commerce-back-end.vercel.app/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <AllProductsGrid data={data} addToCart={addToCart} />
    </>
  );
};

export default AllProductsFetch;
