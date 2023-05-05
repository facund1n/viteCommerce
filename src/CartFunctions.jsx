import Routing from "./routes/Routing";
import { useState, useEffect } from "react";

const CartFunctions = () => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState("0");

  useEffect(() => {
    console.log(totalPrice());
  }, [cart]);

  // i stands for "id"
  const isDuplicate = (i) => {
    return cart.find((c) => c.id === i);
  };

  // p stands for: product
  const addToCart = (p) => {
    if (isDuplicate(p.id)) {
      const newCart = cart.filter((c) => c.id !== p.id);
      const previousQ = cart.find((c) => c.id === p.id).q;
      p.q += previousQ;
      setCart([...newCart, p]);
    } else setCart([...cart, p]);
  };

  //i stands for: id
  const deleteOne = (i) => {
    setCart(cart.filter((c) => c.id !== i));
  };

  const clearCart = () => {
    setCart([]);
  };

  const modifyCart = () => {};

  const totalQ = (cartPrice) => {
    const totalQuantity = cart.length;

    if (totalQuantity) {
      setTotalQuantity(totalQuantity);
    } else {
      setTotalQuantity("0");
    }
    /* (totalQuantity = 0 || undefined || null) ? setQ(0) : ; */

    /*     for (let index = 0; index < cart.length; index++) {
      const element = cart[index];
      q += element.q;
    }
    return q; */
  };

  // total Price:
  const totalPrice = () => {
    let price = 0;
    cart.map((p) => (price += p.price * p.q));
    return price;
  };

  return (
    <div>
      <Routing
        addToCart={addToCart}
        deleteOne={deleteOne}
        clearCart={clearCart}
        modifyCart={modifyCart}
        totalQ={totalQ}
        totalPrice={totalPrice}
        cart={cart}
      />
    </div>
  );
};

export default CartFunctions;
