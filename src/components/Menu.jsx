import React, { useState, useRef, useEffect } from 'react'; 
import { Link } from "react-router-dom";
import "../styles/Menu.css"; 
import dashboard from "../assets/dashboard.svg";
import inbox from "../assets/inbox.svg";
import homeworks from "../assets/homeworks.svg";
import tasklist from "../assets/tasklist.svg";
import settings from "../assets/settings.svg";
import payments from "../assets/payments.svg";
import salir from "../assets/Salir.png";
import campaign from "../assets/Campaign.png";
import personal from "../assets/Personal.png"; 
import logo from "../assets/logo.png";
import UserProfileMenu from './UserProfileMenu'; 

const Menu = () => {
const [showUserProfileMenu, setShowUserProfileMenu] = useState(false);
const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
const personalIconRef = useRef(null); 
const [isMenuExpanded, setIsMenuExpanded] = useState(false); 

const toggleUserProfileMenu = () => {
setShowUserProfileMenu(prev => !prev);
};

const toggleMenuExpansion = () => {
setIsMenuExpanded(prev => !prev);
};

useEffect(() => {
if (showUserProfileMenu && personalIconRef.current) {
const iconRect = personalIconRef.current.getBoundingClientRect();


 const top = iconRect.bottom + 10;
const left = iconRect.right - 300;

setMenuPosition({ top, left });
}
}, [showUserProfileMenu]); 

return (
<>
<div className="top-icons-container">
<img width={50} src={campaign} alt="campaign" className="top-icon" />
<img
width={50}
src={personal}
alt="personal"
className="top-icon personal-icon"
onClick={toggleUserProfileMenu}
style={{ cursor: 'pointer' }}
ref={personalIconRef} 
/>
{showUserProfileMenu && (
<UserProfileMenu
style={{
position: 'fixed',
top: menuPosition.top,
left: menuPosition.left,
zIndex: 1001 
}}
/>
)}
</div>

<nav className={`navbar ${isMenuExpanded ? 'expanded' : 'collapsed'}`}>
<ul className="icons">
<li onClick={toggleMenuExpansion} style={{ cursor: 'pointer' }}>
<img src={logo} alt="Logo" />
</li>
<li onClick={toggleMenuExpansion} style={{ cursor: 'pointer' }}>
<img src={dashboard} alt="Dashboard" />
</li>
<li onClick={toggleMenuExpansion} style={{ cursor: 'pointer' }}>
<img src={personal} alt="Personal" />
</li>
            <li onClick={toggleMenuExpansion} style={{ cursor: 'pointer' }}>
<img src={dashboard} alt="Inscripcion" /> 
</li>
<li onClick={toggleMenuExpansion} style={{ cursor: 'pointer' }}>
<img src={inbox} alt="Inbox" />
</li>
<li onClick={toggleMenuExpansion} style={{ cursor: 'pointer' }}>
<img src={tasklist} alt="Tasklist" />
</li>
<li onClick={toggleMenuExpansion} style={{ cursor: 'pointer' }}>
<img src={homeworks} alt="Homeworks" />
</li>
<li onClick={toggleMenuExpansion} style={{ cursor: 'pointer' }}>
<img src={homeworks} alt="Evaluaciones" />
</li>
<li onClick={toggleMenuExpansion} style={{ cursor: 'pointer' }}>
<img src={payments} alt="Payments" />
</li>
<li onClick={toggleMenuExpansion} style={{ cursor: 'pointer' }}>
<img src={settings} alt="Settings" />
</li>
<li onClick={toggleMenuExpansion} style={{ cursor: 'pointer' }}>
<img src={salir} alt="Salir" />
</li>
</ul>
<ul className={`menu ${isMenuExpanded ? 'visible' : 'hidden'}`}>
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
<Link to="/dashboard/configuracion">Configuracion</Link>
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