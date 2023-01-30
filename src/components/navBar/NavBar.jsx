import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import CartWidget from '../cartWidget/CartWidget'

const NavBar = () => {
  return (
  <header className='navbar'>
    <Link className='link-comp' to={"/"}><h1 className='navbar-title'>CHERRY</h1></Link>
    <ul className='navbar-links'>
      <li><Link className='navbar-link' to={`/`}>Inicio</Link></li>
      <li><Link className='navbar-link' to={`/productos`}>Productos</Link></li>
      <li><Link className='navbar-link' to={`/nosotros`}>Nosotros</Link></li>
      <CartWidget cantidad="7"/>
      
    </ul>
    
  </header>
  )
}

export default NavBar
