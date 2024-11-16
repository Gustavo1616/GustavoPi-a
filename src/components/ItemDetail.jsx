import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {
    const onAdd = (count) =>{
        if(count <= 0){
            alert('Tu carrito esta vacío, agrega producto.')
        } else{
            alert(`Agregaste al carrito ${count} producto.`)
        }
    }
  
  return (
    
    <div className="producto-container">
        <div className="producto-card">
            <h1 className="producto-title">{producto.name}</h1>
            <div className="producto-img-container">
                <img src={producto.img} alt={producto.name} className="producto-img"/>
            </div>
            <div className="producto-info">
                <p className="producto-description">{producto.description}</p>
                <p className="producto-price">${producto.price}</p>
                <ItemCount stock={producto.stock} onAdd={onAdd}/>
            </div>
        </div>
    </div>
  )
}
export default ItemDetail
