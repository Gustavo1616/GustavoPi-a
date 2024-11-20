import ItemList from './ItemList'
import React, {useState, useEffect} from 'react'
import {getProductos} from "../mock/data"
import { useParams } from 'react-router-dom'
const ItemListContainer = ({greeting, texto}) => {
    const [productos, setProducts] = useState([])
    const [loading, setLoading]= useState(false)
    const {category} = useParams()


    useEffect(()=>{
        setLoading(true)
        getProductos()
        .then((res)=> {
          if(category){
            setProducts(res.filter((prod)=> prod.category === category))
          } else{
            setProducts(res)
          } 
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[category])


    return(
        <>
        <div className="contenedorTitulo">
            <h1 className="tituloPrincipal">{greeting}<span style={{textTransform:'capitalize', color:'brown'}}>{category}</span></h1>
            <h3 className="subTituloPrincipal">{texto}</h3>
        </div>
         <div className='productosVenta'>
         {loading ? <h2 className='animate__animated animate__zoomIn'>Cargando...</h2>: <ItemList productos={productos}/>}
         </div>
         </>
    )
}
export default ItemListContainer