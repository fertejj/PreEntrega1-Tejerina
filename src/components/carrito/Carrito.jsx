import React from 'react'
import './Carrito.css'
import CarritoList from "./carritoList/CarritoList.jsx"

const Carrito = () => {


  return (
    <div className='carrito-container'>
      <h1 className='title-carrito'>Carrito de compras :)</h1>
      <div className="carrito-list">
        
        <CarritoList />
      </div>
    </div>
  )
}

export default Carrito