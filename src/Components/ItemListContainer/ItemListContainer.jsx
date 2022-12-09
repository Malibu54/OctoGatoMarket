


/* const octoCats = [
  {
    id: "001",
    title: "Gato 1",
    imgurl: "/imgs/octocat1.jpg",
    price: "100",
    description: "lorem ipsum dolor sit ",
    category: "Category Cian",
  },
  {
    id: "002",
    title: "Gato 2",
    imgurl: "/imgs/octocat2.jpg",
    price: "200",
    description: "lorem ipsum dolor sit ",
    category: "Category Black",
  },
  {
    id: "003",
    title: "Gato 3",
    imgurl: "/imgs/octocat3.jpg",
    price: "300",
    description: "lorem ipsum dolor sit ",
    category: "Category Black",
  },
  {
    id: "004",
    title: "Gato 4",
    imgurl: "/imgs/octocat4.jpg",
    price: "400",
    description: "lorem ipsum dolor sit ",
    category: "Category White",
  },
  {
    id: "005",
    title: "Gato 5",
    imgurl: "/imgs/octocat5.jpg",
    price: "500",
    description: "lorem ipsum dolor sit ",
    category: "Category Black",
  },
]; */

import data from "../mockdata";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./Style.css";


const ItemListContainer = ({ greeting }) => {
  const [productList, setProductList] = useState([]);
  const { categoryName } = useParams(); 
  console.log(categoryName);

  useEffect(() => {
    getProducts.then((response) => {
      setProductList(response);
    });
  }, []);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  return (
    <>
      <ItemList lista={productList} />{" "}
    </>
  );
};

export default ItemListContainer;
