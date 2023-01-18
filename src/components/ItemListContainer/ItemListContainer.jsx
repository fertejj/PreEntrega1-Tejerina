import React, { useState } from "react";
import ItemList from "../itemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [filtro, setFiltro] = useState("all");

  const filterDormitorio = () => {
    setFiltro("Dormitorio");
  };

  const filterLiving = () => {
    setFiltro("Living");
  };

  const filterCocina = () => {
    setFiltro("Cocina");
  };

  const filterAll = () => {
    setFiltro("all");
  };

  return (
    <div className="itemlistcontainer">
      <h3 className="itemlistcontainer-title">
        CONTENEDOR DE PRODUCTOS (componente "ItemListContainer")
      </h3>
      <button onClick={filterDormitorio}>Dormitorio</button>
      <button onClick={filterCocina}>Cocina</button>
      <button onClick={filterLiving}>Living</button>
      <button onClick={filterAll}>Sin Filtro</button>
      <ItemList filtroCategoria={filtro} />
    </div>
  );
};

export default ItemListContainer;
