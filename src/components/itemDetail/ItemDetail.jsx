import React, { useState, useEffect } from "react";
import "./ItemDetail.css";
import { Link } from 'react-router-dom'
import ItemCount from "../itemCount/ItemCount";

const ItemDetail = (props) => {
  const [cantidad, setCantidad] = useState(0);

  const { title, description, category, price, rating, image } = props.data;

  useEffect(() => {
    console.log(cantidad);
  }, [cantidad]);

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
      <p className="itemDetail-price">Precio: ${price}</p>
      <ItemCount className="itemDetail-count" stock={rating.count} setCantidad={setCantidad} />
      <Link className='volver-productos' to="/productos"> Volver a la lista de productos</Link>
    </article>
  );
};

export default ItemDetail;
