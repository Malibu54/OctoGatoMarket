import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <Link to="/Cart">
      <i className="bi bi-cart-check-fill"> My cart</i>
    </Link>
  );
};
