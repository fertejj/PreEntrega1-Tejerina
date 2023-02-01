import React from "react";
import './CarritoItem.css'

const CarritoItem = ({title, price, quantity, image, id}) => {
  return (
    <div className="carrito-item-container">
      <div className="carrito-item-pics"><img className='carrito-item-pic' src={image} alt={`Imagen de itemId${id}`} /></div>
      <div className="carrito-item-text">
      <h5 className="title-carritolist">{title}</h5>
      <p>Cantidad:  {quantity}</p>
      <p>$ {price}</p>
      </div>
    </div>
  );
};

export default CarritoItem;
