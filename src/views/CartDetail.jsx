import BuyerForm from "../components/BuyerForm";
import NavBar from "../components/NavBar";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

const CartDetail = ({
  cart,
  deleteOne,
  clearCart,
  isAdmin,
  totalPrice,
  auth,
  userLogged,
}) => {
  return (
    <>
      {/* ver si se pasa prop cart o data */}
      <NavBar isAdmin={isAdmin} cart={cart} />
      <Container className="min-vh-100">
        <Cart
          cart={cart}
          auth={auth}
          userLogged={userLogged}
          deleteOne={deleteOne}
          clearCart={clearCart}
          totalPrice={totalPrice}
        />
        <BuyerForm />
      </Container>
      <Footer />
    </>
  );
};

export default CartDetail;
