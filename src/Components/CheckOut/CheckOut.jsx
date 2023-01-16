import React,{useState} from "react";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import bit_octocat from "../Order/bit_octocat.png";

function CheckOut() {
  const { cart, totalPrice } = useCartContext();
  const [orderID, setOrderID]= useState('')

  const order = {
    buyer: {
      name: "Oriana",
      mail: "prueba@pruebas.com",
      phone: "0303456",
      adress: "Av Siempre Viva 123",
    },
    items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),
    total: totalPrice(),
  };

  const handledClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => setOrderID(id));
  };
  return (
    <>
    {orderID ?  <div className="order__purchase">
      <h2>
        Your purchase order is <strong>{orderID}</strong>
      </h2>
      <p>Thank you for your purchase</p>
      <Link to="/"><img src={bit_octocat} alt="bit_octocat" /></Link>
    </div>: <button onClick={handledClick}>Confirm your purchase order</button>}
    </>
  )
}

export default CheckOut;