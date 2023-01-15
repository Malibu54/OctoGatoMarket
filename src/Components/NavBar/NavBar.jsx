import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link
                to="/"
                className={({ isActive }) => (isActive ? "violet" : "white")}
              >
                Home{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/category/Black"
                className={({ isActive }) => (isActive ? "violet" : "white")}
                presentation="Black Category"
              >
                Black
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/category/Cian"
                className={({ isActive }) => (isActive ? "violet" : "white")}
                presentation="Cian Category"
              >
                Cian
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/category/White"
                className={({ isActive }) => (isActive ? "violet" : "white")}
                presentation="White Category"
              >
                White
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contactanos"
                className={({ isActive }) => (isActive ? "violet" : "white")}
              >
                Contactanos
              </Link>
            </li>

            <li>
              <Link to="/Cart">
                <CartWidget />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
