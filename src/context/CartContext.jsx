/* Importaciones */
import { useContext, createContext, useState } from "react";

/* 
1) Creando el contexto a createContext() podemos pasarle la informacion inicial del contexto 
2) Importante exportarlo */
export const CartContext = createContext([]);

/* 
3) Crear la funcion para usar el Contexto (podemos definirlo como un hook personalizado)
*/
export const useCartContext = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const agregarAlCarrito = (data) => {
    if (validarProductoExistente(data.id)) {
      alert("El producto ya esta en tu carrito.");
    } else {
      const listaActual = items;
      listaActual.push(data);
      setItems(listaActual);
      console.log(listaActual);
    }
  };

  const validarProductoExistente = (id) => {
    if (items.find((e) => e.id === id)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <CartContext.Provider value={{ items, agregarAlCarrito }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
