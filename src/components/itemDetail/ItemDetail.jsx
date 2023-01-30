import React from "react";
import { Link } from 'react-router-dom'
import ItemCount from "../itemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = (props) => {


  const { title, description, category, price, rating, image } = props.data;


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
      <ItemCount className="itemDetail-count" stock={rating.count} />
      <Link className='volver-productos' to="/productos"> Volver a la lista de productos</Link>
    </article>
  );
};

export default ItemDetail;
