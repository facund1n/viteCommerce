import NavBar from "../components/NavBar";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import LogInOutInterface from "../components/LogInOutInterface";

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
      <LogInOutInterface auth={auth} userLogged={userLogged} userId={userId} />
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
