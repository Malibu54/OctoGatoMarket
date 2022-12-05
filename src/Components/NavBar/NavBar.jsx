import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import {  NavLink, } from "react-router-dom";


export const NavBar = () => {
  return (

  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="OctoCatMarket">
        OctoCatMarket
      </a>
      
      <li>
          <NavLink
            to={"/Nosotros"}
            className={({ isActive }) => (isActive ? "violet" : "white")}
          >
            <strong>Nosotros</strong>
          </NavLink>
        </li>


      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="Home">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Category_01">
              Categoria 1
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Category_02">
              Categoria 2
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="Category_03">
              Categoria 3
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="ContacUs">
              Contac Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link cartWidget" href="cartWidget">
              <button type="button" className="btn btn-info">
                <CartWidget />
              </button>
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>


  );
};