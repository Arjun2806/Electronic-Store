import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./context/productcontext.jsx";
import { FilterContextProvider } from "./context/Filter_Context.jsx";
import { CartProvider } from "./context/cart_context.jsx";
import { Auth0Provider } from "@auth0/auth0-react";



ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider 
    domain="dev-6bxdvfmgzvv0hkp7.us.auth0.com"
    clientId="CHnHrgVOk2vvtdadAnLFToY1ULbrageb"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </Auth0Provider>
);
