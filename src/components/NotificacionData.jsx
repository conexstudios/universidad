import '../styles/NotificacionData.css'; 

const NotificationData = () => {
    return (
        <div className="notification-data-container">
            <div className="notification-data-main-content">

                <div className="card notification-channels-card">
                    <div className="card-header">
                        <h3>Canales de Notificación</h3>
                        <p>Configura cómo quieres recibir tus notificaciones</p>
                    </div>
                    <div className="card-body">
                        <div className="notification-item">
                            <div className="notification-icon-text">
                                <div className="text-content">
                                    <label htmlFor="email-notifications">Correo Electrónico</label>
                                    <p className="email-address">ana.gonzalez@universidad.edu</p>
                                </div>
                            </div>
                            <label className="switch">
                                <input type="checkbox" id="email-notifications" defaultChecked />
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
                                <input type="checkbox" id="push-notifications" defaultChecked />
                                <span className="slider round"></span>
                            </label>
                        </div>

                        <div className="notification-item">
                            <div className="notification-icon-text">
                                <div className="text-content">
                                    <label htmlFor="sms-notifications">SMS</label>
                                    <p className="phone-number">+52 555 987 6543</p>
                                </div>
                            </div>
                            <label className="switch">
                                <input type="checkbox" id="sms-notifications" />
                                <span className="slider round"></span>
                            </label>
                        </div>

                        <div className="form-group frequency-group">
                            <label htmlFor="email-summary-frequency">Frecuencia de Resumen por Email</label>
                            <select id="email-summary-frequency" name="email-summary-frequency" defaultValue="Resumen Diario">
                                <option value="Resumen Diario">Resumen Diario</option>
                                <option value="Resumen Semanal">Resumen Semanal</option>
                                <option value="Sin Resumen">Sin Resumen</option>
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
                        <div className="toggle-group notification-type-item">
                            <label htmlFor="academic-types">Académicas</label>
                            <p className="toggle-description">Calificaciones, tareas y fechas límite</p>
                            <label className="switch">
                                <input type="checkbox" id="academic-types" defaultChecked />
                                <span className="slider round"></span>
                            </label>
                        </div>

                        <div className="toggle-group notification-type-item">
                            <label htmlFor="social-types">Sociales</label>
                            <p className="toggle-description">Eventos, grupos y actividades extracurriculares</p>
                            <label className="switch">
                                <input type="checkbox" id="social-types" defaultChecked />
                                <span className="slider round"></span>
                            </label>
                        </div>

                        <div className="toggle-group notification-type-item">
                            <label htmlFor="library-types">Biblioteca</label>
                            <p className="toggle-description">Préstamos, devoluciones y disponibilidad</p>
                            <label className="switch">
                                <input type="checkbox" id="library-types" />
                                <span className="slider round"></span>
                            </label>
                        </div>

                        <div className="toggle-group notification-type-item">
                            <label htmlFor="financial-types">Financieras</label>
                            <p className="toggle-description">Pagos, becas y vencimientos</p>
                            <label className="switch">
                                <input type="checkbox" id="financial-types" defaultChecked />
                                <span className="slider round"></span>
                            </label>
                        </div>

                        <h4 className="do-not-disturb-title">Horario de No Molestar</h4>
                        <div className="do-not-disturb-times">
                            <div className="time-input-group">
                                <label htmlFor="dnd-from">Desde</label>
                                <div className="time-input-wrapper">
                                    <input type="text" id="dnd-from" defaultValue="10:00 PM" readOnly />
                                </div>
                            </div>
                            <div className="time-input-group">
                                <label htmlFor="dnd-to">Hasta</label>
                                <div className="time-input-wrapper">
                                    <input type="text" id="dnd-to" defaultValue="08:00 AM" readOnly />
                                </div>
                            </div>
                        </div>
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

export default NotificationData;
