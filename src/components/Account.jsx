import React from 'react';
import '../styles/Account.css';

const Account = () => {
    return (
        <div className="account-container">
            <div className="account-main-content">
                <div className="card personal-info-card">
                    <div className="card-header">
                        <h3>Información Personal</h3>
                        <p>Actualiza tu información personal y datos de contacto</p>
                    </div>
                    <div className="card-body">
                        <div className="user-profile-summary">
                            <div className="user-avatar"></div>
                            <div className="user-details-text">
                                <h4>Ana María González</h4>
                                <p>Licenciatura en Psicología</p>
                                <div className="user-meta">
                                    <span>6to Semestre</span>
                                    <span>Matricula: 2021050789</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre(s)</label>
                                <input type="text" id="nombre" value="Ana Maria" readOnly />
                            </div>
                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" id="apellidos" value="González Rodríguez" readOnly />
                            </div>
                            <div className="form-group">
                                <label htmlFor="correo-institucional">Correo Institucional</label>
                                <input type="email" id="correo-institucional" value="ana.gonzalez@universidad.edu" readOnly />
                            </div>
                            <div className="form-group">
                                <label htmlFor="correo-personal">Correo Personal</label>
                                <input type="email" id="correo-personal" value="ana.glez@gmail.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="telefono">Teléfono</label>
                                <input type="tel" id="telefono" value="+52 555 987 6543" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fecha-nacimiento">Fecha de Nacimiento</label>
                                <input type="text" id="fecha-nacimiento" value="05/15/1999" readOnly />
                            </div>
                            <div className="form-group full-width">
                                <label htmlFor="direccion">Dirección</label>
                                <input type="text" id="direccion" value="Calle Estudiantes 456, Col. Universidad, Ciudad de Venezuela, CP 04500" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contacto-emergencia-nombre">Contacto de Emergencia</label>
                                <input type="text" id="contacto-emergencia-nombre" value="Roberto González (Padre)" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contacto-emergencia-telefono">Teléfono de Emergencia</label>
                                <input type="tel" id="contacto-emergencia-telefono" value="+52 555 123 4567" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card account-security-card">
                    <div className="card-header">
                        <h3>Seguridad de la Cuenta</h3>
                        <p>Administra la seguridad y acceso a tu cuenta universitaria</p>
                    </div>
                    <div className="card-body">
                        <ul className="security-options-list">
                            <li>
                                <button className="security-option-button">
                                    <span>Cambiar Contraseña</span>
                                </button>
                            </li>
                            <li>
                                <button className="security-option-button">
                                    <span>Configurar Autenticación de Dos Factores</span>
                                </button>
                            </li>
                            <li>
                                <button className="security-option-button">
                                    <span>Dispositivos Conectados</span>
                                </button>
                            </li>
                        </ul>

                        <div className="access-history">
                            <h4>Historial de Acceso</h4>
                            <ul>
                                <li>
                                    <span>Hoy, 10:30 AM</span>
                                    <span>Valencia</span>
                                </li>
                                <li>
                                    <span>Ayer, 3:45 PM</span>
                                    <span>Valencia</span>
                                </li>
                                <li>
                                    <span>15/05/2023, 8:20 AM</span>
                                    <span>Guacara</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card danger-zone-card">
                    <div className="card-header">
                        <h3><span className="danger-icon"></span> Zona de Peligro</h3>
                        <p>Acciones que pueden afectar permanentemente tu cuenta</p>
                    </div>
                    <div className="card-body">
                        <ul className="danger-options-list">
                            <li>
                                <button className="danger-option-button">
                                    <span>Descargar Mis Datos</span>
                                </button>
                            </li>
                            <li>
                                <button className="danger-option-button">
                                    <span>Cerrar Sesión en Todos los Dispositivos</span>
                                </button>
                            </li>
                            <li>
                                <button className="danger-option-button delete-account-button">
                                    <span>Solicitar Baja Temporal</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="account-footer-actions">
                <button className="cancel-button">Cancelar</button>
                <button className="save-changes-button">Guardar Cambios</button>
            </div>
        </div>
    );
};

export default Account;
