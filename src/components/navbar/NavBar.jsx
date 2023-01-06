import React from 'react'
import './NavBar.css'
import CartWidget from '../cartWidget/CartWidget.jsx'

const NavBar = () => {
  const fecha = new Date()
  console.log()
  return (
  <header className='navbar'>
    <h1 className='title'>CHERRY</h1>
    <p>La Fecha de hoy es: "{fecha.toDateString()}"</p>
    <ul className='links'>
      <li><a href="/">Inicio</a></li>
      <li><a href="/">Productos</a></li>
      <li><a href="/">Nosotros</a></li>
      <li><a href="/">Carrito</a></li>
      <CartWidget cantidad="7"/>
    </ul>
  </header>
  )
}

export default NavBar
