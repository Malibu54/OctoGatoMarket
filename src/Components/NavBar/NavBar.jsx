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
        <Link to='/home' className={({ isActive }) => (isActive ? "violet" : "white")}>Home </Link>
        </li>
        <li className="nav-item">
        <Link to='/black/black' className={({ isActive }) => (isActive ? "violet" : "white")}>Black</Link> 
        </li>
        <li className="nav-item">
        <Link to='/cian/cian' className={({ isActive }) => (isActive ? "violet" : "white")}>Cian</Link>  
        </li>
        <li className="nav-item">
        <Link to='/white/white' className={({ isActive }) => (isActive ? "violet" : "white")}>White</Link>  
        </li>
        <li className="nav-item">
        <Link to='/Contactanos' className={({ isActive }) => (isActive ? "violet" : "white")}>Contactanos</Link>  
        </li>
        <li>
        <Link to='/CartWidget'><button><CartWidget/></button></Link>
        </li>
      </ul>
    </div>
  </nav>

    </>
  )
}

export default NavBar;