import '../styles/AparienciaData.css';

const AparienciaData = () => {
    return (
        <div className="appearance-settings-container">
            <div className="appearance-settings-main-content">

                <div className="left-column">
                    <div className="card theme-visualization-card">
                        <div className="card-header">
                            <h3>Tema y Visualización</h3>
                            <p>Personaliza la apariencia de tu portal universitario</p>
                        </div>
                        <div className="card-body">
                            <div className="setting-group">
                                <label>Tema</label>
                                <div className="button-group theme-options">
                                    <button className="btn-option selected">Claro</button>
                                    <button className="btn-option">Oscuro</button>
                                    <button className="btn-option">Sistema</button>
                                </div>
                            </div>
                            <div className="setting-group">
                                <label>Color Principal</label>
                                <div className="color-swatches">
                                    <div className="color-swatch blue selected"></div>
                                    <div className="color-swatch purple"></div>
                                    <div className="color-swatch green"></div>
                                    <div className="color-swatch red"></div>
                                    <div className="color-swatch orange"></div>
                                    <div className="color-swatch teal"></div>
                                </div>
                            </div>
                            <div className="setting-group">
                                <label>Densidad de Contenido</label>
                                <div className="button-group content-density-options">
                                    <button className="btn-option">Compacta</button>
                                    <button className="btn-option selected">Normal</button>
                                    <button className="btn-option">Cómoda</button>
                                </div>
                            </div>
                            <div className="setting-group">
                                <label>Tamaño de Fuente</label>
                                <div className="button-group font-size-options">
                                    <button className="btn-option">XS</button>
                                    <button className="btn-option">S</button>
                                    <button className="btn-option selected">M</button>
                                    <button className="btn-option">L</button>
                                    <button className="btn-option">XL</button>
                                </div>
                            </div>
                            <div className="toggle-group animations-toggle">
                                <label htmlFor="animations-enabled">Animaciones</label>
                                <p className="toggle-description">Mostrar animaciones en la interfaz</p>
                                <label className="switch">
                                    <input type="checkbox" id="animations-enabled" defaultChecked />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right-column">
                    <div className="card language-region-card">
                        <div className="card-header">
                            <h3>Idioma y Región</h3>
                            <p>Configura tus preferencias de idioma y formato</p>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="language">Idioma</label>
                                <select id="language" name="language" defaultValue="Español">
                                    <option value="Español">Español</option>
                                    <option value="Inglés">Inglés</option>
                                    <option value="Francés">Francés</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="region">Región</label>
                                <select id="region" name="region" defaultValue="México">
                                    <option value="México">México</option>
                                    <option value="España">España</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Estados Unidos">Estados Unidos</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="date-format">Formato de Fecha</label>
                                <select id="date-format" name="date-format" defaultValue="DD/MM/AAAA">
                                    <option value="DD/MM/AAAA">DD/MM/AAAA</option>
                                    <option value="MM/DD/AAAA">MM/DD/AAAA</option>
                                    <option value="AAAA-MM-DD">AAAA-MM-DD</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="time-format">Formato de Hora</label>
                                <select id="time-format" name="time-format" defaultValue="12 horas (AM/PM)">
                                    <option value="12 horas (AM/PM)">12 horas (AM/PM)</option>
                                    <option value="24 horas">24 horas</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="card homepage-card">
                        <div className="card-header">
                            <h3>Página de Inicio</h3>
                            <p>Configura qué ver al iniciar sesión</p>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="default-page">Página Predeterminada</label>
                                <select id="default-page" name="default-page" defaultValue="Dashboard">
                                    <option value="Dashboard">Dashboard</option>
                                    <option value="Horario">Horario</option>
                                    <option value="Calificaciones">Calificaciones</option>
                                    <option value="Tareas">Tareas</option>
                                </select>
                            </div>
                            <h4 className="widgets-title">Widgets del Dashboard</h4>
                            <div className="widgets-list">
                                <div className="toggle-group widget-toggle">
                                    <label htmlFor="upcoming-classes">Próximas Clases</label>
                                    <label className="switch">
                                        <input type="checkbox" id="upcoming-classes" defaultChecked />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                                <div className="toggle-group widget-toggle">
                                    <label htmlFor="pending-tasks">Tareas Pendientes</label>
                                    <label className="switch">
                                        <input type="checkbox" id="pending-tasks" defaultChecked />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                                <div className="toggle-group widget-toggle">
                                    <label htmlFor="recent-grades">Calificaciones Recientes</label>
                                    <label className="switch">
                                        <input type="checkbox" id="recent-grades" defaultChecked />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                                <div className="toggle-group widget-toggle">
                                    <label htmlFor="announcements">Anuncios</label>
                                    <label className="switch">
                                        <input type="checkbox" id="announcements" defaultChecked />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                                <div className="toggle-group widget-toggle last-toggle">
                                    <label htmlFor="calendar-widget">Calendario</label>
                                    <label className="switch">
                                        <input type="checkbox" id="calendar-widget" defaultChecked />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="appearance-actions">
                <button className="btn cancel-btn">Cancelar</button>
                <button className="btn save-btn">Guardar Cambios</button>
            </div>
        </div>
    );
};

export default AparienciaData;
