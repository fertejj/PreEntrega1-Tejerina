import React from 'react'
import { useCartContext } from '../../../context/CartContext'
import CarritoItem from '../itemCarrito/CarritoItem'

const CarritoList = (props) => {

  const {items} = useCartContext()

    const listCarritoRenderizable = items.map((it) => (
      <CarritoItem
        title={it.title}
        price={it.price}
        quantity={it.quantity}
        key={it.id}
        image={it.image}
      />
    ))
  return (
    <div>
       {listCarritoRenderizable}
    </div>
  )
}

export default CarritoList