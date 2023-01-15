import React from "react";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

function CheckOut() {
  const { cart, totalPrice } = useCartContext();

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
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
  };
  return <Link to="/Order"> <button onClick={handledClick}>Confirm your purchase order</button></Link>
}

export default CheckOut;
