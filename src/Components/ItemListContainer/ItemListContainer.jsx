import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./Style.css";
import { getAllItems, getAllCategory } from "../../Firebase/config";

const ItemListContainer = () => {
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
      <ItemList lista={productList} />{" "}
    </>
  );
};

export default ItemListContainer;
