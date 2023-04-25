import BuyerForm from "../components/BuyerForm";
import NavBar from "../components/NavBar";
import Cart from "../components/Cart";

const CartDetail = ({ cart, deleteOne, clearCart }) => {
  return (
    <div>
      <NavBar cart={cart} />
      <Cart cart={cart} deleteOne={deleteOne} clearCart={clearCart} />
      <BuyerForm />
    </div>
  );
};

export default CartDetail;
