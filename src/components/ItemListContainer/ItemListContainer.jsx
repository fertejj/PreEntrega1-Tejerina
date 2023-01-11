import React from 'react'
import ItemList from '../itemList/ItemList'
import './ItemListContainer.css'

const ItemListContainer = () => {
//llamada a array de objetos
//iterar nuestro array
//mostrar todos los objs

  return (
    <div className='itemlistcontainer'>
      <h3 className='itemlistcontainer-title'>CONTENEDOR DE PRODUCTOS (componente "ItemListContainer")</h3>
      <ItemList />
    </div>
  )
}

export default ItemListContainer