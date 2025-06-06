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
import CampaignData from './CampaignData';

const Menu = () => {
    const [showUserProfileMenu, setShowUserProfileMenu] = useState(false);
    const [userMenuPosition, setUserMenuPosition] = useState({ top: 0, left: 0 });
    const personalIconRef = useRef(null);

    const [showCampaignDataMenu, setShowCampaignDataMenu] = useState(false);
    const [campaignDataMenuPosition, setCampaignDataMenuPosition] = useState({ top: 0, left: 0 });
    const campaignIconRef = useRef(null);

    const [isMenuExpanded, setIsMenuExpanded] = useState(false);

    const toggleUserProfileMenu = () => {
        if (showCampaignDataMenu) {
            setShowCampaignDataMenu(false);
        }
        setShowUserProfileMenu(prev => !prev);
    };

    const toggleCampaignDataMenu = () => {
        if (showUserProfileMenu) {
            setShowUserProfileMenu(false);
        }
        setShowCampaignDataMenu(prev => !prev);
    };

    const toggleMenuExpansion = () => {
        setIsMenuExpanded(prev => !prev);
    };

    useEffect(() => {
        if (showUserProfileMenu && personalIconRef.current) {
            const iconRect = personalIconRef.current.getBoundingClientRect();
            const top = iconRect.bottom + 10;
            const left = iconRect.right - 300;
            setUserMenuPosition({ top, left });
        }
    }, [showUserProfileMenu]);

    useEffect(() => {
        if (showCampaignDataMenu && campaignIconRef.current) {
            const iconRect = campaignIconRef.current.getBoundingClientRect();
            const top = iconRect.bottom + 10;
            const left = iconRect.right - 320;
            setCampaignDataMenuPosition({ top, left });
        }
    }, [showCampaignDataMenu]);

    const sampleNotifications = [
        { id: 1, icon: '🔔', title: 'Nueva Tarea Asignada', message: 'Revisa tu tarea de matemáticas.', time: 'Hace 5 min', read: false },
        { id: 2, icon: '✨', title: '¡Promoción Especial!', message: 'Obtén un 20% de descuento en el curso de React.', time: 'Hace 1 hora', read: false },
        { id: 3, icon: '🗓️', title: 'Recordatorio de Evento', message: 'Webinar sobre desarrollo web mañana.', time: 'Hace 3 horas', read: true },
        { id: 4, icon: '💬', title: 'Nuevo Mensaje', message: 'Tienes un mensaje de tu profesor de historia.', time: 'Ayer', read: false },
    ];

    return (
        <>
            <div className="top-icons-container">
                <img
                    width={50}
                    src={campaign}
                    alt="campaign"
                    className="top-icon campaign-icon"
                    onClick={toggleCampaignDataMenu}
                    style={{ cursor: 'pointer' }}
                    ref={campaignIconRef}
                />
                {showCampaignDataMenu && (
                    <CampaignData
                        style={{
                            position: 'fixed',
                            top: campaignDataMenuPosition.top,
                            left: campaignDataMenuPosition.left,
                            zIndex: 1001
                        }}
                        notifications={sampleNotifications}
                    />
                )}

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
                            top: userMenuPosition.top,
                            left: userMenuPosition.left,
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
