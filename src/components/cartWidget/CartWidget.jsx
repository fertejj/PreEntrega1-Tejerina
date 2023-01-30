import React from "react";
import { Link } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import "./CartWidget.css";

const CartWidget = (props) => {
  return (
    <li className="cart-icon-text">
      <Link className='navbar-link cart' to={`/carrito`}><TiShoppingCart className="cart-icon" /></Link>
      <span className="cart-number">{props.cantidad}</span>
    </li>
  );
};

export default CartWidget;
