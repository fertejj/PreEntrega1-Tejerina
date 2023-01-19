import React, { useState } from "react";
import ItemList from "../itemList/ItemList";
import "./ItemListContainer.css";
import { Link } from "react-router-dom";

const ItemListContainer = (props) => {
  const [category, setCategory] = useState("all");

  return (
    <div className="itemlistcontainer">
      <p>{props.navstatus}</p>
      <h3 className="itemlistcontainer-title">
        CONTENEDOR DE PRODUCTOS (componente "ItemListContainer")
      </h3>
      <p>Categorias:</p>
      <div className="category-button-container">
        <Link to="/categoria/mens-clothing">
          <button onClick={() => setCategory("men's clothing")} className="category-button">
            men's clothing
          </button>
        </Link>
        <Link to="/categoria/jewelery">
          <button onClick={() => setCategory("jewelery")} className="category-button">
            jewelery
          </button>
        </Link>
        <Link to="/categoria/electronics">
          <button onClick={() => setCategory("electronics")} className="category-button">
            electronics
          </button>
        </Link>
        <Link to="/productos">
          <button onClick={() => setCategory("all")} className="category-button">
            x
          </button>
        </Link>
      </div>
      <ItemList filterCategory={category} />
    </div>
  );
};

export default ItemListContainer;
