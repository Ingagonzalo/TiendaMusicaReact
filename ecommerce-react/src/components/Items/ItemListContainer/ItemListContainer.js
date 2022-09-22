import './ItemListContainer.css'
import ItemCount from '../../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react'
import dataList from '../../baseDatos/data';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => { /*realizo la promesa */

  const {categoryId}= useParams();
  console.log('categoryId', categoryId)

  const [data, setData] = useState([]);


  useEffect(() => {
    const getData = new Promise((resolve, reject) => {
      setTimeout(() => {
        
        resolve(dataList)
      }, 2000);
    });
    getData.then(res => {
      const newProducts = res.filter(item=>item.category === categoryId); // filtra todos los elementos del array que cumpla con cierta condicion//
      setData(newProducts) // seteo estos valores que filtre//
     })
  }, [categoryId]); //lo coloco porque es mi parametro que va a estar cambiando, al estar cambiando mi funcion se va iniciar nuevamente

  return (
    <div className="itemListContainer">
      {/**/}
      <div className='cardItems'>
         <ItemList data={data} />
      </div>
      
    </div>
  )
}

export default ItemListContainer

