import React from 'react'
import {TiShoppingCart} from 'react-icons/ti'
import "./CartWidget.css"

const CartWidget = (props) => {
  return (
    <div className='cart-container'>
      <TiShoppingCart className='cart-icon'/> Cantidad hardcoded: {props.cantidad}
    </div>
  )
}

export default CartWidget