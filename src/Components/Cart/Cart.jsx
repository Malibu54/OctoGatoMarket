import React from 'react'
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const {cart, totalPrice} = useCartContext ();

    if (cart.length === 0) {
        return(
            <>
                <p>Oh no! Your cart is empty! 😞 </p>
                <Link to="/">Back to home</Link>
            </>
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
    </>
  )
}
export default Cart