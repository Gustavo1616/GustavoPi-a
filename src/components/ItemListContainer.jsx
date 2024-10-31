const ItemListContainer = ({greeting, texto}) => {

    return(
        <div className="contenedorTitulo">
            <h1 className="tituloPrincipal">{greeting}</h1>
            <p className="subTituloPrincipal">{texto}</p>
        </div>
    )
}
export default ItemListContainer