import React from 'react';
import '../styles/PrivacidadData.css'; 

const PrivacidadData = () => {
  return (
    <div className="privacy-settings-container">
      <div className="privacy-settings-main-content">

        
        <div className="left-column">
          <div className="card profile-visibility-card">
            <div className="card-header">
              <h3>Visibilidad del Perfil</h3>
              <p>Controla quién puede ver tu información</p>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="who-can-see-profile">¿Quién puede ver mi perfil?</label>
                <select id="who-can-see-profile" name="who-can-see-profile" defaultValue="Toda la comunidad universitaria">
                  <option value="Toda la comunidad universitaria">Toda la comunidad universitaria</option>
                  <option value="Solo amigos">Solo amigos</option>
                  <option value="Nadie">Nadie</option>
                </select>
              </div>

              <div className="toggle-group">
                <label htmlFor="profile-visible">Perfil Visible</label>
                <p className="toggle-description">Mostrar mi perfil en directorios</p>
                <label className="switch">
                  <input type="checkbox" id="profile-visible" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>

              <div className="toggle-group">
                <label htmlFor="show-grades">Mostrar Calificaciones</label>
                <p className="toggle-description">Permitir que otros vean mis calificaciones</p>
                <label className="switch">
                  <input type="checkbox" id="show-grades" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>

              <div className="toggle-group">
                <label htmlFor="show-schedule">Mostrar Horario</label>
                <p className="toggle-description">Permitir que otros vean mi horario de clases</p>
                <label className="switch">
                  <input type="checkbox" id="show-schedule" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>

              <div className="toggle-group last-toggle">
                <label htmlFor="show-attendance">Mostrar Asistencia</label>
                <p className="toggle-description">Permitir que otros vean mi registro de asistencia</p>
                <label className="switch">
                  <input type="checkbox" id="show-attendance" /> {/* Default unchecked */}
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>

      
        <div className="right-column">
       
          <div className="card communication-card">
            <div className="card-header">
              <h3>Comunicación</h3>
              <p>Configura quién puede contactarte</p>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="who-can-message">¿Quién puede enviarme mensajes?</label>
                <select id="who-can-message" name="who-can-message" defaultValue="Toda la comunidad universitaria">
                  <option value="Toda la comunidad universitaria">Toda la comunidad universitaria</option>
                  <option value="Solo amigos">Solo amigos</option>
                  <option value="Nadie">Nadie</option>
                </select>
              </div>

              <div className="toggle-group">
                <label htmlFor="show-online-status">Mostrar Estado en Línea</label>
                <p className="toggle-description">Permitir que otros vean cuando estoy activo</p>
                <label className="switch">
                  <input type="checkbox" id="show-online-status" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>

              <div className="toggle-group">
                <label htmlFor="read-receipts">Confirmación de Lectura</label>
                <p className="toggle-description">Mostrar cuando he leído los mensajes</p>
                <label className="switch">
                  <input type="checkbox" id="read-receipts" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>

              <div className="blocked-messages-section">
                <h4>Bloquear Mensajes de:</h4>
                <div className="blocked-users-list">
                  <p>No hay usuarios bloqueados</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card data-privacy-card">
            <div className="card-header">
              <h3>Datos y Privacidad</h3>
              <p>Gestiona cómo se utilizan tus datos</p>
            </div>
            <div className="card-body">
              <div className="toggle-group">
                <label htmlFor="usage-analysis">Análisis de Uso</label>
                <p className="toggle-description">Permitir análisis anónimo para mejorar servicios</p>
                <label className="switch">
                  <input type="checkbox" id="usage-analysis" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>

              <div className="toggle-group">
                <label htmlFor="share-academic-data">Compartir Datos Académicos</label>
                <p className="toggle-description">Con departamentos universitarios para estadísticas</p>
                <label className="switch">
                  <input type="checkbox" id="share-academic-data" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>

              <div className="toggle-group last-toggle">
                <label htmlFor="third-party-cookies">Cookies de Terceros</label>
                <p className="toggle-description">Permitir cookies de servicios externos</p>
                <label className="switch">
                  <input type="checkbox" id="third-party-cookies" /> {/* Default unchecked */}
                  <span className="slider round"></span>
                </label>
              </div>

              <div className="request-data-section">
                <button className="request-data-button">
                  <span className="material-icons">download</span> {/* Material icon for download */}
                  Solicitar Mis Datos Personales
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

    
      <div className="privacy-actions">
        <button className="btn cancel-btn">Cancelar</button>
        <button className="btn save-btn">Guardar Cambios</button>
      </div>
    </div>
  );
};

export default PrivacidadData;