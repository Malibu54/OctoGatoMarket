import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"; 
import { BrowserRouter,Routes, Route,} from "react-router-dom";
import { CartWidget } from "./Components/CartWidget/CartWidget";
import Formulario from "./Components/Form/Form";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
import React from "react";
import CartProvider from "./Context/CartContext";



function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/home' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/CartWidget' element={<CartWidget />}/>
          <Route path='/item/:catId' element={<ItemDetailContainer /> }/>
          <Route path='/Contactanos' element={<Formulario />}/>
          <Route path='*' element={<NotFound />} />
          <Route path="OctoGatoMarket" element={<NotFound />} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
      <Footer/>



    </>
  );
}

export default App;
