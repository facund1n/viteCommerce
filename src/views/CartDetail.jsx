import BuyerForm from "../components/BuyerForm";
import NavBar from "../components/NavBar";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

const CartDetail = ({ cart, deleteOne, clearCart, totalP, isAdmin }) => {
  return (
    <>
      {/* ver si se pasa prop cart o data */}
      <NavBar isAdmin={isAdmin} />
      <Container className="min-vh-100">
        <Cart
          cart={cart}
          deleteOne={deleteOne}
          clearCart={clearCart}
          totalP={totalP}
        />
        <BuyerForm />
      </Container>
      <Footer />
    </>
  );
};

export default CartDetail;
