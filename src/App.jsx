
import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";



function App() {
  return (


<div className="App">
<NavBar/>
      <header className="App-header">

        <ItemListContainer presentation="Mira mis productos!"/>
      </header>
    </div>
  );
}

export default App;
