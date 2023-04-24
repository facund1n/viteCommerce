import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/CustomStyle.css";
import Routing from "./routes/Routing";
import { ChakraProvider } from "@chakra-ui/react";
import "./CartFunctions";
import CartFunctions from "./CartFunctions";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <CartFunctions />
    </ChakraProvider>
  </React.StrictMode>
);
