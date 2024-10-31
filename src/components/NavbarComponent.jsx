import CartWidget from "./CartWidget"

const NavbarComponent = () =>{
    return(
        <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Ofertas</a></li>
            <li><a href="badges.html">Nuevos Ingresos</a></li>
            <li><a href="collapsible.html">Más vendidos</a></li>
            <CartWidget counter={15}/>
          </ul>
        </div>
      </nav>
    )
}

export default NavbarComponent