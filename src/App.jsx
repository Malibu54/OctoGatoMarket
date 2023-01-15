import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Formulario from "./Components/Form/Form";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import NotFound from "./Components/NotFound/NotFound";
import CartProvider from "./Context/CartContext";
import Policy from "./Components/Conditions&Terms/Policy";
import CheckOut from "./Components/CheckOut/CheckOut";
import Order from "./Components/Order/Order";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/item/:catId" element={<ItemDetailContainer />} />
            <Route path="/Contactanos" element={<Formulario />} />
            <Route path="*" element={<NotFound />} />
            <Route path="OctoGatoMarket" element={<NotFound />} />
            <Route path="/CheckOut" element={<CheckOut />} />
            <Route path="/Order" element={<Order />} />
            <Route path="Policy" element={<Policy />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
