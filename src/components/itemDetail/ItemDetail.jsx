import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import ItemCount from "../itemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = (props) => {
  const [cantidad, setCantidad] = useState(0);
  const [priceMultiplied, setPriceMultiplied] = useState()

  const { title, description, category, price, rating, image } = props.data;

  useEffect(() => {
    setPriceMultiplied(cantidad * price)
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cantidad]);


  const sumarCantidad = (numero) => {
    setCantidad(numero)
  }

  return (
    <article className="itemDetail-producto">
      <h4 className="itemDetail-title">{title}</h4>
      <img
        className="item-image"
        src={image}
        alt={`foto del producto ${title}`}
      />
      <p className="itemDetail-category">Categoria: {category}</p>
      <p className="itemDetail-descr">Descripcion: {description}</p>
      <p className="itemDetail-price">Precio: ${priceMultiplied}</p>
      <ItemCount className="itemDetail-count" stock={rating.count} setCantidad={sumarCantidad}/>
      <Link className='volver-productos' to="/productos"> Volver a la lista de productos</Link>
    </article>
  );
};

export default ItemDetail;
