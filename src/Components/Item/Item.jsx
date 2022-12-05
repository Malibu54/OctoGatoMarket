import ItemCount from "../ItemCount/ItemCount";
import "./Style.css";

function Item(prop) {
  return (
    <div className="ContenedorCard">
    <div className="card">
      <div className="card-img">
        <img src={prop.imgurl} alt={prop.title} />
      </div>
   <div className="card-detail">
        <h3>{prop.title}</h3>
        <span>{prop.description}</span>
        <p>U$D {prop.price}</p>
      </div>
      <ItemCount />
    </div>
    </div>
  );
}

export default Item;
