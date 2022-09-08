import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailList = ({itemslist}) => {
  return (
    <div>
         <div>
         {itemslist.map((item) => (
                <ItemDetail key={item.id} image={item.image} description={item.description} price={item.price} title={item.title} />
            ))}
        </div>
    </div>
  )
}

export default ItemDetailList