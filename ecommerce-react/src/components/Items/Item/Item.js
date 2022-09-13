import React  from "react";
import './Item.css';
import { Link } from "react-router-dom";
const Item = ({ image, title, price, id, category }) => { /*Exporto como se va a ver */
  return (
    <div className="item">
      
      <div className="card">
      <img className="imageStock" src={image} alt="Guitarra" />
        <h2 className="title">{title}</h2>
        <p className="price">{price}</p>
        <Link to={`/productos/${category}/${title}`}>
          <button>Ver Más...</button></Link>
      </div>
    </div>
  );
};

export default Item;

