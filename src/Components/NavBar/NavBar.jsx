import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";



function NavBar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <Link to={"/"}>
        <img src={logo} alt="logo" className="logo" />
      </Link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
        <Link to='/' className={({ isActive }) => (isActive ? "violet" : "white")}>Home </Link>
        </li>
        <li class="nav-item">
        <Link to='/categoria_01' className={({ isActive }) => (isActive ? "violet" : "white")}>Categoria 01</Link> 
        </li>
        <li class="nav-item">
        <Link to='/categoria_02' className={({ isActive }) => (isActive ? "violet" : "white")}>Categoria 02</Link>  
        </li>
        <li class="nav-item">
        <Link to='/categoria_03' className={({ isActive }) => (isActive ? "violet" : "white")}>Categoria 03</Link>  
        </li>
        <li class="nav-item">
        <Link to='/Contactanos' className={({ isActive }) => (isActive ? "violet" : "white")}>Contactanos</Link>  
        </li>
        <li><Link to='/CartWidget' className={({ isActive }) => (isActive ? "violet" : "white")}><button type="button" class="btn btn-info"><CartWidget/></button></Link></li>
      </ul>
    </div>
  </nav>

    </>
  )
}

export default NavBar;