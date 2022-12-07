import "./Style.css";
import Item from "../Item/Item";
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';


const ItemListContainer = ({ presentation }) => {
/*   const [Item, setData] =useState ([]);


const {categoryId} = useParams();

useEffect(() => {
  const getData = new Promise (resolve =>{
    setTimeout(() =>{
      resolve(Item);
    },3000)
  });
  if (categoryId){
    getData.then(res => setData(res.filter => categoryId === categoryId));
  }else {
    getData.then(res => setData(res));
  }
  

}, [Item])
 */


  return (
    <>
      <h1>{presentation}</h1>
      <Item
        title="Gato 1"
        imgurl="/imgs/octocat1.jpg"
        price={"100"}
        description="lorem ipsum dolor sit "
        category="Category Cian"
      />
      <Item
        title="Gato 2"
        imgurl="/imgs/octocat2.jpg"
        price={"200"}
        description="lorem ipsum dolor sit "
        category="Category Black"
      />
      <Item
        title="Gato 3"
        imgurl="/imgs/octocat3.jpg"
        price={"300"}
        description="lorem ipsum dolor sit "
        category="Category Black"
      />
      <Item
        title="Gato 4"
        imgurl="/imgs/octocat4.jpg"
        price={"400"}
        description="lorem ipsum dolor sit "
        category="Category White"
      />
      <Item
        title="Gato 5"
        imgurl="/imgs/octocat5.jpg"
        price={"500"}
        description="lorem ipsum dolor sit "
        category="Category Black"
      />
    </>
  );
};

export default ItemListContainer;



/* import { useEffect, useState } from "react";
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

export default ItemListContainer; */