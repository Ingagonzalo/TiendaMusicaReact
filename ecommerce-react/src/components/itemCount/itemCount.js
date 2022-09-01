import React from "react";
import './itemCount.css';
import { useState } from "react";

const ItemCount = ({nameProduct, stock, initial}) => {
    
    const [ItemCount, setItemCount] = useState(initial);
        const sumar = () => {
            
            if (ItemCount < stock){
                setItemCount(ItemCount + 1);
            } else {
                setItemCount(1)
            }
        }
        const restar = () => {
            if (ItemCount > 1){
                setItemCount(ItemCount - 1);
            } else {
                setItemCount(stock)
            }
        }

    return (
        <div className="counterContainer">
            <h4>{nameProduct}:</h4>
            <div className="counter">
                <div className="itemCountButton" onClick={restar}><h4>-</h4></div>
                <div className="itemCount">{ItemCount}</div>
                <div className="itemCountButton" onClick={sumar}><h4>+</h4></div>
            </div>
            <button>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;