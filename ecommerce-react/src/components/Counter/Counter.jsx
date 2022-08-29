import {useState} from "react"

const Counter = () => {
  const [ contador, setContador] = useState(0)
  const suma = () => {
    setContador( contador + 1)
  }
  return (
    <>
        <a href="#" className="nav_item prueba" onClick={suma}><i class="fa-solid fa-cart-shopping"></i><p>{contador}</p></a>
        
    </>

  )
}

export default Counter