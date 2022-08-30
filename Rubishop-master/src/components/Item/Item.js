import React from "react";
import './Item.css';
import { useState, useEffect } from "react";

const Item = () => {
  const [items, setItems] = useState([]);

  const item = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: "1",
            title: "Cubo 3×3×3 Qiyi",
            description: "Cubo original marca Qiyi",
            price: "$3000",
            pictureUrl:
              "https://http2.mlstatic.com/D_NQ_NP_730276-MLA40147249639_122019-O.webp",
          },
          {
            id: "2",
            title: "Mirror cube",
            description: "3×3×3 shapemod",
            price: "$3000",
            pictureUrl:
              "https://m.media-amazon.com/images/I/71TrvUl50OL.jpg",
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
      {items.map((i) => (
        <div key={i.id} className="item">
          <p>{i.title}</p>
          <img src={i.pictureUrl} alt="Mirror cube" width="250px" />
          <p>{i.description}</p>
          <p>{i.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Item;
