import Item from "../Item/Item"
import { Link } from "react-router-dom";



const ItemList = ({ lista }) =>  {


  return (
    <div>
    {lista.map((product)=> (
      <Link id={product.id}
              to={'/black/' + product.id}>

      <Item className="itemlist"
            id={product.id}
            title={product.title}
            price={product.price}
            pictureUrl={product.pictureUrl}
            categoryId={product.categoryId} /> 
      </Link>
    ))
    }
    </div>
  );
}

export default ItemList

