import React, { useState, useEffect } from "react";
import Item from "../item/Item";
import "./ItemList.css";

const ItemList = () => {
  const [productos, setProductos] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) =>
        setProductos(
          json.map((productos) => (
            <Item
              data={productos}
              key={productos.id}
              id={`producto${productos.nombre}${productos.id.toString}`}
            />
          ))
        )
      );
  }, []);

  return (
    <div className="itemlist-container">
      Este es el itemlist
      <div className="itemlist">{productos}</div>
    </div>
  );
};

export default ItemList;
