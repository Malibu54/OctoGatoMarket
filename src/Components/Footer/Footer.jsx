import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <span> OctoCatMarket</span>
      <span> All rights reserved &#169; 2022</span>
      <Link to="/Policy">  <button>Terms & Conditions</button> </Link>
    </footer>
  );
}
