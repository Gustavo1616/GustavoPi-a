import React, { useEffect, useState } from 'react'
import { getOneProducto } from '../mock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const [loading, setLoading]= useState(false)
  const {id} = useParams()
  console.log(id)
  useEffect (()=>{
    setLoading(true)
    getOneProducto('1')
    .then((res)=> setProducto(res))
    .catch((error)=>console.log(error))
    .finally(()=> setLoading(false))
  },[])

  return (
    <div>
      {loading ? <h2 className='animate__animated animate__zoomIn'>Cargando...</h2>: <ItemDetail producto={producto}/>}
    </div>
  )
}

export default ItemDetailContainer
