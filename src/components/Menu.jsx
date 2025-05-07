import { Link } from "react-router-dom";
import '../styles/Menu.css'
import dashboard from '../assets/dashboard.svg'
import calendar from '../assets/calendar.svg'
import inbox from '../assets/inbox.svg'
import homeworks from '../assets/homeworks.svg'
import tasklist from '../assets/tasklist.svg'
import settings from '../assets/settings.svg'
import payments from '../assets/payments.svg'

const Menu = () => {
    return (
        <>
            <nav className="navbar">
                <ul className="icons">
                    <li><img src={dashboard} alt="" /></li>
                    <li><img src={calendar} alt="" /></li>
                    <li><img src={inbox} alt="" /></li>
                    <li><img src={tasklist} alt="" /></li>
                    <li><img src={homeworks} alt="" /></li>
                    <li><img src={payments} alt="" /></li>
                    <li><img src={settings} alt="" /></li>
                </ul>
                <ul className="menu">
                    <li className="menu-item"><Link to="/dashboard">Dashboard</Link></li>
                    <li className="menu-item"><Link to="/dashboard/calendario">Calendario</Link></li>
                    <li className="menu-item"><Link to="/dashboard/mensajeria">Mensajeria</Link></li>
                    <li className="menu-item"><Link to="/dashboard/tareas">Tareas</Link></li>
                    <li className="menu-item"><Link to="/dashboard/evaluaciones">Evaluaciones</Link></li>
                    <li className="menu-item"><Link to="/dashboard/pagos">Pagos</Link></li>
                    <li className="menu-item"><Link to="/dashboard/configuracion">Configuración</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Menu;