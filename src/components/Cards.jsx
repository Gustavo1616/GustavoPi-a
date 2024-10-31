const Cards = (prop) => {
    const {src, tittle} = prop
 return (
    <>
    <div className="row">
    <div className="col">
      <div className="card">
        <div className="card-image">
          <img src={prop.src} />
          <span className="card-title black-text">{prop.tittle}</span>
          <a className="btn-floating pulse waves-effect btn-large"><i className="material-icons right">add</i></a>
        </div>
        <div className="card-content">
            <p>10000$</p>
            <p>Descripcion del producto.</p>
        </div>
      </div>
    </div>
  </div>
  </>
 )
}

export default Cards