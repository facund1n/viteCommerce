import { useEffect, useState } from "react";
import Loader from "../Loader";
import OrdersPanel from "./OrdersPanel";

const OrdersFetch = ({ userId, auth, userLogged }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // https://vite-commerce-back-end.vercel.app
    fetch(`https://vite-commerce-back-end.vercel.app/orders/${userId}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <OrdersPanel
          data={data}
          auth={auth}
          userLogged={userLogged}
          userId={userId}
        />
      )}
    </>
  );
};

export default OrdersFetch;
