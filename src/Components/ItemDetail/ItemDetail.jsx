import React from "react";
import ItemCount from "../ItemCount/ItemCount";




const ItemDetail = ({ product }) => {




  return (
    <div className="item">
      <img src={product.pictureUrl} alt="img" />
      <h2>{product.title}</h2>
      <h3>${product.price}</h3>
      <ItemCount/>
    </div>
  );
};

export default ItemDetail;
