import logo from './images/logo.png'; 
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import React from 'react';

const NavBar= () => {
    return (
        <div className='navBar'> 
            <a href='#'><img src={logo} width={"50px"} alt="Logo de Rubishop"/></a>
            <ul className='navList'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Productos</a></li>
                <li><a href='#'>Contacto</a></li>
                <li><a href='#'>About</a></li>
            </ul>
            <CartWidget />
        </div>
    )
};

export default NavBar;