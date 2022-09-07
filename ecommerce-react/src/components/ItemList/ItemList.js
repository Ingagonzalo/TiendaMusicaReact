
import Item from "../Item/Item";

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((item) => (
                <Item key={item.id} image={item.image} description={item.description} price={item.price} title={item.title} />
            ))}
        </div>
    )
}

export default ItemList;