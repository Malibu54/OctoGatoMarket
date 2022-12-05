import "./Style.css";
import Item from "../Item/Item";


const ItemListContainer = ({ presentation }) => {
  return (
    <>
      <h1>{presentation}</h1>
      <Item
        title="Gato 1"
        imgurl="/imgs/octocat1.jpg"
        price={"100"}
        description="lorem ipsum dolor sit "
      />
      <Item
        title="Gato 2"
        imgurl="/imgs/octocat2.jpg"
        price={"200"}
        description="lorem ipsum dolor sit "
      />
      <Item
        title="Gato 3"
        imgurl="/imgs/octocat3.jpg"
        price={"300"}
        description="lorem ipsum dolor sit "
      />
      <Item
        title="Gato 4"
        imgurl="/imgs/octocat4.jpg"
        price={"400"}
        description="lorem ipsum dolor sit "
      />
      <Item
        title="Gato 5"
        imgurl="/imgs/octocat5.jpg"
        price={"500"}
        description="lorem ipsum dolor sit "
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