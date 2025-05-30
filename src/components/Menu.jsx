import { Link } from "react-router-dom";
import "../styles/Menu.css";
import dashboard from "../assets/dashboard.svg";
import calendar from "../assets/calendar.svg";
import inbox from "../assets/inbox.svg";
import homeworks from "../assets/homeworks.svg";
import tasklist from "../assets/tasklist.svg";
import settings from "../assets/settings.svg";
import payments from "../assets/payments.svg";
import salir from "../assets/Salir.png";	
import campaign from "../assets/Campaign.png";
import personal from "../assets/Personal.png";
import logo from "../assets/logo.png";

const Menu = () => {
  return (
    <>
      <div className="top-icons-container">
        <img width={50} src={campaign} alt="campaign" className="top-icon" />
        <img width={50} src={personal} alt="personal" className="top-icon" />
      </div>

      <nav className="navbar">
        <ul className="icons">
          <li>
            <img src={logo} alt="Logo" />
          </li>
          <li>
            <img src={dashboard} alt="Dashboard" />
          </li>
          <li>
            <img src={dashboard} alt="Dashboard" />
          </li>
          <li>
            <img src={calendar} alt="Calendar" />
          </li>
          <li>
            <img src={inbox} alt="Inbox" />
          </li>
          <li>
            <img src={tasklist} alt="Tasklist" />
          </li>
          <li>
            <img src={homeworks} alt="Homeworks" />
          </li>
          <li>
            <img src={homeworks} alt="Homeworks" />
          </li>
          <li>
            <img src={payments} alt="Payments" />
          </li>
          <li>
            <img src={settings} alt="Settings" />
          </li>
          <li>
            <img src={salir} alt="Salir" />
          </li>
        </ul>
        <ul className="menu">
          <li className="menu-item">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="menu-item">
            <Link to="/dashboard/personal">Personal</Link>
          </li>
          <li className="menu-item">
            <Link to="/dashboard/Inscripcion">Inscripcion</Link>
          </li>
          <li className="menu-item">
            <Link to="/dashboard/mensajeria">Mensajeria</Link>
          </li>
          <li className="menu-item">
            <Link to="/dashboard/tareas">Tareas</Link>
          </li>
          <li className="menu-item">
            <Link to="/dashboard/evaluaciones">Evaluaciones</Link>
          </li>
          <li className="menu-item">
            <Link to="/dashboard/calificacionesporcorte">Calificaciones por Corte</Link>
          </li>
          <li className="menu-item">
            <Link to="/dashboard/solicitudes-servicio">Pagos</Link>
          </li>
          <li className="menu-item">
            <Link to="/dashboard/configuracion">Configuración</Link>
          </li>
           <li className="menu-item">
            <Link to="/dashboard/salir">Salir</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
