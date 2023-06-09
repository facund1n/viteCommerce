import { useState, useEffect } from "react";
import Loader from "../Loader";
import AllProductsPanel from "./AllProductsPanel";

// 3.1

const AllProducts = ({ auth, userLogged, userId }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loader

  useEffect(() => {
    fetch("https://vite-commerce-back-end.vercel.app/products")
      .then((res) => res.json())
      .then((json) => setData(json))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <AllProductsPanel
          data={data}
          auth={auth}
          userLogged={userLogged}
          userId={userId}
        />
      )}
    </>
  );
};

export default AllProducts;
