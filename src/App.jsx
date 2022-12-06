import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
/* import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"; */
import { BrowserRouter,Routes, Route,} from "react-router-dom";
import { CartWidget } from "./Components/CartWidget/CartWidget";
import Formulario from "./Components/Form/Form";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer presentation="Mira mis productos!" />}/>
          <Route path='/categoria_01' element={<ItemListContainer presentation="Mira mis productos!" />}/>
          <Route path='/categoria_02' element={<ItemListContainer presentation="Mira mis productos!" />}/>
          <Route path='/categoria_03' element={<ItemListContainer presentation="Mira mis productos!" />}/>
          <Route path='/CartWidget' element={<CartWidget />}/>
          <Route path='/Detail' element={{/* <ItemDetailContainer/> */}}/>
          <Route path='/Contactanos' element={<Formulario/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>



    </>
  );
}

export default App;
