import React from 'react'
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import "./Cart.css"

const Cart = () => {
    const {cart, totalPrice} = useCartContext ();

    if (cart.length === 0) {
        return(
            <div className="items__later">
                <p>No items saved for later 😞 </p>
                <Link to="/">Back to home</Link>
            </div>
        );
    }
  

    return (
    <>
        {
            cart.map(product => <ItemCart key={product.id} product={product}/>)
        }
        <p>
            Amount: {totalPrice()}
        </p>
        <Link to="/CheckOut"> Proceed to checkout </Link>
    </>
  )
}
export default Cart