import React, {useState} from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)
    const sumar = () => {
      if(count < stock){
        setCount(count + 1)
      }
    }
    const restar = () => {
        if(count > 0){
            setCount(count -1)
        }
    }

    const onAddHandler = ()=>{
      onAdd(count)
  }


  return (
    <div>
    <div>
      <button className='btn red' onClick={restar}>-</button>
      <span className='btn grey darken-4'>{count}</span>
      <button className='btn blue' onClick={sumar}>+</button>
    </div>
    <button className='btn teal darken-4'onClick={onAddHandler}>Comprar</button>
    </div>
  )
}

export default ItemCount