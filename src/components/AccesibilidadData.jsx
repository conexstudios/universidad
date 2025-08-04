import '../styles/AccesibilidadData.css';

const AccesibilidadData = () => {
    return (
        <div className="accessibility-settings-container">
            <div className="accessibility-settings-main-content">
                <div className="left-column">
                    <div className="card accessibility-options-card">
                        <div className="card-header">
                            <h3>Opciones de Accesibilidad</h3>
                            <p>Personaliza la experiencia para mejorar la accesibilidad</p>
                        </div>
                        <div className="card-body">
                            <div className="toggle-group">
                                <label htmlFor="high-contrast">Alto Contraste</label>
                                <p className="toggle-description">Aumentar el contraste de colores</p>
                                <label className="switch">
                                    <input type="checkbox" id="high-contrast" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div className="toggle-group">
                                <label htmlFor="reduce-motion">Reducir Movimiento</label>
                                <p className="toggle-description">Minimizar animaciones y transiciones</p>
                                <label className="switch">
                                    <input type="checkbox" id="reduce-motion" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div className="toggle-group">
                                <label htmlFor="text-to-speech">Texto a Voz</label>
                                <p className="toggle-description">Habilitar lectura de contenido</p>
                                <label className="switch">
                                    <input type="checkbox" id="text-to-speech" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div className="setting-group">
                                <label>Tamaño de Cursor</label>
                                <div className="button-group cursor-size-options">
                                    <button className="btn-option">Normal</button>
                                    <button className="btn-option selected">Grande</button>
                                    <button className="btn-option">Extra Grande</button>
                                </div>
                            </div>
                            <div className="setting-group">
                                <label>Espaciado de Texto</label>
                                <div className="button-group text-spacing-options">
                                    <button className="btn-option">Normal</button>
                                    <button className="btn-option selected">Amplio</button>
                                    <button className="btn-option">Máximo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-column">
                    <div className="card audio-settings-card">
                        <div className="card-header">
                            <h3>Configuración de Audio</h3>
                            <p>Personaliza la experiencia auditiva</p>
                        </div>
                        <div className="card-body">
                            <div className="toggle-group">
                                <label htmlFor="system-sounds">Sonidos del Sistema</label>
                                <p className="toggle-description">Reproducir sonidos en interacciones</p>
                                <label className="switch">
                                    <input type="checkbox" id="system-sounds" defaultChecked />
                                </label>
                            </div>
                            <div className="toggle-group">
                                <label htmlFor="audible-notifications">Notificaciones Sonoras</label>
                                <p className="toggle-description">Alertas audibles para notificaciones</p>
                                <label className="switch">
                                    <input type="checkbox" id="audible-notifications" defaultChecked />
                                </label>
                            </div>
                            <div className="setting-group volume-slider-group">
                                <label htmlFor="volume-slider">Volumen</label>
                                <div className="slider-container">
                                    <input type="range" id="volume-slider" min="0" max="100" defaultValue="50" className="volume-slider" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="voice-speed">Velocidad de Voz</label>
                                <select id="voice-speed" name="voice-speed" defaultValue="Normal">
                                    <option value="Lenta">Lenta</option>
                                    <option value="Normal">Normal</option>
                                    <option value="Rápida">Rápida</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="card reading-assistance-card">
                        <div className="card-header">
                            <h3>Asistencia de Lectura</h3>
                            <p>Herramientas para facilitar la lectura</p>
                        </div>
                        <div className="card-body">
                            <div className="toggle-group">
                                <label htmlFor="highlight-text">Resaltar Texto al Leer</label>
                                <p className="toggle-description">Resaltar texto mientras se lee</p>
                                <label className="switch">
                                    <input type="checkbox" id="highlight-text" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div className="toggle-group">
                                <label htmlFor="reading-guide">Guía de Lectura</label>
                                <p className="toggle-description">Mostrar una línea guía al leer</p>
                                <label className="switch">
                                    <input type="checkbox" id="reading-guide" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div className="toggle-group last-toggle">
                                <label htmlFor="dyslexia-font">Fuente para Dislexia</label>
                                <p className="toggle-description">Usar fuente especial para dislexia</p>
                                <label className="switch">
                                    <input type="checkbox" id="dyslexia-font" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accessibility-actions">
                <button className="btn cancel-btn">Cancelar</button>
                <button className="btn save-btn">Guardar Cambios</button>
            </div>
        </div>
    );
};

export default AccesibilidadData;
