import React from "react";
import "./ItemDetail.css";
import ItemCount from "../itemCount/ItemCount";

const ItemDetail = (props) => {

  const {title, description, category, price, rating, image} = props.data

  return (
    <article className="itemDetail-producto">
      <h3>{title}</h3>
      <img
        className="item-image"
        src={image}
        alt={`foto del producto ${title}`}
      />
      <p>Categoria: {category}</p>
      <p>Descripcion: {description}</p>
      <p>Precio: ${price}</p>
      <ItemCount stock={rating.count} />
    </article>
  );
};

export default ItemDetail;
