import data from "../mockdata";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./Style.css";


const ItemListContainer = ({ presentation }) => {
  const [productList, setProductList] = useState([]);
  const { categoryId } = useParams(); 
  console.log(categoryId);

  useEffect(() => {
    getProducts.then((response) => {
      setProductList(response);
    });
    if (categoryId) {
      getProducts.then(res => setProductList(res.filter((element)=> element.category === categoryId)));
    }else{
      getProducts.then(res => setProductList(res))
    }
  },[categoryId]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  }
  );
    

  return (
    <>
    <h1>{presentation}</h1>
      <ItemList lista={productList} />{" "}
    </>
  );
};

export default ItemListContainer;
