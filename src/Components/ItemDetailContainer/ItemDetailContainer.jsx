import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getSingleCat } from "../../Firebase/config";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ presentation }) => {
  const [product, setProduct] = useState([]);
  let { catId } = useParams();

  useEffect(() => {
    getSingleCat(catId).then((res) => {
      setProduct(res);
    });
  }, [catId]);

  return (
    <>
      <h1>{presentation}</h1>
      <ItemDetail product={product} />{" "}
    </>
  );
};

export default ItemDetailContainer;
