import ItemCount from "../ItemCount/ItemCount";

function ItemDetail() {
  return (
    <div className="container">
    <div className="detail">
    <img className="detail__img" src={detail.imgurl} alt=""/>
    <div className="content">
    <h1>{detail.title}</h1>
        <ItemCount />
    </div>
    </div>
    </div>
  );
}

export default ItemDetail;
