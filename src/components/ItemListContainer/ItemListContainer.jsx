import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <div className='greeting'>Este es el componente ItemListContainer: {props.greeting}</div>
  )
}

export default ItemListContainer