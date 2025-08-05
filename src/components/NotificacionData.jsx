import React, { useState, useEffect } from 'react';
import '../styles/NotificacionData.css';
import useSessionStore from '../store/sessionStore';

const NotificacionData = () => {
  const { session, updateSession } = useSessionStore();
  
  const [preferencias, setPreferencias] = useState({
    notificacionesEmail: true,
    notificacionesPush: true,
    notificacionesSMS: false,
    email: session?.user?.email || '',
    telefono: session?.user?.telefono || '',
    

    frecuenciaResumen: 'Diario',
    
   
    notificacionesAcademicas: true,
    notificacionesSociales: true,
    notificacionesBiblioteca: false,
    notificacionesFinancieras: true,
    
   
    noMolestarHabilitado: false,
    noMolestarInicio: '22:00',
    noMolestarFin: '08:00'
  });

 
  useEffect(() => {
    if (session?.preferenciasNotificaciones) {
      setPreferencias(prev => ({
        ...prev,
        ...session.preferenciasNotificaciones,
        email: session.user?.email || prev.email,
        telefono: session.user?.telefono || prev.telefono
      }));
    }
  }, [session]);

  
  const manejarCambioPreferencia = (campo, valor) => {
    const preferenciasActualizadas = {
      ...preferencias,
      [campo]: valor
    };
    
    setPreferencias(preferenciasActualizadas);
    
   
    updateSession({
      ...session,
      preferenciasNotificaciones: preferenciasActualizadas
    });
  };

  
  const manejarCambioHorario = (campo, valor) => {
    if (/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(valor)) {
      manejarCambioPreferencia(campo, valor);
    } else if (valor === '') {
      manejarCambioPreferencia(campo, valor);
    }
  };

  return (
    <div className="notification-data-container">
      <div className="notification-data-main-content">

        <div className="card notification-channels-card">
          <div className="card-header">
            <h3>Canales de Notificacion</h3>
            <p>Configura cómo quieres recibir tus notificaciones</p>
          </div>
          <div className="card-body">
            <div className="notification-item">
              <div className="notification-icon-text">
                <div className="text-content">
                  <label htmlFor="email-notifications">Correo Electrónico</label>
                  <p className="email-address">{preferencias.email || 'No se ha configurado un correo electrónico'}</p>
                </div>
              </div>
              <label className="switch">
                <input 
                  type="checkbox" 
                  id="email-notifications"
                  checked={preferencias.notificacionesEmail}
                  onChange={(e) => manejarCambioPreferencia('notificacionesEmail', e.target.checked)}
                />
              </label>
            </div>

            <div className="notification-item">
              <div className="notification-icon-text">
                <div className="text-content">
                  <label htmlFor="push-notifications">Notificaciones Push</label>
                  <p className="notification-description">En navegador y aplicación móvil</p>
                </div>
              </div>
              <label className="switch">
                <input 
                  type="checkbox" 
                  id="push-notifications"
                  checked={preferencias.notificacionesPush}
                  onChange={(e) => manejarCambioPreferencia('notificacionesPush', e.target.checked)}
                />
                <span className="slider round"></span>
              </label>
            </div>

            <div className="notification-item">
              <div className="notification-icon-text">
                <div className="text-content">
                  <label htmlFor="sms-notifications">SMS</label>
                  <p className="phone-number">{preferencias.telefono || 'No se ha configurado un número de teléfono'}</p>
                </div>
              </div>
              <label className="switch">
                <input 
                  type="checkbox" 
                  id="sms-notifications"
                  checked={preferencias.notificacionesSMS}
                  onChange={(e) => manejarCambioPreferencia('notificacionesSMS', e.target.checked)}
                />
                <span className="slider round"></span>
              </label>
            </div>

            <div className="form-group frequency-group">
              <label htmlFor="email-summary-frequency">Frecuencia de Resumen por Email</label>
              <select 
                id="email-summary-frequency"
                value={preferencias.frecuenciaResumen}
                onChange={(e) => manejarCambioPreferencia('frecuenciaResumen', e.target.value)}
              >
                <option value="Nunca">Nunca</option>
                <option value="Diario">Diario</option>
                <option value="Semanal">Semanal</option>
                <option value="Mensual">Mensual</option>
              </select>
            </div>
          </div>
        </div>

        <div className="card notification-types-card">
          <div className="card-header">
            <h3>Tipos de Notificaciones</h3>
            <p>Elige qué tipo de notificaciones quieres recibir</p>
          </div>
          <div className="card-body">
            {[
              { id: 'notificacionesAcademicas', label: 'Académicas', descripcion: 'Calificaciones, tareas y fechas límite' },
              { id: 'notificacionesSociales', label: 'Sociales', descripcion: 'Eventos, grupos y actividades extracurriculares' },
              { id: 'notificacionesBiblioteca', label: 'Biblioteca', descripcion: 'Préstamos, devoluciones y disponibilidad' },
              { id: 'notificacionesFinancieras', label: 'Financieras', descripcion: 'Pagos, becas y vencimientos' }
            ].map(({ id, label, descripcion }) => (
              <div key={id} className="toggle-group notification-type-item">
                <label htmlFor={id}>{label}</label>
                <p className="toggle-description">{descripcion}</p>
                <label className="switch">
                  <input 
                    type="checkbox" 
                    id={id}
                    checked={preferencias[id]}
                    onChange={(e) => manejarCambioPreferencia(id, e.target.checked)}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="card notification-types-card">
          <div className="card-header">
            <h3>No Molestar</h3>
            <p>Configura cuándo no quieres recibir notificaciones</p>
          </div>
          <div className="card-body">
            <div className="toggle-group notification-type-item">
              <label htmlFor="noMolestarHabilitado">Activar horario de no molestar</label>
              <p className="toggle-description">Silencia las notificaciones durante el horario configurado</p>
              <label className="switch">
                <input 
                  type="checkbox" 
                  id="noMolestarHabilitado"
                  checked={preferencias.noMolestarHabilitado}
                  onChange={(e) => manejarCambioPreferencia('noMolestarHabilitado', e.target.checked)}
                />
                <span className="slider round"></span>
              </label>
            </div>

            {preferencias.noMolestarHabilitado && (
              <div className="form-group">
                <label htmlFor="noMolestarInicio">Desde</label>
                <input 
                  type="time" 
                  id="noMolestarInicio"
                  value={preferencias.noMolestarInicio}
                  onChange={(e) => manejarCambioHorario('noMolestarInicio', e.target.value)}
                />
                <label htmlFor="noMolestarFin">Hasta</label>
                <input 
                  type="time" 
                  id="noMolestarFin"
                  value={preferencias.noMolestarFin}
                  onChange={(e) => manejarCambioHorario('noMolestarFin', e.target.value)}
                />
              </div>
            )}
          </div>
        </div>

      </div>

      <div className="notification-actions">
        <button className="btn cancel-btn">Cancelar</button>
        <button className="btn save-btn">Guardar Cambios</button>
      </div>
    </div>
  );
};

export default NotificacionData;
