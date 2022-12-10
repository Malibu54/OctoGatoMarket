import Item from "../Item/Item"
import { Link } from "react-router-dom";


const ItemList = ({ lista }) =>  {
  return (
    <div>
    {lista.map((product)=> (
        <Link id={product.id}
              to={'/blacks/' + product.id}>

        
      <Item className="itemlist"
            id={product.id}
            title={product.title}
            price={product.price}
            pictureUrl={product.pictureUrl}
            category={product.category} /> 
      </Link>
    ))
    }
    </div>
  );
}

export default ItemList

