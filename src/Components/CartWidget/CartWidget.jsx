import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

export const CartWidget = () => {
  const  {totalProducts} = useCartContext();
  return (
      <Link to="/Cart">
      <>
      <i className="bi bi-cart-check-fill">Cart </i>
      <span>{totalProducts() || ''}</span>
      </>
    </Link>
   

  );
};
