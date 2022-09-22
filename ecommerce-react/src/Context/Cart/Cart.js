import React, { useContext } from 'react';
import { CartContext } from '../useContext';


const Cart = () => {
    const {productCartList, removeItem} = useContext(CartContext);
    if (productCartList.length === 0 ){
        return(
            <p>El carrito esta vacio</p>
        )
        
    }

    return (
        <div>
            <h2 className='carrito'>Carrito:</h2>
            <div className='listaCarrito'>
                {
                    productCartList.map((item) => {
                        return (
                            <div className='itemCarrito'>    
                                <p className='productoCarrito'>{item.title}</p>
                                <p className='cantidadCarrito'>{item.quantity}</p>
                                <p className='precioCarrito'>${item.price}</p>
                                <p className='subtotalCarrito'>Subtotal: ${item.quantity*item.price}</p>
                                <div className='removerCarrito'>
                                    <button onClick={()=>removeItem(item.id)} className='remover'>Remover producto</button>
                                </div>
                             
                            </div>
                        )
                    })
                }   
            </div>
     
               
            
        </div>
        
    )
   
}

export default Cart;