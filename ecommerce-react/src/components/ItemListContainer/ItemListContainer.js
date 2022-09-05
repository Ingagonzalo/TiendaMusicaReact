import './ItemListContainer.css'
import ItemCount from '../itemCount/itemCount';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({greeting}) => {
  return (
    <div className="itemListContainer">
    <p>{greeting}</p>
    <ItemCount nameProduct={"PRS McCarty 594 Top Ten USA"} stock={10} initial={1} />
    <ItemList />
    </div>
  )
}

export default ItemListContainer


