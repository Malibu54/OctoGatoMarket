import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (quantity) => {
    setGoToCart(true);
  };

  return (
    <div className="item">
      <img src={data.pictureUrl} alt="img" />
      <h2>{data.title}</h2>
      <h3>${data.price}</h3>
      {goToCart ? (
        <Link to="/cartWidget">Finalizar Compra</Link>
      ) : (
        <ItemCount initial={3} stock={5} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
