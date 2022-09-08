import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';



const prueba = {  id: 1, title: "PRS McCarty 594 Top Ten USA",
description: "A fines de la década de 1980, Paul Reed Smith llamó a Ted McCarty para consultarle sobre el diseño de guitarras y técnicas de fabricacion. No solo sirvió como mentor, sino que se convirtió en un gran amigo de Paul. En 1994, PRS lanzó la primer McCarty, un instrumento que incorporaba todo el espectro de técnicas y conocimientos que Paul había obtenido de Ted.",
price: "$86571.00",
image:
  "https://y6v8e8y4.rocketcdn.me/wp-content/uploads/2022/04/D_764207-MLA49523221494_032022-F-450x800.jpg"};


const ItemDetailContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(prueba);
            },2000)
        });
        getData.then(res => setData(res))
    }, [])


  return (
    <div><ItemDetail data={data}/></div>
  );
}

export default ItemDetailContainer