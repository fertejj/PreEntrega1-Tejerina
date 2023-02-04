import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import "./CartWidget.css";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const {cantidadDeItemsCarrito} = useCartContext()


  return (
    <li className="cart-icon-text">
      <Link className='navbar-link cart' to={`/carrito`}><TiShoppingCart className="cart-icon" /></Link>
      <span className="cart-number">{cantidadDeItemsCarrito()|| ""}</span>
    </li>
  );
};

export default CartWidget;
