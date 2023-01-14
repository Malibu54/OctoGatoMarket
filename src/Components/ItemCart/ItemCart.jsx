import React from "react";
import { useCartContext } from "../../Context/CartContext";
import "./ItemCart.css";


const ItemCart =({product}) => {
 const {removeProduct} =  useCartContext()
    return(
    <div className="itemCart">
        <img src={product.image} alt={product.title}/>
        <div>
        <p>Name :{product.title}</p>
        <p>Category{product.categoryId}</p>
        <p>Unity Price U$D{product.price}</p>
        <p>Items quantity{product.quantity}</p>
        <p>Amount: {product.quantity * product.price}</p>
        <button onClick={() => removeProduct (product.id)}>Clear Cart</button>
          
        </div>
    </div>
    )
}

export default ItemCart;