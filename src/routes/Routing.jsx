import { BrowserRouter, Routes, Route } from "react-router-dom";
import OneProductFetch from "../components/products/OneProductFetch";
import Main from "../views/Main";
import ErrorPage from "../components/ErrorPage";
import CartDetail from "../views/CartDetail";
import AllProducts from "../components/crud/AllProducts";
import UserPanel from "../components/UserPanel";

const Routing = ({
  addToCart,
  deleteOne,
  clearCart,
  modifyCart,
  totalP,
  totalQ,
  cart,
}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Main addToCart={addToCart} totalQ={totalQ} cart={cart} />}
        />
        <Route path="*" element={<ErrorPage />} />
        <Route
          path={"/products/:id"}
          element={<OneProductFetch addToCart={addToCart} />}
        />
        <Route
          path={"/checkout"}
          element={
            <CartDetail
              cart={cart}
              deleteOne={deleteOne}
              clearCart={clearCart}
              totalP={totalP}
            />
          }
        />
        <Route path="/user/:id" element={<UserPanel />} />
        <Route path={"/panel"} element={<AllProducts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
