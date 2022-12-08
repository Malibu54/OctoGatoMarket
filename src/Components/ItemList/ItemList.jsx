import Item from "../Item/Item"

const ItemList = ({octoCat = []}) =>  {
  return (
   octoCat.map(octoCat => <Item key={octoCat.id} info={octoCat}/>)
  );
}

export default ItemList

