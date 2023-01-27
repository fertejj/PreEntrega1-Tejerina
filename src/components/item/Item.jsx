import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'



const Item = (props) => {
  //destructuracion
  const {title, price, image, id} = props.data
  return (
    <div className='item-producto'>
        <h6 className='title-prod'>{title}</h6>
        <img className="item-image" src={image} alt={`foto del producto ${title}`} />
        <p className='item-price'>Precio: ${price}</p>
        <Link className='item-detail' to={`/producto/${id}`}>Ver detalles</Link>

    </div>
  )
}

export default Item