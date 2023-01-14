import { useState } from "react";
import "./Style.css";
import { useCartContext } from "../../Context/CartContext";

const ItemCount = ({ onAdd })=> {
  const [count, setCount,] = useState(0);
  const {addProduct} = useCartContext(0);
 

  const decrease = () => {
    setCount((count) => Math.max(count - 1, 0));
  };

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <button key={count} onClick={decrease}>
        -
      </button>
      <span>{count}</span>
      <button key={count >= 1} onClick={increase}>
        +
      </button>
      <div>
        <button onClick={() => onAdd (count)} >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
