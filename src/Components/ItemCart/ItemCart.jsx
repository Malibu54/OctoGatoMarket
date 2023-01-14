import React from "react";
import { useCartContext } from "../../Context/CartContext";
import "./ItemCart.css";
import { Link } from "react-router-dom";


const ItemCart =({product}) => {
 const {removeProduct} =  useCartContext()
    return(
    <div className="itemCart">
        <img src={product.pictureUrl} alt={product.title}/>
        <div>
        <p>Name: {product.title}</p>
        <p>Category {product.categoryId}</p>
        <p>Unity Price U$D {product.price}</p>
        <p>Items quantity {product.quantity}</p>
        <p>Price: {product.quantity * product.price}</p>
        <button onClick={() => removeProduct (product.id)}>Clear Cart</button>
        <span className="more__cats">
        <Link to="/">  <button>Continue shopping</button></Link>  
        </span>
        </div>
    </div>
    )
}

export default ItemCart;