/* Importaciones */
import { useContext, createContext, useState } from "react";

/* 
1) Creando el contexto a createContext() podemos pasarle la informacion inicial del contexto 
2) Importante exportarlo */
export const CartContext = createContext([]);

/* 
3) Crear la funcion para usar el Contexto (podemos definirlo como un hook personalizado)
*/
export const useCartContext = () => {return useContext(CartContext)}

const CartProvider = ({children}) => {
    const[items, setItems] = useState();
    const mostrarMensaje = () => {console.log("Este mensaje viene del proveedor del contexto")}
    return(
        <CartContext.Provider value={{items, mostrarMensaje}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider