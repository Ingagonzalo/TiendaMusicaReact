import './StockListContainer.css'
import ItemCount from '../itemCount/itemCount';
import StockList from '../stockList/stockList';


const StockListContainer = ({greeting}) => {
  return (
    <div className="itemListContainer">
    <p>{greeting}</p>
    <ItemCount nameProduct={"PRS McCarty 594 Top Ten USA"} stock="10" initial="1" />
    <StockList />
    </div>
  )
}

export default StockListContainer


