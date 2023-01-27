import React, { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import "./ItemCount.css";

const ItemCount = (props) => {
  const [counter, setCounter] = useState(0);

  function remOne() {
    //Funcion con la condicion para no restar numeros negativos.
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  }
  function addOne() {
    if (counter < props.stock) {
      setCounter(counter + 1);
      props.setCantidad(counter);
    }
  }

  function onAdd() {
    console.log(counter);
  }

  return (
    <div className="main-counter-container">
      <div className="counter-container">
        <IoRemove onClick={remOne} className="remove-item button-itemcount" />
        <p className="item-count">{counter}</p>
        <IoAdd onClick={addOne} className="add-item button-itemcount" />
      </div>
      <button className="add-cart" onClick={onAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
