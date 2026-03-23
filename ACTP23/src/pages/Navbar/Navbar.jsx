import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Importa el CSS específico para Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-link">Inicio</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/dashbord" className="nav-link">Dashbord</NavLink>
      </div>
      <div>
        
      </div>
    </nav>
  );
}

export default Navbar;