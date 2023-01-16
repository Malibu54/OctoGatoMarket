import React from "react";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import "./Cart.css";
import octocat from "./octocat.gif";


const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="items__later">
        <h1>No items saved for later 😞 </h1>
        <img src={octocat} alt="bit_octocat" />

        <Link to="/">
          <button>Back to home</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>Amount: {totalPrice()}</p>
      <Link to="/CheckOut">
        <button>Go to CheckOut</button>
      </Link>
    </>
  );
};
export default Cart;
