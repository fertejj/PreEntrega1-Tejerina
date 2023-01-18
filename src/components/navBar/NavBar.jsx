import React from 'react'
import './NavBar.css'
import CartWidget from '../cartWidget/CartWidget'

const NavBar = () => {
  return (
  <header className='navbar'>
    <h1 className='navbar-title'>CHERRY</h1>
    <ul className='navbar-links'>
      <li><a className='navbar-link' href="/">Inicio</a></li>
      <li><a className='navbar-link' href="/">Productos</a></li>
      <li><a className='navbar-link' href="/">Nosotros</a></li>
      <li><a className='navbar-link' href="/">Carrito</a></li>
      <CartWidget cantidad="7"/>
    </ul>
  </header>
  )
}

export default NavBar
