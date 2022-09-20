import { CartContext } from './useContext'
import { useContext } from 'react'

const Cart = () => {
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
                          <button onClick={()=>removeItem(item.id)}>Remover producto</button>
                      </> 
                  )
              })
          }
      </div>
  )
}

export default Cart