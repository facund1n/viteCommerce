import { BrowserRouter, Routes, Route } from "react-router-dom";
import OneProductFetch from "../components/products/OneProductFetch";
import Main from "../views/Main";
import ErrorPage from "../components/ErrorPage";
import CartDetail from "../views/CartDetail";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path={"/products/:id"} element={<OneProductFetch />} />
        <Route path={"/checkout"} element={<CartDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
