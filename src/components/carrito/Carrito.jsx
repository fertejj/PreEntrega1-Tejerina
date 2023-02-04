import React from "react";
import "./Carrito.css";
import CarritoList from "./carritoList/CarritoList.jsx";
import { useCartContext } from "../../context/CartContext";

const Carrito = () => {

  const {vaciarCarrito} = useCartContext()

  return (
    <div className="carrito-container">
      <div className="header-carrito">
      <h2 className="title-carrito">Carrito de compras:</h2>
      <button className="vaciar-carrito" onClick={vaciarCarrito}>Vaciar carrito</button>
      </div>
      <div className="carrito-list">
        <CarritoList />
      </div>
    </div>
  );
};

export default Carrito;
