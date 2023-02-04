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
  
  const cantidadDeItemsCarrito = () => {
   /*  let cantidadSumada = 0 */
      /* items.map(it => 
        cantidadSumada = cantidadSumada + it.quantity) */

      return (items.reduce((acc, prod) => acc += prod.quantity,0))
      }

  const validarProductoExistente = (id) => {
    if (items.find((e) => e.id === id)) {
      return true;
    } else {
      return false;
    }
  };

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

  const borrarProductoDelCarrito = (id) => {
    const nuevaLista = items.filter((e) => e.id !== id);
    setItems(nuevaLista);
  };

  const vaciarCarrito = () => {
    setItems([]);
  };


  return (
    <CartContext.Provider value={{items, agregarAlCarrito, vaciarCarrito, borrarProductoDelCarrito, cantidadDeItemsCarrito}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
