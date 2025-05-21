import { Link, useLocation } from "react-router-dom";
import "../styles/Bar.css"; 
import avatar from "../assets/Personal.png";
import camera from "../assets/camera.png";

const Bar = () => {

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
          <li className={`horizontal-menu-item ${isActive("personal")}`}>
            <Link to="/dashboard/personal">Datos Personales</Link>
          </li>
          <li className={`horizontal-menu-item ${isActive("direccion")}`}>
            <Link to="/dashboard/address">Dirección</Link>
          </li>
          <li className={`horizontal-menu-item ${isActive("academico")}`}>
            <Link to="/dashboard/academico">Datos Académicos</Link>
          </li>
          <li className={`horizontal-menu-item ${isActive("salud")}`}>
            <Link to="/dashboard/health">Salud</Link>
          </li>
          <li className={`horizontal-menu-item ${isActive("extracurriculares")}`}>
            <Link to="/dashboard/extracurriculares">Actividades Extracurriculares</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Bar;
