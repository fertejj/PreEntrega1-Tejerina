import React from 'react'
import './ItemH.css'

const ItemH = (props) => {
  //destructuracion
  const {title, price, image} = props.data
  return (
    <div className='item-producto-home'>
        <img className="item-image" src={image} alt={`foto del producto ${title}`} />
        <p>Precio: ${price}</p>

    </div>
  )
}

export default ItemH