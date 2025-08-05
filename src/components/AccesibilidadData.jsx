import React, { useState, useEffect } from 'react';
import '../styles/AccesibilidadData.css';
import useSessionStore from '../store/sessionStore';

const AccesibilidadData = () => {
  const { session, updateSession } = useSessionStore();
  
  const [preferencias, setPreferencias] = useState({
    altoContraste: false,
    reducirMovimiento: false,
    textoAVoz: false,
    tamanoFuente: 16,
    espaciadoTexto: 'normal', 
    fuenteLegible: false,
    altoContrasteInputs: false,
    resaltarEnlaces: true,
    ocultarAnimaciones: false
  });

  
  useEffect(() => {
    if (session?.preferenciasAccesibilidad) {
      setPreferencias(prev => ({
        ...prev,
        ...session.preferenciasAccesibilidad
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
      preferenciasAccesibilidad: preferenciasActualizadas
    });

   
    aplicarEstilosAccesibilidad(preferenciasActualizadas);
  };

  
  const aplicarEstilosAccesibilidad = (prefs) => {
    if (prefs.altoContraste) {
      document.documentElement.setAttribute('data-alto-contraste', 'true');
    } else {
      document.documentElement.removeAttribute('data-alto-contraste');
    }

   
    if (prefs.reducirMovimiento || prefs.ocultarAnimaciones) {
      document.documentElement.setAttribute('data-reducir-movimiento', 'true');
    } else {
      document.documentElement.removeAttribute('data-reducir-movimiento');
    }

    
    document.documentElement.style.setProperty('--tamano-fuente-base', `${prefs.tamanoFuente}px`);

    
    document.documentElement.style.setProperty('--espaciado-linea', 
      prefs.espaciadoTexto === 'compacto' ? '1.2' : 
      prefs.espaciadoTexto === 'amplio' ? '2' : '1.5'
    );

   
    if (prefs.fuenteLegible) {
      document.documentElement.setAttribute('data-fuente-legible', 'true');
    } else {
      document.documentElement.removeAttribute('data-fuente-legible');
    }

   
    if (prefs.resaltarEnlaces) {
      document.documentElement.setAttribute('data-resaltar-enlaces', 'true');
    } else {
      document.documentElement.removeAttribute('data-resaltar-enlaces');
    }
  };

 
  useEffect(() => {
    aplicarEstilosAccesibilidad(preferencias);
  }, [preferencias]);

 
  useEffect(() => {
    aplicarEstilosAccesibilidad(preferencias);
    return () => {
      document.documentElement.removeAttribute('data-alto-contraste');
      document.documentElement.removeAttribute('data-reducir-movimiento');
      document.documentElement.removeAttribute('data-fuente-legible');
      document.documentElement.removeAttribute('data-resaltar-enlaces');
      document.documentElement.style.removeProperty('--tamano-fuente-base');
      document.documentElement.style.removeProperty('--espaciado-linea');
    };
  }, []);


  const toggleTextoAVoz = (activar) => {
    if (activar && 'speechSynthesis' in window) {
      console.log('Síntesis de voz activada');
    } else if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    manejarCambioPreferencia('textoAVoz', activar);
  };

  return (
    <div className="contenedor-preferencias">
      <div className="contenido-principal">
        <div className="tarjeta">
          <div className="encabezado-tarjeta">
            <h3>Opciones de Accesibilidad</h3>
            <p>Personaliza la experiencia para mejorar la accesibilidad</p>
          </div>
          <div className="cuerpo-tarjeta">
            <div className="grupo-interruptor">
              <div className="texto">
                <label htmlFor="alto-contraste">Alto Contraste</label>
                <p className="descripcion">Aumenta el contraste de colores para mejorar la legibilidad</p>
              </div>
              <label className="interruptor">
                <input
                  type="checkbox"
                  id="alto-contraste"
                  checked={preferencias.altoContraste}
                  onChange={(e) => manejarCambioPreferencia('altoContraste', e.target.checked)}
                />
                <span className="deslizador redondo"></span>
              </label>
            </div>

            <div className="grupo-interruptor">
              <div className="texto">
                <label htmlFor="reducir-movimiento">Reducir Movimiento</label>
                <p className="descripcion">Minimiza animaciones y transiciones</p>
              </div>
              <label className="interruptor">
                <input
                  type="checkbox"
                  id="reducir-movimiento"
                  checked={preferencias.reducirMovimiento}
                  onChange={(e) => manejarCambioPreferencia('reducirMovimiento', e.target.checked)}
                />
                <span className="deslizador redondo"></span>
              </label>
            </div>

            <div className="grupo-interruptor">
              <div className="texto">
                <label htmlFor="texto-a-voz">Texto a Voz</label>
                <p className="descripcion">Habilitar lectura de contenido en voz alta</p>
              </div>
              <label className="interruptor">
                <input
                  type="checkbox"
                  id="texto-a-voz"
                  checked={preferencias.textoAVoz}
                  onChange={(e) => toggleTextoAVoz(e.target.checked)}
                />
                <span className="deslizador redondo"></span>
              </label>
            </div>
          </div>
        </div>

        
        <div className="tarjeta">
          <div className="encabezado-tarjeta">
            <h3>Personalización de Texto</h3>
            <p>Ajusta la presentación del texto según tus necesidades</p>
          </div>
          <div className="cuerpo-tarjeta">
            <div className="grupo-formulario">
              <label htmlFor="tamano-fuente">Tamaño de Fuente: {preferencias.tamanoFuente}px</label>
              <input
                type="range"
                id="tamano-fuente"
                min="12"
                max="24"
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

            <div className="grupo-formulario">
              <label>Espaciado entre líneas</label>
              <div className="grupo-botones">
                {[
                  { valor: 'compacto', etiqueta: 'Compacto' },
                  { valor: 'normal', etiqueta: 'Normal' },
                  { valor: 'amplio', etiqueta: 'Amplio' }
                ].map(opcion => (
                  <button
                    key={opcion.valor}
                    className={`boton-opcion ${preferencias.espaciadoTexto === opcion.valor ? 'activo' : ''}`}
                    onClick={() => manejarCambioPreferencia('espaciadoTexto', opcion.valor)}
                  >
                    {opcion.etiqueta}
                  </button>
                ))}
              </div>
            </div>

            <div className="grupo-interruptor">
              <div className="texto">
                <label htmlFor="fuente-legible">Fuente Legible</label>
                <p className="descripcion">Usar una fuente más fácil de leer</p>
              </div>
              <label className="interruptor">
                <input
                  type="checkbox"
                  id="fuente-legible"
                  checked={preferencias.fuenteLegible}
                  onChange={(e) => manejarCambioPreferencia('fuenteLegible', e.target.checked)}
                />
                <span className="deslizador redondo"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="tarjeta">
          <div className="encabezado-tarjeta">
            <h3>Opciones Avanzadas</h3>
            <p>Configuraciones adicionales de accesibilidad</p>
          </div>
          <div className="cuerpo-tarjeta">
            <div className="grupo-interruptor">
              <div className="texto">
                <label htmlFor="alto-contraste-inputs">Alto Contraste en Formularios</label>
                <p className="descripcion">Mejora la visibilidad de los campos de formulario</p>
              </div>
              <label className="interruptor">
                <input
                  type="checkbox"
                  id="alto-contraste-inputs"
                  checked={preferencias.altoContrasteInputs}
                  onChange={(e) => manejarCambioPreferencia('altoContrasteInputs', e.target.checked)}
                />
                <span className="deslizador redondo"></span>
              </label>
            </div>

            <div className="grupo-interruptor">
              <div className="texto">
                <label htmlFor="resaltar-enlaces">Resaltar Enlaces</label>
                <p className="descripcion">Hacer que los enlaces sean más visibles</p>
              </div>
              <label className="interruptor">
                <input
                  type="checkbox"
                  id="resaltar-enlaces"
                  checked={preferencias.resaltarEnlaces}
                  onChange={(e) => manejarCambioPreferencia('resaltarEnlaces', e.target.checked)}
                />
                <span className="deslizador redondo"></span>
              </label>
            </div>

            <div className="grupo-interruptor">
              <div className="texto">
                <label htmlFor="ocultar-animaciones">Ocultar Todas las Animaciones</label>
                <p className="descripcion">Desactiva todas las animaciones en el sitio</p>
              </div>
              <label className="interruptor">
                <input
                  type="checkbox"
                  id="ocultar-animaciones"
                  checked={preferencias.ocultarAnimaciones}
                  onChange={(e) => manejarCambioPreferencia('ocultarAnimaciones', e.target.checked)}
                />
                <span className="deslizador redondo"></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="acciones">
        <button 
          className="boton boton-secundario"
          onClick={() => {
            const valoresPorDefecto = {
              altoContraste: false,
              reducirMovimiento: false,
              textoAVoz: false,
              tamanoFuente: 16,
              espaciadoTexto: 'normal',
              fuenteLegible: false,
              altoContrasteInputs: false,
              resaltarEnlaces: true,
              ocultarAnimaciones: false
            };
            setPreferencias(valoresPorDefecto);
            updateSession({
              ...session,
              preferenciasAccesibilidad: valoresPorDefecto
            });
          }}
        >
          Restablecer Valores
        </button>
        <button 
          className="boton boton-primario"
          onClick={() => {
            console.log('Preferencias de accesibilidad guardadas', preferencias);
          }}
        >
          Guardar Cambios
        </button>
      </div>
    </div>
  );
};

export default AccesibilidadData;
