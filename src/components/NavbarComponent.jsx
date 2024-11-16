import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"


const NavbarComponent = () =>{
    return(
        <nav>
        <div className="nav-wrapper">
          <NavLink href="#" className="brand-logo center" to='/'>Logo</NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink href="sass.html" to='productos/ofertas'>Ofertas</NavLink></li>
            <li><NavLink href="badges.html" to='/productos/nuevos'>Nuevos Ingresos</NavLink></li>
            <li><NavLink href="collapsible.html" to='/productos/mas vendidos'>Más vendidos</NavLink></li>
            <CartWidget counter={15}/>
          </ul>
        </div>
      </nav>
    )
}

export default NavbarComponent