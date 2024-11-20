import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"


const NavbarComponent = () =>{
    return(
        <nav>
        <div className="nav-wrapper">
          <NavLink href="#" className="brand-logo center" to='/'>Logo</NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink  to='productos/ofertas'>Ofertas</NavLink></li>
            <li><NavLink  to='/productos/nuevos'>Nuevos Ingresos</NavLink></li>
            <li><NavLink  to='/productos/mas vendidos'>Más vendidos</NavLink></li>
            <li><NavLink><CartWidget counter={15}/></NavLink></li>
          </ul>
        </div>
      </nav>
    )
}

export default NavbarComponent