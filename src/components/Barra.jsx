import { Link, useLocation } from "react-router-dom";
import "../styles/Bar.css"; 
import avatar from "../assets/Personal.png";
import camera from "../assets/camera.png";

const Barra = () => {

    const location = useLocation();
    const path = location.pathname.split("/").pop();

    const isActive = (route) => {
        return path === route ? "active" : "";
    }

  return (
    <>
  
      <nav className="horizontal-navbar">
        <ul className="horizontal-menu">
          <div className="avatar">
            <img width={50} src={avatar} alt="Personal" className="top-icon" />
            <img width={20} src={camera} alt="" />
          </div>
          <li className={`horizontal-menu-item ${isActive("cuenta")}`}>
            <Link to="/dashboard/accountdata">Cuenta</Link>
          </li>
          <li className={`horizontal-menu-item ${isActive("académico")}`}>
            <Link to="/dashboard/academicpre">Académico</Link>
          </li>
          <li className={`horizontal-menu-item ${isActive("notificaciones")}`}>
            <Link to="/dashboard/">Notificaciones</Link>
          </li>
          <li className={`horizontal-menu-item ${isActive("privacidad")}`}>
            <Link to="/dashboard/">Privacidad</Link>
          </li>
          <li className={`horizontal-menu-item ${isActive("apariencia")}`}>
            <Link to="/dashboard/">Apariencia</Link>
          </li>
          <li className={`horizontal-menu-item ${isActive("accesibilidad")}`}>
            <Link to="/dashboard/">Accesibilidad</Link>
          </li>
          <li className={`horizontal-menu-item ${isActive("Avanzado")}`}>
            <Link to="/dashboard/">Avanzado</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Barra;
