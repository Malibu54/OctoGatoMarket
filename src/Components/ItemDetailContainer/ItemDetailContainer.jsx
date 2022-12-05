
import { useEffect, useState } from "react";
import ItemList from "../../ItemList/ItemList";


const ItemListContainer = ({ presentation }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts.then((response) => {
      setProductList(response);
    });
  }, []);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });

  return (
    <>
      <ItemList lista={productList} />{" "}
    </>
  );
};

export default ItemListContainer;