import React, { useState, useEffect } from 'react';
import '../styles/AparienciaData.css';
import useSessionStore from '../store/sessionStore';

const AparienciaData = () => {
  const { session, updateSession } = useSessionStore();
  
  const [preferencias, setPreferencias] = useState({
    tema: session?.preferenciasApariencia?.tema || 'sistema',
    colorPrimario: session?.preferenciasApariencia?.colorPrimario || '#6a6ee0',
    coloresDisponibles: [
      { nombre: 'azul', valor: '#6a6ee0' },
      { nombre: 'morado', valor: '#9c27b0' },
      { nombre: 'verde', valor: '#4caf50' },
      { nombre: 'rojo', valor: '#f44336' },
      { nombre: 'naranja', valor: '#ff9800' },
      { nombre: 'turquesa', valor: '#009688' }
    ],
    densidad: session?.preferenciasApariencia?.densidad || 'estandar',
    tamanoFuente: session?.preferenciasApariencia?.tamanoFuente || 16,
    widgets: session?.preferenciasApariencia?.widgets || {
      calendario: true,
      tareasPendientes: true,
      proximasClases: true,
      noticias: true,
      eventos: true
    }
  });

  useEffect(() => {
    if (session?.preferenciasApariencia) {
      setPreferencias(prev => ({
        ...prev,
        ...session.preferenciasApariencia
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
      preferenciasApariencia: preferenciasActualizadas
    });
  };

  const manejarCambioWidget = (widget, activo) => {
    const widgetsActualizados = {
      ...preferencias.widgets,
      [widget]: activo
    };
    
    manejarCambioPreferencia('widgets', widgetsActualizados);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-tema', preferencias.tema);
    document.documentElement.style.setProperty('--color-primario', preferencias.colorPrimario);
    document.documentElement.style.fontSize = `${preferencias.tamanoFuente}px`;
    document.body.classList.remove('densidad-compacto', 'densidad-estandar', 'densidad-amplio');
    document.body.classList.add(`densidad-${preferencias.densidad}`);
  }, [preferencias.tema, preferencias.colorPrimario, preferencias.tamanoFuente, preferencias.densidad]);

  return (
    <div className="contenedor-preferencias">
      <div className="contenido-principal">
        <div className="tarjeta">
          <div className="encabezado-tarjeta">
            <h3>Tema</h3>
            <p>Personaliza la apariencia de tu portal universitario</p>
          </div>
          <div className="cuerpo-tarjeta">
            <div className="grupo-formulario">
              <label>Modo de Tema</label>
              <div className="grupo-botones">
                {[
                  { valor: 'claro', etiqueta: 'Claro' },
                  { valor: 'oscuro', etiqueta: 'Oscuro' },
                  { valor: 'sistema', etiqueta: 'Sistema' }
                ].map(opcion => (
                  <button
                    key={opcion.valor}
                    className={`boton-opcion ${preferencias.tema === opcion.valor ? 'activo' : ''}`}
                    onClick={() => manejarCambioPreferencia('tema', opcion.valor)}
                  >
                    {opcion.etiqueta}
                  </button>
                ))}
              </div>
            </div>

            <div className="grupo-formulario">
              <label>Color Principal</label>
              <div className="muestrario-colores">
                {preferencias.coloresDisponibles.map(color => (
                  <button
                    key={color.nombre}
                    className={`muestra-color ${preferencias.colorPrimario === color.valor ? 'seleccionado' : ''}`}
                    style={{ backgroundColor: color.valor }}
                    onClick={() => manejarCambioPreferencia('colorPrimario', color.valor)}
                    aria-label={`Color ${color.nombre}`}
                    title={color.nombre.charAt(0).toUpperCase() + color.nombre.slice(1)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="tarjeta">
          <div className="encabezado-tarjeta">
            <h3>Visualización</h3>
            <p>Ajusta cómo se muestra el contenido</p>
          </div>
          <div className="cuerpo-tarjeta">
            <div className="grupo-formulario">
              <label>Densidad de Contenido</label>
              <div className="grupo-botones">
                {[
                  { valor: 'compacto', etiqueta: 'Compacto' },
                  { valor: 'estandar', etiqueta: 'Estándar' },
                  { valor: 'amplio', etiqueta: 'Amplio' }
                ].map(opcion => (
                  <button
                    key={opcion.valor}
                    className={`boton-opcion ${preferencias.densidad === opcion.valor ? 'activo' : ''}`}
                    onClick={() => manejarCambioPreferencia('densidad', opcion.valor)}
                  >
                    {opcion.etiqueta}
                  </button>
                ))}
              </div>
            </div>

            <div className="grupo-formulario">
              <label htmlFor="tamano-fuente">Tamaño de Fuente: {preferencias.tamanoFuente}px</label>
              <input
                type="range"
                id="tamano-fuente"
                min="12"
                max="20"
                step="1"
                value={preferencias.tamanoFuente}
                onChange={(e) => manejarCambioPreferencia('tamanoFuente', parseInt(e.target.value))}
              />
              <div className="rango-leyenda">
                <span>Aa</span>
                <span>Aa</span>
                <span>Aa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="tarjeta">
          <div className="encabezado-tarjeta">
            <h3>Widgets del Dashboard</h3>
            <p>Selecciona qué widgets quieres mostrar en tu panel principal</p>
          </div>
          <div className="cuerpo-tarjeta">
            {Object.entries(preferencias.widgets).map(([widget, activo]) => {
              const nombresWidgets = {
                calendario: 'Calendario',
                tareasPendientes: 'Tareas Pendientes',
                proximasClases: 'Próximas Clases',
                noticias: 'Noticias',
                eventos: 'Eventos'
              };
              
              return (
                <div key={widget} className="grupo-interruptor">
                  <div className="texto">
                    <label htmlFor={`widget-${widget}`}>{nombresWidgets[widget]}</label>
                  </div>
                  <label className="interruptor">
                    <input
                      type="checkbox"
                      id={`widget-${widget}`}
                      checked={activo}
                      onChange={(e) => manejarCambioWidget(widget, e.target.checked)}
                    />
                    <span className="deslizador redondo"></span>
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="acciones">
        <button className="boton boton-secundario">Restablecer Valores</button>
        <button className="boton boton-primario">Guardar Cambios</button>
      </div>
    </div>
  );
};

export default AparienciaData;
