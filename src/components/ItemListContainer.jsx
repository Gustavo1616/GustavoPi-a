import ItemList from './ItemList'
import React, {useState, useEffect} from 'react'
import { useParams,Link} from 'react-router-dom'
import Loader from './Loader'
import {collection, getDocs, query, where } from 'firebase/firestore'
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
          const list = res.docs.map((product) => ({
            id: product.id,
            ...product.data(),
          }));
          if (list.length === 0) {
            setInvalidCategory(true);
          } else {
            setProducts(list);
            setInvalidCategory(false);
          }
        })
      .catch((error) => console.log(error))
      .finally(()=>setLoading(false))
    },[category])

    if(invalidCategory){
      return <div className='noItem'>
        <img src='https://http.cat/images/404.jpg'/>
        <Link to="/" className='btn btn-dark'> Volver a Home</Link>

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