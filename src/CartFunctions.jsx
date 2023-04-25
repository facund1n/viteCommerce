import Routing from "./routes/Routing";
import { useState /* useEffect */ } from "react";

const CartFunctions = () => {
  const [cart, setCart] = useState([]);
  const [q, setQ] = useState([]);

  /*   useEffect(() => {
    console.log(cart);
  }, [cart]); */

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

  const totalQ = () => {
    const totalQuantity = cart;

    if (!totalQuantity === undefined || null) {
      setQ(totalQuantity);
    } else {
      setQ([]);
    }
    /* (totalQuantity = 0 || undefined || null) ? setQ(0) : ; */

    /*     for (let index = 0; index < cart.length; index++) {
      const element = cart[index];
      q += element.q;
    }
    return q; */
  };

  return (
    <div>
      <Routing
        addToCart={addToCart}
        deleteOne={deleteOne}
        clearCart={clearCart}
        modifyCart={modifyCart}
        totalQ={totalQ}
        cart={cart}
      />
    </div>
  );
};

export default CartFunctions;
