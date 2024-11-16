import React from "react"
import { Link } from "react-router-dom"
const Item = ({productos}) => {
 return (
    <div className="row ">
      <div className="col">
        <div className="card card-panel hoverable">
          <div className="card-image ">
            <img src={productos.img} alt={productos.name}/>
            <div className="card-content">
            <span className="card-title black-text">{productos.name}</span>
            <Link to={`/item/${productos.id}`}className="waves-effect waves-light btn">Ver más</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
 )
}

export default Item