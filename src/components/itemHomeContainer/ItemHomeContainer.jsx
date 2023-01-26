import React, {useState, useEffect} from 'react'
import ItemH from '../itemHome/itemH/ItemH';
import './ItemHomeContainer.css'

const ItemHomeContainer = () => {
    const [productos, setProductos] = useState();

    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) =>
          setProductos(
            json.map((productos) => (
              <ItemH
                data={productos}
                key={productos.id}
                id={`producto${productos.nombre}${productos.id.toString}`}
              />
            ))
          )
        )
        .catch((error) => {console.log(error)})
    }, []);
  
    return (
      <div className="itemlist-container-home">
        Este es el itemlist
        <div className="itemlist-home">{productos}</div>
      </div>
    );
}

export default ItemHomeContainer