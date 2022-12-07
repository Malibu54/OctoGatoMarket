import {getFirestore} from '../'
import { useEffect } from "react";
import React from 'react'

function ItemDetail() {
  useEffect (() => {
    const db =getFirestore();
  
    const ItemCollection = db.ItemCollection("items");
    const item = ItemCollection.doc(itemId);
  
  })
  return (
    <div>ItemDetail</div>
  )
}

export default ItemDetail
