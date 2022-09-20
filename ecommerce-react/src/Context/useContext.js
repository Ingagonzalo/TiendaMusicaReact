import React, { createContext, useState } from 'react'

export const CartContext = createContext([]) //1-creo un contexto

export const CartProvider = ({children}) => { //2-creo un provedor
    const [productCartList, setProductCartList] = useState ([])

    const addItem = (items, qty) => {
        console.log("llegando")
        const newProduct = {
            ...items,
            qty
        }
        const productsInCart = [...productCartList];
        productsInCart.push(newProduct);
        setProductCartList(productsInCart);
        console.log(productsInCart)
        console.log("aca estoy")
    } 
    const removeItem = (itemId) => {
        const productsInCart = productCartList.filter(items => items.id !== itemId) 
        setProductCartList(productsInCart);
    }

    return(
        <CartContext.Provider value={{ productCartList, addItem, removeItem}}>{children}</CartContext.Provider>
    )
}

