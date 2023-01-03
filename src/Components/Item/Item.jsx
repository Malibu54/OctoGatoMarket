
import "./Style.css";
import { Link } from "react-router-dom"




function Item(props) {
let urlCat = `/item/${props.id}`

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
        <Link to={urlCat}>Show me</Link>
      </div>

    </div>
    </div>
  );
}

export default Item;
