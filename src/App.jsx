import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulario from "./Components/Form/Form";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
import React from "react";
import CartProvider  from "./Context/CartContext";
import Cart from "./Components/Cart/Cart";

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
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
