import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
import ItemCount from '../itemCount/ItemCount'


const Item = (props) => {
  //destructuracion
  const {title, description, category, price, rating, image, id} = props.data
  return (
    <div className='item-producto'>
        <h3>{title}</h3>
        <img className="item-image" src={image} alt={`foto del producto ${title}`} />
        <p>Categoria: {category}</p>
        <p>Descripcion: {description}</p>
        <p>Precio: ${price}</p>
        <Link to={`/producto/${id}`}>Ver detalles</Link>
        <ItemCount stock={rating.count} />
    </div>
  )
}

export default Item