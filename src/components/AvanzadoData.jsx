import React from 'react';
import '../styles/AvanzadoData.css';

const AvanzadoData = () => {
    return (
        <div className="advanced-settings-container">
            <div className="advanced-settings-main-content">
                <div className="left-column">
                    <div className="card connection-sync-card">
                        <div className="card-header">
                            <h3>Conexión y Sincronización</h3>
                            <p>Configura opciones avanzadas de conexión</p>
                        </div>
                        <div className="card-body">
                            <div className="toggle-group">
                                <label htmlFor="offline-mode">Modo Offline</label>
                                <p className="toggle-description">Permitir acceso a contenido sin conexión</p>
                                <label className="switch">
                                    <input type="checkbox" id="offline-mode" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div className="toggle-group">
                                <label htmlFor="automatic-sync">Sincronización Automática</label>
                                <p className="toggle-description">Sincronizar datos automáticamente</p>
                                <label className="switch">
                                    <input type="checkbox" id="automatic-sync" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="sync-frequency">Frecuencia de Sincronización</label>
                                <select id="sync-frequency" name="sync-frequency" defaultValue="Cada 15 minutos">
                                    <option value="Cada 5 minutos">Cada 5 minutos</option>
                                    <option value="Cada 15 minutos">Cada 15 minutos</option>
                                    <option value="Cada 30 minutos">Cada 30 minutos</option>
                                    <option value="Cada hora">Cada hora</option>
                                    <option value="Manualmente">Manualmente</option>
                                </select>
                            </div>
                            <div className="toggle-group last-toggle">
                                <label htmlFor="sync-mobile-data">Sincronizar en Datos Móviles</label>
                                <p className="toggle-description">Permitir sincronización usando datos móviles</p>
                                <label className="switch">
                                    <input type="checkbox" id="sync-mobile-data" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <button className="action-button sync-now-button">
                                <span className="material-icons">refresh</span>
                                Sincronizar Ahora
                            </button>
                        </div>
                    </div>
                </div>
                <div className="right-column">
                    <div className="card advanced-options-card">
                        <div className="card-header">
                            <h3>Opciones Avanzadas</h3>
                            <p>Configuraciones técnicas y avanzadas</p>
                        </div>
                        <div className="card-body">
                            <div className="toggle-group">
                                <label htmlFor="browser-cache">Caché del Navegador</label>
                                <p className="toggle-description">Almacenar datos para carga rápida</p>
                                <label className="switch">
                                    <input type="checkbox" id="browser-cache" defaultChecked />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div className="toggle-group">
                                <label htmlFor="debug-notifications">Notificaciones de Depuración</label>
                                <p className="toggle-description">Mostrar mensajes técnicos</p>
                                <label className="switch">
                                    <input type="checkbox" id="debug-notifications" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div className="toggle-group last-toggle">
                                <label htmlFor="developer-mode">Modo Desarrollador</label>
                                <p className="toggle-description">Habilitar herramientas de desarrollo</p>
                                <label className="switch">
                                    <input type="checkbox" id="developer-mode" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div className="export-data-section">
                                <h4>Exportar Datos</h4>
                                <div className="export-buttons">
                                    <button className="action-button export-button">
                                        <span className="material-icons">download</span>
                                        Calendario
                                    </button>
                                    <button className="action-button export-button">
                                        <span className="material-icons">download</span>
                                        Calificaciones
                                    </button>
                                </div>
                            </div>
                            <button className="action-button clear-data-button">
                                <span className="material-icons">delete</span>
                                Limpiar Datos Locales
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="system-info-card">
                <div className="card-header">
                    <h3>Información del Sistema</h3>
                    <p>Detalles técnicos de la plataforma</p>
                </div>
                <div className="card-body system-info-body">
                    <p>Versión: <span>3.5.2</span></p>
                    <p>Última Actualización: <span>15/05/2023</span></p>
                    <p>Navegador: <span>Chrome 112.0.5615.138</span></p>
                    <p>Sistema Operativo: <span>Windows 11</span></p>
                    <button className="action-button update-button">
                        <span className="material-icons">sync</span>
                        Buscar Actualizaciones
                    </button>
                </div>
            </div>
            <div className="advanced-actions">
                <button className="btn cancel-btn">Cancelar</button>
                <button className="btn save-btn">Guardar Cambios</button>
            </div>
        </div>
    );
};

export default AvanzadoData;
