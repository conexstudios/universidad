import React from 'react';
import '../styles/CampaignData.css'; 

const   CampaignData = ({ style, notifications = [] }) => {
  return (
    <div className="notification-menu-container" style={style}>
      <div className="notification-header">
        <h3>Notificaciones</h3>
        {notifications.length > 0 && (
          <span className="notification-total-count">{notifications.length} nuevas</span>
        )}
      </div>

      <nav className="notification-list">
        <ul>
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <li key={notification.id} className={notification.read ? 'read' : 'unread'}>
                <span className="notification-icon">{notification.icon}</span>
                <div className="notification-content">
                  <p className="notification-title">{notification.title}</p>
                  <p className="notification-message">{notification.message}</p>
                  <span className="notification-time">{notification.time}</span>
                </div>
                {!notification.read && <span className="new-badge"></span>}
              </li>
            ))
          ) : (
            <li className="no-notifications">
              <p>No tienes notificaciones nuevas.</p>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default CampaignData;