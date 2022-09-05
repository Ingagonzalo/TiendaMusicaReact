import React from "react";
import './Item.css';
import { useState, useEffect } from "react";

const Stock = () => {
  const [items, setItems] = useState([]);

  const item = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: "1",
            title: "PRS McCarty 594 Top Ten USA",
            description: "A fines de la década de 1980, Paul Reed Smith llamó a Ted McCarty para consultarle sobre el diseño de guitarras y técnicas de fabricacion. No solo sirvió como mentor, sino que se convirtió en un gran amigo de Paul. En 1994, PRS lanzó la primer McCarty, un instrumento que incorporaba todo el espectro de técnicas y conocimientos que Paul había obtenido de Ted.",
            price: "$86571.00",
            image:
              "https://y6v8e8y4.rocketcdn.me/wp-content/uploads/2022/04/D_764207-MLA49523221494_032022-F-450x800.jpg",
          },
          {
            id: "2",
            title: "Guitarra Electroacustica Martin DXJ Johnny Cash – Pre Fishman",
            description: "La DX Johnny Cash es un homenaje a la historia entre Cash y Martin Guitars, diseñada en colaboración con John Carter Cash y el equipo de management de la Cash Foundation para recrear las auténticas prestaciones del cuerpo Dreadnought clásico con laminado de alta presión HPL y el inconfundible logo “CASH” en el diapasón.",
            price: "$50000.00",
            image:
              "https://compasuno.com.ar/wp-content/uploads/2021/12/D_843088-MLA48407369726_122021-F-300x300.jpg",
          },
        ]);
      }, 2000);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const itemList = await item();
      setItems(itemList);
    };
    fetchData();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className="item">
          
          <img className="imageStock"src={item.image} alt="Guitarra" />
          <div className="card">
            <h2 className="title">{item.title}</h2>
            <p className="description">{item.description}</p>
            <p className="price">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stock;
