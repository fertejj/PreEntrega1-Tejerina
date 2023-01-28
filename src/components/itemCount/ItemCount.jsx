import React, { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import "./ItemCount.css";

const ItemCount = (props) => {
  const [count, setCount] = useState(0);

  function remOne() {
    if (count >= 1) {
      setCount(count-1);
      props.guardarCantidadBuy(count);
    }
  }

  function addOne() {
    if (count < props.stock) {
      setCount(count+1);
      props.guardarCantidadBuy(count);
    }
  }

  return (
    <div className="main-count-container">
      <div className="count-container">
        <IoRemove onClick={remOne} className="remove-item button-itemcount" />
        <p className="item-count">{count}</p>
        <IoAdd onClick={addOne} className="add-item button-itemcount" />
      </div>
    </div>
  );
};

export default ItemCount;
