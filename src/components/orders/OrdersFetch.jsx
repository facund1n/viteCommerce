import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import OrdersPanel from "./OrdersPanel";

const OrdersFetch = ({ userId }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    // https://vite-commerce-back-end.vercel.app
    fetch(`https://vite-commerce-back-end.vercel.app/orders/${userId}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .then(() => setIsLoading(false));
  }, []);

  return <>{isLoading ? <Loader /> : <OrdersPanel data={data} />}</>;
};

export default OrdersFetch;
