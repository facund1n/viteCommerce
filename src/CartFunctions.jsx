import Routing from "./routes/Routing";
import { useState, useEffect } from "react";

const CartFunctions = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  // p stands for: product
  const addToCart = (p) => {
    if (isDuplicate(p.id)) {
      const newCart = cart.filter((c) => c.id !== p.id);
      const previousQ = cart.find((c) => c.id === p.id).q;
      p.q += previousQ;
      setCart([...newCart, p]);
    } else setCart([...cart, p]);
  };

  const deleteOne = () => {
    setCart([]);
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
  // i stands for "id"
  const isDuplicate = (i) => {
    return cart.find((c) => c.id === i);
  };

  return (
    <div>
      <Routing
        addToCart={addToCart}
        deleteOne={deleteOne}
        clearCart={clearCart}
        modifyCart={modifyCart}
        totalQ={totalQ}
      />
    </div>
  );
};

export default CartFunctions;
