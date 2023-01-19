import React from 'react'
import ItemDetail from "../itemDetail/ItemDetail"
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

  const {productoId} = useParams()

  const [productos, setProductos] = useState([])
  
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${productoId}`)
            .then(res=>res.json())
            .then(productos=>setProductos(<ItemDetail data={productos} key={productos.id} id={`producto${productos.nombre}${productos.id.toString}`}/>))
  }, [productoId])

  return (
    <section className='itemDetail-box'>
      {productos}
      <Link to="/productos"> Volver a la lista de productos</Link>
    </section>
  )
}

export default ItemDetailContainer