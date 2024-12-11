import ItemList from './ItemList'
import React, {useState, useEffect} from 'react'
import {productosDb} from "../mock/data"
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import {db} from '../service/firebase'

const ItemListContainer = ({greeting, texto}) => {
    const [productos, setProducts] = useState([])
    const [loading, setLoading]= useState(false)
    const [invalidCategory, setInvalidCategory] = useState(false)
    const {category} = useParams()
  // FIREBASE
    useEffect(()=>{
      setLoading(true)
      const productsCollection = category ? query(collection(db, "productos"), where("category", "==", category)): collection(db, "productos")
      getDocs(productsCollection)
      .then((res)=>{
        if(getDocs(productsCollection)){
          const list = res.docs.map((product)=>{
            return{
              id: product.id,
              ...product.data()
            }
          })
          setProducts(list)
        }else{
          setInvalidCategory(true)
        }})
        
      .catch((error) => console.log(error))
      .finally(()=>setLoading(false))
    },[category])

    if(invalidCategory){
      return <div className='noItem'>
        <img src='https://http.cat/images/404.jpg'/>
        <Link to='/' className='btn btn-dark'> Volver a home</Link>
      </div>
    }

    return(
        <>
        <div className="contenedorTitulo">
            <h1 className="tituloPrincipal">{greeting}<span style={{textTransform:'capitalize', color:'brown'}}>{category}</span></h1>
            <h3 className="subTituloPrincipal">{texto}</h3>
        </div>
         <div className='productosVenta'>
         {loading ? <Loader/>: <ItemList productos={productos}/>}
         </div>
         </>
    )
}
export default ItemListContainer