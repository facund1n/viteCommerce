import NavBar from "../components/NavBar";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";

const CartDetail = ({
  cart,
  deleteOne,
  clearCart,
  userId,
  totalPrice,
  auth,
  userLogged,
}) => {
  return (
    <>
      {/* ver si se pasa prop cart o data */}
      <NavBar userId={userId} cart={cart} />
      <Container className="min-vh-100">
        <Cart
          cart={cart}
          auth={auth}
          userLogged={userLogged}
          deleteOne={deleteOne}
          clearCart={clearCart}
          totalPrice={totalPrice}
        />
      </Container>
      <Footer />
    </>
  );
};

export default CartDetail;
