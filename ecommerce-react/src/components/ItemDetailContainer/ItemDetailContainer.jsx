import React, {useEffect, useState}from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'
import dataList from '../baseDatos/data';


const ItemDetailContainer = () => {

  const [dataDetail, setDataDetail]= useState({});
  const  {detalleId} = useParams();

  useEffect(()=>{
    const getDataDetail = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dataList)
      }, 2000);
    });
    getDataDetail.then(res => setDataDetail(res.find(producto => producto.title === detalleId)))
  },[detalleId]);



  return (
    <ItemDetail dataDetail={dataDetail}/>
  )
}

export default ItemDetailContainer
{/* getDataDetail.then(res => {
  const newProductsDetail = res.filter(item=>item.id === ItemID); // filtra todos los elementos del array que cumpla con cierta condicion//
  setData(newProducts) // seteo estos valores que filtre//
 })
}, [categoryId]); //lo coloco porque es mi parametro que va a estar cambiando, al estar cambiando mi funcion se va iniciar nuevamente*/}

