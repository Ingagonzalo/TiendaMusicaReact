import React, {useEffect, useState}from 'react'
import ItemDetail from '../ItemDetail/itemDetail'


const itemDataDetail = { id: "3", title: "Guitarra eléctrica Schecter C-6 Plus/Deluxe C-6 Plus de tilo see-thru cherry burst con diapasón de palo de rosa", description: "Disfrutá con esta guitarra Schecter C-6 Plus/Deluxe de la conexión con la música. Con este instrumento descubrirás nuevos acordes, entonarás tus canciones y disfrutarás de la vida musical. Explorá, amplificá tu creatividad y desarrollá tu pasión. Material versátil. Su madera de tilo tiene una densidad media lo que proporciona un tono suave con medios enfatizados.",
price: "$120,000.00", image: "https://http2.mlstatic.com/D_NQ_NP_603291-MLA48681401113_122021-O.webp", };




const ItemDetailContainer = () => {

  const [dataDetail, setDataDetail]= useState({});


  useEffect(()=>{
    const getDataDetail = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemDataDetail)
      }, 2000);
    });
    getDataDetail.then(res => setDataDetail(res))
  },[]);



  return (
    <ItemDetail dataDetail={dataDetail}/>
  )
}

export default ItemDetailContainer