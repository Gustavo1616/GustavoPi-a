import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
  return (
    <div className='productosVenta'>
        {productos.map((productos)=> <Item productos={productos} key={productos.id}/>)}
    </div>
  )
}

export default ItemList
