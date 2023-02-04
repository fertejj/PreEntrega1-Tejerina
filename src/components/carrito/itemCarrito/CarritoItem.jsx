import React from "react";
import './CarritoItem.css'
import { IoCloseCircle } from 'react-icons/io5'
import { useCartContext } from "../../../context/CartContext";

const CarritoItem = ({title, price, quantity, image, id}) => {
  const {borrarProductoDelCarrito} = useCartContext()

  const onDeleteCarritoItem = () => {

    borrarProductoDelCarrito(id)
  }

  return (
    <div className="carrito-item-container">
      <div className="carrito-item-pics"><img className='carrito-item-pic' src={image} alt={`Imagen de itemId${id}`} /></div>
      <div className="carrito-item-text">
      <h5 className="title-carritolist">{title}</h5>
      <p>Cantidad:  {quantity}</p>
      <p>$ {price}</p>
      </div>
      <IoCloseCircle className="item-carrito-close-button" onClick={onDeleteCarritoItem}/>
    </div>
  );
};

export default CarritoItem;
