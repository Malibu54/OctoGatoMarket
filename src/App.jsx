/* import octogato from "./img/daftpunktocat-guy.gif"; */
import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { NavBar } from "./Components/NavBar/NavBar";


function App() {
  return (
    <div>
      <NavBar />
      <header className="App-header">
   {/*      <img src={octogato} className="App-logo" alt="logo" />
        <p>
          Site <code>src/App.js</code> under constructor.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a> */}
        <ItemListContainer presentation="Mira mis productos!"/>
      </header>
          Sorry for the inconvenience
    </div>
  );
}

export default App;
