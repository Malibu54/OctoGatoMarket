import React from "react";
import "./Order.css";
import { useParams } from "react-router-dom";
import bit_octocat from "./bit_octocat.png";
import { Link } from "react-router-dom";

function Order() {

  const { id} = useParams();
  return (
    <div className="order__purchase">
      <h2>
        Your purchase order is <strong>({id})</strong>
      </h2>
      <p>Thank you for your purchase</p>
      <Link to="/"><img src={bit_octocat} alt="bit_octocat" /></Link>
    </div>
  );
}

export default Order;