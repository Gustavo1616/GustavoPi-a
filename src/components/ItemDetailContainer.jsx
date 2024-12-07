import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const [loading, setLoading]= useState(false)
  const {id} = useParams()

  //FIRE BASE

  useEffect(()=>{
    setLoading(true)
    const collectionProd = collection (db, "productos")
    const docRef = doc(collectionProd, id)
    getDoc(docRef)
    .then((res)=> setProducto({id: res.id, ...res.data()}))
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  },[])

  return (
    <div className='contenedorDetalle'>
      {loading ? <Loader/> : <ItemDetail producto={producto}/>}
    </div>
  )
}

export default ItemDetailContainer
