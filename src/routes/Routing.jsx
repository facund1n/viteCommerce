import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import OneProductFetch from "../components/products/OneProductFetch";
import Main from "../views/Main";
import ErrorPage from "../components/ErrorPage";
import CartDetail from "../views/CartDetail";
import AllProducts from "../components/crud/AllProducts";
import UserPanel from "../components/UserPanel";

import Cookies from "js-cookie";
import LogInPage from "../views/LogInPage";
import RegisterPage from "../views/RegisterPage";

const Routing = ({
  addToCart,
  deleteOne,
  clearCart,
  modifyCart,
  totalPrice,
  totalQ,
  cart,
}) => {
  const [auth, setAuth] = useState();
  const [userLogged, setLoggedUserName] = useState();

  // cookie decoder:
  let cookies = Cookies.withConverter({
    read: function (value, name) {
      if (name === "escaped") {
        return unescape(value);
      }
      // Fall back to default for all other cookies
      return Cookies.converter.read(value, name);
    },
  });
  //use token as auth:
  const isAuth = cookies.get("_auth");
  // get user name from cookie:
  const getUser = cookies.get("_auth_state");

  useEffect(() => {
    if (isAuth && getUser) {
      // remove fisrt and last: "", from user name.
      const user = getUser.slice(1, -1);
      isAuth ? setAuth(true) : setAuth(false);
      getUser ? setLoggedUserName(user) : setLoggedUserName();
      console.log("Logeado como: ", userLogged);
    }
  }, [auth, userLogged]);

  const isAdmin = Cookies.get("id");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              addToCart={addToCart}
              totalQ={totalQ}
              auth={auth}
              userLogged={userLogged}
              isAdmin={isAdmin}
              cart={cart}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
        <Route
          path={"/products/:id"}
          element={
            <OneProductFetch
              addToCart={addToCart}
              auth={auth}
              userLogged={userLogged}
              cart={cart}
              isAdmin={isAdmin}
            />
          }
        />
        <Route
          path={"/checkout"}
          element={
            <CartDetail
              cart={cart}
              deleteOne={deleteOne}
              clearCart={clearCart}
              auth={auth}
              userLogged={userLogged}
              isAdmin={isAdmin}
              totalPrice={totalPrice}
            />
          }
        />
        <Route
          path="/user/:id"
          element={<UserPanel auth={auth} userLogged={userLogged} />}
        />
        {isAdmin === "6450494eb499f437fa44e0ed" ? (
          <Route path={"/panel"} element={<AllProducts />} />
        ) : (
          <Route path={"/panel"} element={<ErrorPage />} />
        )}
        <Route path={"/login"} element={<LogInPage />} />
        <Route path={"/register"} element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
