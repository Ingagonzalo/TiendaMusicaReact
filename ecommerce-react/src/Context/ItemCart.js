import { CartContext } from './useContext'
import { useContext } from 'react'

const ItemCart = () => {
  const {productCartList, removeItem} = useContext(CartContext);

  return (
      <div>
          <h2>Carrito:</h2>
          {
              productCartList.map((item) => {
                  return (
                      <>
                          <p>{item.title}</p>
                          <p>{item.quantity}</p>
                          <p>Precio u.: ${item.price}</p>
                          <p>Subtotal: ${item.quantity*item.price}</p>
                          <button onClick={()=>removeItem(item.id)}>Remover producto</button>
                      </> 
                  )
              })
          }
      </div>
  )
}

export default ItemCart