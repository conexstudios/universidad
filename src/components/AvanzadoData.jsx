import React, { useState, useEffect } from 'react';
import '../styles/AvanzadoData.css';
import useSessionStore from '../store/sessionStore';

const AvanzadoData = () => {
  const { session, updateSession } = useSessionStore();
  
  const [preferencias, setPreferencias] = useState({
    modoOffline: false,
    sincronizacionAutomatica: true,
    frecuenciaSincronizacion: '15',
    modoAhorroDatos: false,
    tamanoCache: 500, // MB
    
  
    modoDesarrollador: false,
    logsDepuracion: false,

    telemetria: true,
    anunciosPersonalizados: true,
    

    copiaSeguridadAutomatica: true,
    frecuenciaCopiaSeguridad: 'diaria',
    
   
    endpointPersonalizado: '',
    tiempoEsperaAPI: 30, 
  });

  
  useEffect(() => {
    if (session?.preferenciasAvanzadas) {
      setPreferencias(prev => ({
        ...prev,
        ...session.preferenciasAvanzadas
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
      preferenciasAvanzadas: preferenciasActualizadas
    });
  };

  
  const manejarCambioEntrada = (e) => {
    const { name, value, type, checked } = e.target;
    const valor = type === 'checkbox' ? checked : value;
    manejarCambioPreferencia(name, valor);
  };

  
  const limpiarCache = () => {
    if (window.confirm('¿Estás seguro de que deseas limpiar la caché de la aplicación? Esto no afectará tus datos personales.')) {
      console.log('Limpiando caché...');
      alert('La caché se ha limpiado correctamente.');
    }
  };


  const restablecerConfiguracion = () => {
    if (window.confirm('¿Estás seguro de que deseas restablecer todas las configuraciones avanzadas a sus valores predeterminados?')) {
      const valoresPorDefecto = {
        modoOffline: false,
        sincronizacionAutomatica: true,
        frecuenciaSincronizacion: '15',
        modoAhorroDatos: false,
        tamanoCache: 500,
        modoDesarrollador: false,
        logsDepuracion: false,
        telemetria: true,
        anunciosPersonalizados: true,
        copiaSeguridadAutomatica: true,
        frecuenciaCopiaSeguridad: 'diaria',
        endpointPersonalizado: '',
        tiempoEsperaAPI: 30,
      };
      
      setPreferencias(valoresPorDefecto);
      updateSession({
        ...session,
        preferenciasAvanzadas: valoresPorDefecto
      });
      
      alert('Las configuraciones avanzadas se han restablecido a sus valores predeterminados.');
    }
  };

  return (
    <div className="contenedor-preferencias">
      <div className="contenido-principal">
        <div className="tarjeta">
          <div className="encabezado-tarjeta">
            <h3>Conexión y Sincronización</h3>
            <p>Configura opciones avanzadas de conexión</p>
          </div>
          <div className="cuerpo-tarjeta">
            <div className="grupo-interruptor">
              <div className="texto">
                <label htmlFor="modo-offline">Modo Offline</label>
                <p className="descripcion">Permitir acceso a contenido sin conexión</p>
              </div>
              <label className="interruptor">
                <input
                  type="checkbox"
                  id="modo-offline"
                  name="modoOffline"
                  checked={preferencias.modoOffline}
                  onChange={manejarCambioEntrada}
                />
                <span className="deslizador redondo"></span>
              </label>
            </div>

            <div className="grupo-interruptor">
              <div className="texto">
                <label htmlFor="sincronizacion-automatica">Sincronización Automática</label>
                <p className="descripcion">Sincronizar datos automáticamente</p>
              </div>
              <label className="interruptor">
                <input
                  type="checkbox"
                  id="sincronizacion-automatica"
                  name="sincronizacionAutomatica"
                  checked={preferencias.sincronizacionAutomatica}
                  onChange={manejarCambioEntrada}
                />
                <span className="deslizador redondo"></span>
              </label>
            </div>

            <div className="grupo-formulario">
              <label htmlFor="frecuencia-sincronizacion">Frecuencia de Sincronización</label>
              <select
                id="frecuencia-sincronizacion"
                name="frecuenciaSincronizacion"
                value={preferencias.frecuenciaSincronizacion}
                onChange={manejarCambioEntrada}
                className="selector"
                disabled={!preferencias.sincronizacionAutomatica}
              >
                <option value="5">Cada 5 minutos</option>
                <option value="15">Cada 15 minutos</option>
                <option value="30">Cada 30 minutos</option>
                <option value="60">Cada hora</option>
                <option value="240">Cada 4 horas</option>
              </select>
            </div>
          </div>
        </div>

        <div className="tarjeta">
          <div className="encabezado-tarjeta">
            <h3>Configuración de Red</h3>
            <p>Opciones avanzadas de conexión y caché</p>
          </div>
          <div className="cuerpo-tarjeta">
            <div className="grupo-interruptor">
              <div className="texto">
                <label htmlFor="modo-ahorro-datos">Modo Ahorro de Datos</label>
                <p className="descripcion">Reducir el uso de datos móviles</p>
              </div>
              <label className="interruptor">
                <input
                  type="checkbox"
                  id="modo-ahorro-datos"
                  name="modoAhorroDatos"
                  checked={preferencias.modoAhorroDatos}
                  onChange={manejarCambioEntrada}
                />
                <span className="deslizador redondo"></span>
              </label>
            </div>

            <div className="grupo-formulario">
              <label htmlFor="tamano-cache">
                Tamaño máximo de caché: {preferencias.tamanoCache} MB
              </label>
              <input
                type="range"
                id="tamano-cache"
                name="tamanoCache"
                min="100"
                max="2000"
                step="100"
                value={preferencias.tamanoCache}
                onChange={manejarCambioEntrada}
              />
              <div className="rango-leyenda">
                <span>100 MB</span>
                <span>1 GB</span>
                <span>2 GB</span>
              </div>
            </div>

            <div className="acciones-secundarias">
              <button 
                className="boton boton-secundario"
                onClick={limpiarCache}
              >
                Limpiar Caché
              </button>
            </div>
          </div>
        </div>

        <div className="tarjeta">
          <div className="encabezado-tarjeta">
            <h3>Opciones de Desarrollador</h3>
            <p>Configuraciones avanzadas para desarrolladores</p>
          </div>
          <div className="cuerpo-tarjeta">
            <div className="grupo-interruptor">
              <div className="texto">
                <label htmlFor="modo-desarrollador">Modo Desarrollador</label>
                <p className="descripcion">Habilitar herramientas de desarrollo</p>
              </div>
              <label className="interruptor">
                <input
                  type="checkbox"
                  id="modo-desarrollador"
                  name="modoDesarrollador"
                  checked={preferencias.modoDesarrollador}
                  onChange={manejarCambioEntrada}
                />
                <span className="deslizador redondo"></span>
              </label>
            </div>

            <div className="grupo-interruptor">
              <div className="texto">
                <label htmlFor="logs-depuracion">Registros de Depuración</label>
                <p className="descripcion">Habilitar logs detallados en consola</p>
              </div>
              <label className="interruptor">
                <input
                  type="checkbox"
                  id="logs-depuracion"
                  name="logsDepuracion"
                  checked={preferencias.logsDepuracion}
                  onChange={manejarCambioEntrada}
                  disabled={!preferencias.modoDesarrollador}
                />
                <span className="deslizador redondo"></span>
              </label>
            </div>

            {preferencias.modoDesarrollador && (
              <div className="grupo-formulario">
                <label htmlFor="endpoint-personalizado">Endpoint de API Personalizado</label>
                <input
                  type="text"
                  id="endpoint-personalizado"
                  name="endpointPersonalizado"
                  value={preferencias.endpointPersonalizado}
                  onChange={manejarCambioEntrada}
                  placeholder="https://api.ejemplo.com/endpoint"
                  className="entrada-texto"
                />
              </div>
            )}
          </div>
        </div>

        <div className="tarjeta">
          <div className="encabezado-tarjeta">
            <h3>Privacidad Avanzada</h3>
            <p>Configuraciones avanzadas de privacidad</p>
          </div>
          <div className="cuerpo-tarjeta">
            <div className="grupo-interruptor">
              <div className="texto">
                <label htmlFor="telemetria">Datos de Telemetría</label>
                <p className="descripcion">Compartir datos de uso anónimos para mejorar la aplicación</p>
              </div>
              <label className="interruptor">
                <input
                  type="checkbox"
                  id="telemetria"
                  name="telemetria"
                  checked={preferencias.telemetria}
                  onChange={manejarCambioEntrada}
                />
                <span className="deslizador redondo"></span>
              </label>
            </div>

            <div className="grupo-interruptor">
              <div className="texto">
                <label htmlFor="anuncios-personalizados">Anuncios Personalizados</label>
                <p className="descripcion">Mostrar anuncios basados en tus intereses</p>
              </div>
              <label className="interruptor">
                <input
                  type="checkbox"
                  id="anuncios-personalizados"
                  name="anunciosPersonalizados"
                  checked={preferencias.anunciosPersonalizados}
                  onChange={manejarCambioEntrada}
                />
                <span className="deslizador redondo"></span>
              </label>
            </div>

            <div className="grupo-formulario">
              <label htmlFor="tiempo-espera-api">Tiempo de espera de API (segundos)</label>
              <input
                type="number"
                id="tiempo-espera-api"
                name="tiempoEsperaAPI"
                min="5"
                max="120"
                value={preferencias.tiempoEsperaAPI}
                onChange={manejarCambioEntrada}
                className="entrada-numero"
              />
            </div>
          </div>
        </div>

        <div className="tarjeta">
          <div className="encabezado-tarjeta">
            <h3>Copias de Seguridad</h3>
            <p>Configuración de copias de seguridad automáticas</p>
          </div>
          <div className="cuerpo-tarjeta">
            <div className="grupo-interruptor">
              <div className="texto">
                <label htmlFor="copia-seguridad-automatica">Copia de Seguridad Automática</label>
                <p className="descripcion">Realizar copias de seguridad automáticamente</p>
              </div>
              <label className="interruptor">
                <input
                  type="checkbox"
                  id="copia-seguridad-automatica"
                  name="copiaSeguridadAutomatica"
                  checked={preferencias.copiaSeguridadAutomatica}
                  onChange={manejarCambioEntrada}
                />
                <span className="deslizador redondo"></span>
              </label>
            </div>

            <div className="grupo-formulario">
              <label htmlFor="frecuencia-copia-seguridad">Frecuencia de Copia de Seguridad</label>
              <select
                id="frecuencia-copia-seguridad"
                name="frecuenciaCopiaSeguridad"
                value={preferencias.frecuenciaCopiaSeguridad}
                onChange={manejarCambioEntrada}
                className="selector"
                disabled={!preferencias.copiaSeguridadAutomatica}
              >
                <option value="diaria">Diaria</option>
                <option value="semanal">Semanal</option>
                <option value="quincenal">Quincenal</option>
                <option value="mensual">Mensual</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="acciones">
        <button 
          className="boton boton-secundario"
          onClick={restablecerConfiguracion}
        >
          Restablecer Valores
        </button>
        <button 
          className="boton boton-primario"
          onClick={() => console.log('Configuraciones avanzadas guardadas', preferencias)}
        >
          Guardar Cambios
        </button>
      </div>
    </div>
  );
};

export default AvanzadoData;
