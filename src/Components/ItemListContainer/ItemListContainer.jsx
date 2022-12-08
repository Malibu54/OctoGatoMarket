import "./Style.css";
import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import ItemList from "../ItemList/ItemList";

const octoCats = [
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
];

const ItemListContainer = ({ presentation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(octoCats);
      }, 3000);
    });

    getData.then(res => setData);
  }, []);

  return (
    <>
      <h1>{presentation}</h1>
        <Item/>
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;

