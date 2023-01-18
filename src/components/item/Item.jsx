import React from 'react'
import './Item.css'
import ItemCount from '../itemCount/ItemCount'

const Item = (props) => {
  //destructuracion
  const {title, description, category, price, rating, image} = props.data
  return (
    <div className='item-producto'>
        <h3>{title}</h3>
        <img className="item-image" src={image} alt={`foto del producto ${title}`} />
        <p>Categoria: {category}</p>
        <p>Descripcion: {description}</p>
        <p>Precio: ${price}</p>
        <ItemCount stock={rating.count} />
    </div>
  )
}

export default Item