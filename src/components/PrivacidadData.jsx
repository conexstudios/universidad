import React, { useState, useEffect } from 'react';
import '../styles/PrivacidadData.css';
import useSessionStore from '../store/sessionStore';

const PrivacidadData = () => {
  const { session, updateSession } = useSessionStore();
  
  const [preferencias, setPreferencias] = useState({
    visibilidadPerfil: 'Toda la comunidad universitaria',
    perfilVisible: true,
    mostrarCalificaciones: true,
    mostrarHorario: true,
    mostrarCorreo: true,
    mostrarTelefono: false,
    mostrarCumpleanos: false,
    mostrarDireccion: false,
    compartirDatos: {
      propositosAcademicos: true,
      investigacion: false,
      marketing: false,
      terceros: false
    },
    seguimientoUbicacion: false,
    seguimientoActividad: true
  });


  useEffect(() => {
    if (session?.preferenciasPrivacidad) {
      setPreferencias(prev => ({
        ...prev,
        ...session.preferenciasPrivacidad
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
      preferenciasPrivacidad: preferenciasActualizadas
    });
  };

 
  const manejarCambioCompartirDatos = (campo, valor) => {
    const compartirDatosActualizado = {
      ...preferencias.compartirDatos,
      [campo]: valor
    };
    
    const preferenciasActualizadas = {
      ...preferencias,
      compartirDatos: compartirDatosActualizado
    };
    
    setPreferencias(preferenciasActualizadas);
    
    updateSession({
      ...session,
      preferenciasPrivacidad: preferenciasActualizadas
    });
  };

  return (
    <div className="contenedor-preferencias">
      <div className="contenido-principal">
        <div className="columna-izquierda">
          <div className="tarjeta">
            <div className="encabezado-tarjeta">
              <h3>Visibilidad del Perfil</h3>
              <p>Controla quién puede ver tu información personal</p>
            </div>
            <div className="cuerpo-tarjeta">
              <div className="grupo-formulario">
                <label htmlFor="visibilidad-perfil">¿Quién puede ver mi perfil?</label>
                <select 
                  id="visibilidad-perfil"
                  value={preferencias.visibilidadPerfil}
                  onChange={(e) => manejarCambioPreferencia('visibilidadPerfil', e.target.value)}
                >
                  <option value="Toda la comunidad universitaria">Toda la comunidad universitaria</option>
                  <option value="Solo amigos">Solo amigos</option>
                  <option value="Solo yo">Solo yo</option>
                </select>
              </div>

              <div className="grupo-interruptor">
                <label htmlFor="perfil-visible">Perfil visible</label>
                <p className="descripcion">Mostrar mi perfil en los directorios de búsqueda</p>
                <label className="interruptor">
                  <input 
                    type="checkbox" 
                    id="perfil-visible"
                    checked={preferencias.perfilVisible}
                    onChange={(e) => manejarCambioPreferencia('perfilVisible', e.target.checked)}
                  />
                  <span className="deslizador redondo"></span>
                </label>
              </div>
            </div>
          </div>

          <div className="tarjeta">
            <div className="encabezado-tarjeta">
              <h3>Información Académica</h3>
              <p>Controla la visibilidad de tu información académica</p>
            </div>
            <div className="cuerpo-tarjeta">
              <div className="grupo-interruptor">
                <label htmlFor="mostrar-calificaciones">Mostrar calificaciones</label>
                <p className="descripcion">Permitir que otros vean mis calificaciones</p>
                <label className="interruptor">
                  <input 
                    type="checkbox" 
                    id="mostrar-calificaciones"
                    checked={preferencias.mostrarCalificaciones}
                    onChange={(e) => manejarCambioPreferencia('mostrarCalificaciones', e.target.checked)}
                  />
                  <span className="deslizador redondo"></span>
                </label>
              </div>

              <div className="grupo-interruptor">
                <label htmlFor="mostrar-horario">Mostrar horario</label>
                <p className="descripcion">Permitir que otros vean mi horario de clases</p>
                <label className="interruptor">
                  <input 
                    type="checkbox" 
                    id="mostrar-horario"
                    checked={preferencias.mostrarHorario}
                    onChange={(e) => manejarCambioPreferencia('mostrarHorario', e.target.checked)}
                  />
                  <span className="deslizador redondo"></span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="columna-derecha">
          <div className="tarjeta">
            <div className="encabezado-tarjeta">
              <h3>Información Personal</h3>
              <p>Controla qué información personal es visible</p>
            </div>
            <div className="cuerpo-tarjeta">
              {[
                { id: 'mostrarCorreo', etiqueta: 'Mostrar correo electrónico', descripcion: 'Hacer visible mi dirección de correo' },
                { id: 'mostrarTelefono', etiqueta: 'Mostrar teléfono', descripcion: 'Hacer visible mi número de teléfono' },
                { id: 'mostrarCumpleanos', etiqueta: 'Mostrar fecha de nacimiento', descripcion: 'Hacer visible mi fecha de nacimiento' },
                { id: 'mostrarDireccion', etiqueta: 'Mostrar dirección', descripcion: 'Hacer visible mi dirección' }
              ].map(({ id, etiqueta, descripcion }) => (
                <div key={id} className="grupo-interruptor">
                  <label htmlFor={id}>{etiqueta}</label>
                  <p className="descripcion">{descripcion}</p>
                  <label className="interruptor">
                    <input 
                      type="checkbox" 
                      id={id}
                      checked={preferencias[id]}
                      onChange={(e) => manejarCambioPreferencia(id, e.target.checked)}
                    />
                    <span className="deslizador redondo"></span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="tarjeta">
            <div className="encabezado-tarjeta">
              <h3>Configuración de Privacidad</h3>
              <p>Preferencias avanzadas de privacidad</p>
            </div>
            <div className="cuerpo-tarjeta">
              <h4>Compartir mis datos para:</h4>
              {[
                { id: 'propositosAcademicos', etiqueta: 'Fines académicos', descripcion: 'Permitir el uso de mis datos para análisis académicos' },
                { id: 'investigacion', etiqueta: 'Investigación', descripcion: 'Permitir el uso de mis datos para investigación' },
                { id: 'marketing', etiqueta: 'Marketing', descripcion: 'Recibir ofertas y actualizaciones' },
                { id: 'terceros', etiqueta: 'Compartir con terceros', descripcion: 'Permitir compartir mis datos con socios' }
              ].map(({ id, etiqueta, descripcion }) => (
                <div key={id} className="grupo-interruptor">
                  <label htmlFor={`compartir-${id}`}>{etiqueta}</label>
                  <p className="descripcion">{descripcion}</p>
                  <label className="interruptor">
                    <input 
                      type="checkbox"
                      id={`compartir-${id}`}
                      checked={preferencias.compartirDatos[id]}
                      onChange={(e) => manejarCambioCompartirDatos(id, e.target.checked)}
                    />
                    <span className="deslizador redondo"></span>
                  </label>
                </div>
              ))}

              <div className="grupo-interruptor">
                <label htmlFor="seguimiento-ubicacion">Seguimiento de ubicación</label>
                <p className="descripcion">Permitir que la aplicación acceda a mi ubicación</p>
                <label className="interruptor">
                  <input 
                    type="checkbox" 
                    id="seguimiento-ubicacion"
                    checked={preferencias.seguimientoUbicacion}
                    onChange={(e) => manejarCambioPreferencia('seguimientoUbicacion', e.target.checked)}
                  />
                  <span className="deslizador redondo"></span>
                </label>
              </div>

              <div className="grupo-interruptor">
                <label htmlFor="seguimiento-actividad">Seguimiento de actividad</label>
                <p className="descripcion">Permitir el seguimiento de mi actividad en la plataforma</p>
                <label className="interruptor">
                  <input 
                    type="checkbox" 
                    id="seguimiento-actividad"
                    checked={preferencias.seguimientoActividad}
                    onChange={(e) => manejarCambioPreferencia('seguimientoActividad', e.target.checked)}
                  />
                  <span className="deslizador redondo"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacidadData;