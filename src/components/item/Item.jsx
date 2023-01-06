import React from 'react'
import './Item.css'
import ItemCount from '../itemCount/ItemCount'

const Item = (props) => {
  //destructuracion
  const {nombre, descripcion, categoria, precio, stock} = props.data
  return (
    <div className='item-producto'>
        <h3>{nombre}</h3>
        <p>Categoria: {categoria}</p>
        <p>Descripcion: {descripcion}</p>
        <p>Precio: ${precio}</p>
        <ItemCount stock={stock} />
    </div>
  )
}

export default Item