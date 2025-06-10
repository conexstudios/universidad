import React from 'react';
import '../styles/UserProfileMenu.css';

const UserProfileMenu = ({ style, userName, userAvatar, className }) => {
  const defaultAvatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName || 'S')}&background=random&color=fff`;

  return (
    <div className={`user-profile-menu-container ${className || ''}`} style={style}>
      <div className="user-header">
        <div className="user-avatar">
          <img
            src={userAvatar || defaultAvatarUrl}
            alt={userName ? `${userName}'s avatar` : 'User avatar'}
            className="avatar-img"
          />
        </div>
        <div className="user-info">
          <h3>{userName || 'User'}</h3>
          <p>Ingeniería en Sistemas</p>
          <div className="user-status">
            <span>8vo Semestre</span>
            <span className="active-badge">Activo</span>
          </div>
          <p className="user-email">yotman.reyes@universidad.edu</p>
        </div>
      </div>

      <nav className="menu-navigation">
        <ul>
          <li>
            <span className="menu-icon">👤</span> Mi Perfil
          </li>
          <li>
            <span className="menu-icon">📚</span> Biblioteca Virtual
          </li>
          <li>
            <span className="menu-icon">👥</span> Grupos de Estudio
          </li>
          <li>
            <span className="menu-icon">💬</span> Mensajes <span className="notification-count">3</span>
          </li>
          <li>
            <span className="menu-icon">⚙️</span> Configuración <span className="arrow">›</span>
          </li>
          <li>
            <span className="menu-icon">🔒</span> Seguridad <span className="arrow">›</span>
          </li>
          <li>
            <span className="menu-icon">⬇️</span> Descargar Datos
          </li>
          <li>
            <span className="menu-icon">❓</span> Centro de Ayuda
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserProfileMenu;
