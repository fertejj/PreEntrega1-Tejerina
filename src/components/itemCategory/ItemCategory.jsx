import React, { useState, useEffect } from 'react'
import Item from '../item/Item';


const ItemCategory = ({ categoryId }) => {
  const [productos, setProductos] = useState();

  useEffect(() => {

    const cat = categoryId === 'mens-clothing' ? "men's clothing": categoryId
    console.log(cat);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) =>
        setProductos(
  
          json?.filter((it)=>it.category === cat).map((productos) => (
            <Item
              data={productos}
              key={productos.id}
              id={`producto${productos.nombre}${productos.id.toString}`}
            />
          ))
        )
      )
      .catch((error) => {console.log(error)})
  },[categoryId]);

  
  return (
    <div className="itemlist-container">
    Este es la categoria x
    <div className="itemlist">{productos}</div>
  </div>
  )
}

export default ItemCategory