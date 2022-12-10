import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"; 
import { BrowserRouter,Routes, Route,} from "react-router-dom";
import { CartWidget } from "./Components/CartWidget/CartWidget";
import Formulario from "./Components/Form/Form";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/black/black' element={<ItemListContainer presentation="Black Category" />}/>
          <Route path='/cian/cian' element={<ItemListContainer presentation="Cian Category" />}/>
          <Route path='/white/white' element={<ItemListContainer presentation="White Category" />}/>
          <Route path='/CartWidget' element={<CartWidget />}/>
          <Route path='/Detail/:detailId' element={<ItemDetailContainer/> }/>
          <Route path='/Contactanos' element={<Formulario/>}/>
          <Route path="*" element={<NotFound />} />
          <Route path="OctoGatoMarket" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer/>



    </>
  );
}

export default App;
