import React from 'react'
import ItemDetail from "../itemDetail/ItemDetail"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
    </section>
  )
}

export default ItemDetailContainer