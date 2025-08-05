import React, { useState } from 'react';
import '../styles/Account.css';
import useSessionStore from '../store/sessionStore';
import useCatalogStore from '../store/catalogStore';
import { useFetchWithSession } from '../store/fetchWithSession';

const Account = () => {
    const { session, setSession } = useSessionStore();
    const { catalog } = useCatalogStore();
    const fetchWithSession = useFetchWithSession();

    const [formData, setFormData] = useState({
        correoPersonal: session.CORREO_PERSONAL || '',
        telefono: session.TELEFONO || '',
        direccion: session.DIRECCION || '',
        contactoEmergenciaNombre: session.CONTACTO_EMERGENCIA_NOMBRE || '',
        contactoEmergenciaTelefono: session.CONTACTO_EMERGENCIA_TELEFONO || ''
    });

    const [location, setLocation] = useState({
        latitud: session.LATITUD || null,
        longitud: session.LONGITUD || null,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [locationError, setLocationError] = useState(null);


    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [id]: value
        }));
    };

    const handleGetLocation = () => {
        if (!("geolocation" in navigator)) {
            alert('La geolocalización no está disponible en tu navegador.');
            return;
        }

        setIsLoading(true);
        setLocationError(null);

        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitud: latitude, longitud: longitude });
                setIsLoading(false);
                alert('Ubicación obtenida con éxito.');
            },
            (error) => {
                setIsLoading(false);
                let errorMessage = 'Error al obtener la ubicación. Por favor, asegúrate de haber dado permiso.';
                if (error.code === error.PERMISSION_DENIED) {
                    errorMessage = 'Has denegado el permiso de geolocalización.';
                } else if (error.code === error.TIMEOUT) {
                    errorMessage = 'Se ha agotado el tiempo de espera para obtener la ubicación.';
                }
                setLocationError(errorMessage);
                alert(errorMessage);
            },
            options
        );
    };

  
    const handleSaveChanges = async (e) => {
        e.preventDefault();
        try {
           
            const dataToSave = {
                ...formData,
                latitud: location.latitud,
                longitud: location.longitud
            };

            const updatedUser = await fetchWithSession('/api/user/update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSave),
            });

            if (updatedUser) {
                setSession({ ...session, ...updatedUser });
                alert('¡Información actualizada con éxito!');
            }
        } catch (error) {
            console.error('Error al guardar los cambios:', error);
            alert('Hubo un error al actualizar la información.');
        }
    };
    
   
    const handleCancel = () => {
        setFormData({
            correoPersonal: session.CORREO_PERSONAL || '',
            telefono: session.TELEFONO || '',
            direccion: session.DIRECCION || '',
            contactoEmergenciaNombre: session.CONTACTO_EMERGENCIA_NOMBRE || '',
            contactoEmergenciaTelefono: session.CONTACTO_EMERGENCIA_TELEFONO || ''
        });
        setLocation({
            latitud: session.LATITUD || null,
            longitud: session.LONGITUD || null,
        });
        setLocationError(null);
    };

    return (
        <div className="account-container">
            <div className="account-main-content">
                <div className="card personal-info-card">
                    <div className="card-header">
                        <h3>Información Personal</h3>
                        <p>Actualiza tu información personal y datos de contacto</p>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre Del Usuario</label>
                            <input type="text" id="nombre" value={session.USUARIO_ID} readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="correo-institucional">Correo Del Usuario</label>
                            <input type="email" id="correo-institucional" value={session.CORREO_INSTITUCIONAL} readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="correo-personal">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                value=""
                                placeholder='***********'
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefono">Teléfono</label>
                            <input
                                type="tel"
                                id="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Ubicación Actual</label>
                                <button
                                    type="button"
                                    onClick={handleGetLocation}
                                    disabled={isLoading}
                                    className="get-location-button"
                                >
                                    {isLoading ? 'Obteniendo...' : 'Obtener Ubicación'}
                                </button>
                                {location.latitud && (
                                    <p className="location-info">
                                        Latitud: {location.latitud.toFixed(6)}, Longitud: {location.longitud.toFixed(6)}
                                    </p>
                                )}
                                {locationError && <p className="location-error-message">{locationError}</p>}
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
                <button className="cancel-button" onClick={handleCancel}>Cancelar</button>
                <button className="save-changes-button" onClick={handleSaveChanges}>Guardar Cambios</button>
            </div>
        </div>
    );
};

export default Account;