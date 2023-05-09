import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/CustomStyle.css";
import { AuthProvider } from "react-auth-kit";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartFunctions from "./CartFunctions";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider
      authType={"cookie"}
      authName={"_auth"} // nombre cookie
      cookieDomain={window.location.hostname} // dominio de cookie
      cookieSecure={false} // protocolo HTTP, no HTTPS.
    >
      <CartFunctions />
    </AuthProvider>
  </React.StrictMode>
);
