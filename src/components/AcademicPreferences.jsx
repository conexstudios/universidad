import React from 'react';
import '../styles/AcademicPreferences.css'; 

const AcademicPreferences = () => {
  return (
    <div className="academic-prefs-container">
      <div className="academic-prefs-main-content">

        <div className="card academic-prefs-card">
          <div className="card-header">
            <h3>Preferencias Académicas</h3>
            <p>Personaliza tus preferencias de estudio y visualización académica</p>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="vista-calendario">Vista de Calendario Predeterminada</label>
              <select id="vista-calendario" name="vista-calendario" defaultValue="Semana">
                <option value="Dia">Día</option>
                <option value="Semana">Semana</option>
                <option value="Mes">Mes</option>
                <option value="Agenda">Agenda</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="formato-horario">Formato de Horario</label>
              <select id="formato-horario" name="formato-horario" defaultValue="12 horas (AM/PM)">
                <option value="12 horas (AM/PM)">12 horas (AM/PM)</option>
                <option value="24 horas">24 horas</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="primer-dia-semana">Primer Día de la Semana</label>
              <select id="primer-dia-semana" name="primer-dia-semana" defaultValue="Lunes">
                <option value="Lunes">Lunes</option>
                <option value="Domingo">Domingo</option>
              </select>
            </div>

            <div className="toggle-group">
              <label htmlFor="mostrar-tareas-completadas">Mostrar Tareas Completadas</label>
              <p className="toggle-description">Mantener tareas completadas en la lista</p>
              <label className="switch">
                <input type="checkbox" id="mostrar-tareas-completadas" defaultChecked />
                <span className="slider round"></span>
              </label>
            </div>

            <div className="toggle-group">
              <label htmlFor="recordatorios-tareas">Recordatorios de Tareas</label>
              <p className="toggle-description">Recibir alertas antes de la fecha límite</p>
              <label className="switch">
                <input type="checkbox" id="recordatorios-tareas" defaultChecked />
                <span className="slider round"></span>
              </label>
            </div>

            <div className="toggle-group">
              <label htmlFor="mostrar-progreso-curso">Mostrar Progreso del Curso</label>
              <p className="toggle-description">Ver indicadores de progreso en cursos</p>
              <label className="switch">
                <input type="checkbox" id="mostrar-progreso-curso" defaultChecked />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Información Académica Section */}
        <div className="card academic-info-card">
          <div className="card-header">
            <h3>Información Académica</h3>
            <p>Resumen de tu información académica actual</p>
          </div>
          <div className="card-body academic-info-summary">
            <div className="info-item">
              <span className="info-label">Programa:</span>
              <span className="info-value">Licenciatura en Psicología</span>
            </div>
            <div className="info-item">
              <span className="info-label">Semestre Actual:</span>
              <span className="info-value">6to Semestre</span>
            </div>
            <div className="info-item">
              <span className="info-label">Promedio General:</span>
              <span className="info-value">9.2</span>
            </div>
            <div className="info-item">
              <span className="info-label">Créditos Completados:</span>
              <span className="info-value">180 / 320</span>
            </div>
            <div className="info-item">
              <span className="info-label">Estado:</span>
              <span className="info-value status-badge">Regular</span>
            </div>

            <h4>Tutor Académico</h4>
            <div className="tutor-card">
              <div className="tutor-avatar">DR</div>
              <div className="tutor-details">
                <p className="tutor-name">Dr. Roberto Méndez</p>
                <p className="tutor-email">roberto.mendez@universidad.edu</p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="card calendar-settings-card full-width-card">
          <div className="card-header">
            <h3>Calendario Académico</h3>
            <p>Configura la visualización de tu calendario académico</p>
          </div>
          <div className="card-body">
            <h4>Categorías Visibles</h4>
            <div className="categories-grid">
              <div className="category-item">
                <span className="category-color-dot blue"></span>
                <label htmlFor="cat-clases">Clases</label>
                <label className="switch">
                  <input type="checkbox" id="cat-clases" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="category-item">
                <span className="category-color-dot red"></span>
                <label htmlFor="cat-examenes">Exámenes</label>
                <label className="switch">
                  <input type="checkbox" id="cat-examenes" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="category-item">
                <span className="category-color-dot orange"></span>
                <label htmlFor="cat-tareas">Tareas</label>
                <label className="switch">
                  <input type="checkbox" id="cat-tareas" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="category-item">
                <span className="category-color-dot green"></span>
                <label htmlFor="cat-eventos">Eventos</label>
                <label className="switch">
                  <input type="checkbox" id="cat-eventos" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="category-item">
                <span className="category-color-dot purple"></span>
                <label htmlFor="cat-asesorias">Asesorías</label>
                <label className="switch">
                  <input type="checkbox" id="cat-asesorias" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="category-item">
                <span className="category-color-dot pink"></span>
                <label htmlFor="cat-personales">Personales</label>
                <label className="switch">
                  <input type="checkbox" id="cat-personales" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div className="sync-calendar">
                <h4>Sincronizar con Google Calendar</h4>
                <p>Mantén tu calendario sincronizado</p>
                <button className="sync-button">Sincronizar Ahora</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AcademicPreferences;