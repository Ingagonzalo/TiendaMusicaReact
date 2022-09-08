import React from 'react'
import '../Item/Item.css'


export const ItemDetail = ({data}) => {
  return (
    <div className='detail-container item '>
        <h2 className='title'>item detail</h2>

            <img className='imageStock' src={data.image} alt={data.title} />

        <div className='datos'>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <h4 className='price'>{data.price}</h4>

        </div>
    </div>
  )
}

export default ItemDetail