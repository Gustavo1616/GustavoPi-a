import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import Loader from './Loader'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const [loading, setLoading]= useState(false)
  const [invalidItem, setInvalidItem] = useState(false)
  const {id} = useParams()

  //FIRE BASE

  useEffect(()=>{
    setLoading(true)
    const collectionProd = collection (db, "productos")
    const docRef = doc(collectionProd, id)
    getDoc(docRef)
    .then((res)=> {
        if(res.data()){
          setProducto({id: res.id, ...res.data()})
        }else{
          setInvalidItem(true)
        }
      })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  },[])

  if(invalidItem){
    return <div className='noItem'>
      <img src='https://http.cat/images/404.jpg'/>
      <Link to='/' className='btn btn-dark'> Volver a home</Link>
    </div>
  }

  return (
    <div className='contenedorDetalle'>
      {loading ? <Loader/> : <ItemDetail producto={producto}/>}
    </div>
  )
}

export default ItemDetailContainer
