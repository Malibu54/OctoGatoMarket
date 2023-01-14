import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from '../../Context/CartContext';



const ItemDetail = ({ product }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext()
  const onAdd = (quantity) => {
    addProduct(product, quantity);
    setGoToCart(true)
  };

  return (
    <div className="itemCart">
      <img src={product.pictureUrl} alt="img" />
      <h2>{product.title}</h2>
      <h3>${product.price}</h3>
      {goToCart ? (
        <span className="cart__detail">
        <Link to="/Cart"><button>View List</button></Link>
        </span>
      ) : (
        <ItemCount onAdd={onAdd}/>
      )}

    </div>
  );
};

export default ItemDetail;
