import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./Style.css";
import { getAllItems, getAllCategory } from "../../Firebase/config";

const ItemListContainer = ({ presentation }) => {
  const [productList, setProductList] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      getAllCategory(categoryId).then((resultFilter) => {
        setProductList(resultFilter);
      });
    } else {
      getAllItems().then((result) => {
        setProductList(result);
      });
    }
  }, [categoryId]);
  return (
    <>
      <h1>{presentation}</h1>
      <ItemList lista={productList} />{" "}
    </>
  );
};

export default ItemListContainer;
