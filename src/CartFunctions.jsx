import Routing from "./routes/Routing";
import { useState, useEffect } from "react";

const CartFunctions = () => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    console.log("carrito: ", cart, typeof cart);
    console.log("total: ", totalPrice);
  }, [cart, totalPrice]);

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

  const modifyCart = () => {
    console.log("delete to cart");
  };

  const totalQ = (cartPrice) => {
    const totalQuantity = cart;

    if (totalQuantity === [] || undefined || null) {
      setTotalQuantity([]);
    } else {
      setTotalQuantity(totalQuantity);
    }
    /* (totalQuantity = 0 || undefined || null) ? setQ(0) : ; */

    /*     for (let index = 0; index < cart.length; index++) {
      const element = cart[index];
      q += element.q;
    }
    return q; */
  };

  // total Price:
  const totalP = (cart) => {
    let price = 0;
    if (cart === []) {
      setTotalPrice(price);
    } else {
      cart.map((p) => setTotalPrice((price += p.price * p.q)));
      return totalPrice;
    }
  };

  return (
    <div>
      <Routing
        addToCart={addToCart}
        deleteOne={deleteOne}
        clearCart={clearCart}
        modifyCart={modifyCart}
        totalQ={totalQ}
        totalP={totalP}
        cart={cart}
      />
    </div>
  );
};

export default CartFunctions;
