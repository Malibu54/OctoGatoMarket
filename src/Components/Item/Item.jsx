import ItemCount from "../ItemCount/ItemCount";
import "./Style.css";
import { Link } from "react-router-dom";



function Item(props) {


  return (
   <div className="ContenedorCard">
    <div className="card">
      <div className="card-img">
        <img src={props.pictureUrl} alt={props.title} />
      </div>
   <div className="card-detail">
        <h3>{props.title}</h3>
        <p>U$D {props.price}</p>
        <span>{props.categoryId}</span>
      </div>
      <ItemCount />
    </div>
    </div>
  );
}

export default Item;
