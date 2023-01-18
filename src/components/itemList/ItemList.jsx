import React from "react";
import Item from "../item/Item";
import "./ItemList.css";

const ItemList = (props) => {

  const listaDeProductos = [
    {
      id: 1,
      nombre: "Heladera",
      descripcion: "Es blanca y tiene 2 metros de alto",
      precio: 80000,
      categoria: "Cocina",
      stock: 11,
    },
    {
      id: 2,
      nombre: "Maquina de hacer pan",
      descripcion: "Tiene 3 niveles de coccion",
      precio: 35000,
      categoria: "Cocina",
      stock: 7,
    },
    {
      id: 3,
      nombre: "Sillon",
      descripcion: "Cuatro cuerpos, se hace cama.",
      precio: 54000,
      categoria: "Living",
      stock: 3,
    },
    {
      id: 4,
      nombre: "Cama",
      descripcion: "Queen Size. 2 años de garantia",
      precio: 105000,
      categoria: "Dormitorio",
      stock: 4,
    },
  ];

// API

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

////////////////////////////


  let productosRenderizables;
  if(props.filtroCategoria === "all") {
    productosRenderizables = listaDeProductos.map((productos) => (
      <Item
        data={productos}
        key={productos.id}
        id={`producto${productos.nombre}${productos.id.toString}`}
      />
    ))
  } else {
      let productosPorCategoria = listaDeProductos.filter(it => it.categoria === props.filtroCategoria)
      productosRenderizables = productosPorCategoria.map((productos) => (
          <Item
            data={productos}
            key={productos.id}
            id={`producto${productos.nombre}${productos.id.toString}`}
          />
        ))
      }

  return (
    <div className="itemlist-container">
      Este es el itemlist
      <div className="itemlist">{productosRenderizables}</div>
    </div>
  );
};

export default ItemList;
