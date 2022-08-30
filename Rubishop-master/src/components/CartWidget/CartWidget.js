import "./CartWidget.css";
import cart from './Images/cart.png';
import React from "react";

const CartWidget = () => {
    return (
        <div className="cart">
            <a href="#"><div className="cartBg"><img src={cart} width={"25px"} alt="Carrito" /></div></a>
        </div>
    )
}

export default CartWidget;