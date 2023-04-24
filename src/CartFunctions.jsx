import Routing from "./routes/Routing";
import { useState, useEffect } from "react";

const CartFunctions = () => {
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    console.log("add to cart");
  };

  const deleteCart = () => {
    console.log("delete to cart");
  };

  const clearCart = () => {
    console.log("clear to cart");
  };

  const modifyCart = () => {
    console.log("delete to cart");
  };

  const totalQ = () => {
    console.log("cantidad total");
  };

  const isDuplicate = () => {
    console.log("");
  };

  return (
    <div>
      <Routing
        addToCart={addToCart}
        deleteCart={deleteCart}
        clearCart={clearCart}
        modifyCart={modifyCart}
        totalQ={totalQ}
      />
    </div>
  );
};

export default CartFunctions;
