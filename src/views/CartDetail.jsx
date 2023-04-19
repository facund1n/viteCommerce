import BuyerForm from "../components/BuyerForm";
import NavBar from "../components/NavBar";

const CartDetail = () => {
  return (
    <div>
      <NavBar />
      {/* add componente que tenga los elementos del carrito */}
      <BuyerForm />
    </div>
  );
};

export default CartDetail;
