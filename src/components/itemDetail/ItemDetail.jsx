import React from "react";
import { Link } from 'react-router-dom'
import ItemCount from "../itemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = (props) => {

  const [cantidadDeProductosAComprar, setCantidadDeProductosAComprar] = useState(0);
  const { title, description, category, price, rating, image } = props.data;

  
  useEffect(()=>{
    console.log(`estamos en itemDetail y el contador es ${cantidadDeProductosAComprar}, el total de su compra es = $${cantidadDeProductosAComprar*price}`);
  //eslint-disable-next-line
  },[cantidadDeProductosAComprar])
  
  const guardarCantidadBuy = (cantidadX) => {
    setCantidadDeProductosAComprar(cantidadX)
  }
  function onAdd() {
    console.log(cantidadDeProductosAComprar);
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
      <p className="itemDetail-price">Precio: ${price}</p>
      <ItemCount className="itemDetail-count" stock={rating.count} guardarCantidadBuy={guardarCantidadBuy}/>
      <button className="add-cart" onClick={onAdd}>
        Agregar al carrito
      </button>
      <Link className='volver-productos' to="/productos"> Volver a la lista de productos</Link>
    </article>
  );
};

export default ItemDetail;
