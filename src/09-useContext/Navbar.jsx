import { Link, NavLink } from "react-router-dom"


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">useContext</NavLink>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

          {/* 
              Navlink se usa cuando se necesita una navegacion que sepa
              en que pagina esta, para colocar una clase de active de css por ejemplo
          */}
          <NavLink
            className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
            to="/">
            Home
          </NavLink>

          <NavLink 
            className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
            to="/about">
            About
          </NavLink>

          <NavLink 
            className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
            to="/login">
            Login
          </NavLink>
         
        </ul>
      </div>
    </div>
  </nav>
  )
}
