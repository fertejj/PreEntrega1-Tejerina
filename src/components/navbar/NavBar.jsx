import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget.jsx'

const NavBar = () => {
  const fecha = new Date()
  console.log()
  return (
  <header className='navbar'>
    <h1 className='title'>CHERRY</h1>
    <p>La Fecha de hoy es: "{fecha.toDateString()}"</p>
    <ul className='links'>
      <li><a href="">Inicio</a></li>
      <li><a href="">Productos</a></li>
      <li><a href="">Nosotros</a></li>
      <li><a href="">Carrito</a></li>
    </ul>
    <CartWidget cantidad="7"/>
  </header>
  )
}

export default NavBar
