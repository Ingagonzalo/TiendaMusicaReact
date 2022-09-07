import React from "react";
import './Item.css';

const Stock = ({ image, title, description, price }) => {
  return (
    <div className="item">
      <img className="imageStock" src={image} alt="Guitarra" />
      <div className="card">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <p className="price">{price}</p>
        <button>Ver Más...</button>
      </div>
    </div>
  );
};

export default Stock;

