import React, { useState } from "react";
import ItemList from "../itemList/ItemList";
import "./ItemListContainer.css";
import { Link } from "react-router-dom"

const ItemListContainer = (props) => {

const [category, setCategory] = useState("all")

  const categoryMensClothing = () => {
    setCategory("men's clothing")
  };

  const categoryJewelery = () => {
    setCategory("jewelery")
  }

  const categoryElectronics = () => {
    setCategory("electronics")
  }

  const categoryAll = () => {
    setCategory("all")
  }

  return (
    <div className="itemlistcontainer">
      <p>{props.navstatus}</p>
      <h3 className="itemlistcontainer-title">CONTENEDOR DE PRODUCTOS (componente "ItemListContainer")</h3>
      <p>Categorias:</p>
      <div className="category-button-container">
      <Link to="/category/mens-clothing"><button onClick={categoryMensClothing} className="category-button">men's clothing</button></Link>
      <Link to="/category/jewelery"><button onClick={categoryJewelery} className="category-button">jewelery</button></Link>
      <Link to="/category/electronics"><button onClick={categoryElectronics} className="category-button">electronics</button></Link>
      <Link to="/category/"><button onClick={categoryAll} className="category-button">x</button></Link>
      </div>
      <ItemList filterCategory={category}/>
    </div>
  );
};

export default ItemListContainer;
