import { useState, useEffect } from 'react';
import '../styles/Mailbox.css';
import useSessionStore from '../store/sessionStore';
import useCatalogStore from '../store/catalogStore';

const Mailbox = () => {
    const catalog = useCatalogStore((state) => state.catalog);
    const session = useSessionStore((state) => state.session);
    const [showComposeForm, setShowComposeForm] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = import.meta.env.VITE_API_URL;
    useEffect(() => {
        const fetchMessages = async () => {
            if (!session?.NOM_FICHANRO) {
                setError("El número de ficha de la sesión no está disponible.");
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);
                
                const url = `${API_URL}/nominas?NOM_FICHANRO=${session.NOM_FICHANRO}`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Failed to fetch messages: ${response.status} ${response.statusText}`);
                }
                
                const data = await response.json();
             
                if (!Array.isArray(data)) {
                    throw new Error("El formato de datos de la API no es válido.");
                }

             
                const sorted = [...data].sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
                
                setMessages(sorted);
                if (sorted.length > 0) {
                    setSelectedMessage(sorted[0]);
                }
            } catch (err) {
                console.error("Error al cargar los mensajes:", err);
                setError(`Error al cargar los mensajes: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, [session?.NOM_FICHANRO, API_URL]);

    const handleSelectMessage = (message) => {
        setSelectedMessage(message);
    };

    const handleComposeClick = () => {
        setShowComposeForm(true);
    };

    const handleCloseComposeForm = () => {
        setShowComposeForm(false);
    };
    
    const handleSendMessage = () => {
        alert("Mensaje enviado (funcionalidad de envío real aún no implementada)");
        setShowComposeForm(false);
    };

    const formatDateTime = (isoString) => {
        if (!isoString) return 'Fecha no disponible';
        const date = new Date(isoString);
        if (isNaN(date.getTime())) return 'Fecha inválida';
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };
        return date.toLocaleString('es-ES', options);
    };

    if (loading) {
        return (
            <div className="mailbox-container">
                <p>Cargando mensajes...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="mailbox-container">
                <p className="error-message">{error}</p>
            </div>
        );
    }
    
    return (
        <div className="mailbox-container">
            <h1>Mensajería</h1>
            <div className="mailbox-header">
                <button className="mail-button">Correo</button>
                <button className="mail-button">Telegram</button>
                <button className="mail-button">Whatsapp</button>
            </div>
            <div className="mailbox-content">
                <div className="mailbox-sidebar">
                    <div className="filters">
                        <select>
                            <option>Buscar Curso</option>
                        </select>
                        <select>
                            <option>Bandeja de Entrada</option>
                        </select>
                        <input type="text" placeholder="Buscar Mensaje por texto" />
                        <button className="compose-button" onClick={handleComposeClick}>Redactar</button>
                    </div>
                    <ul className="message-list">
                        {messages.length > 0 ? (
                            messages.map((message) => (
                                <li
                                    key={message.id}
                                    className={`message-item ${selectedMessage && selectedMessage.id === message.id ? 'selected' : ''}`}
                                    onClick={() => handleSelectMessage(message)} 
                                >
                                    <div className="message-avatar">👤</div>
                                    <div>
                                        <p className="message-title">{message.title}</p>
                                        <p className="message-time">{formatDateTime(message.dateTime)}</p>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <li className="no-messages">No hay mensajes.</li>
                        )}
                    </ul>
                </div>
                <div className="mailbox-details">
                    {selectedMessage ? ( 
                        <>
                            <h2>{selectedMessage.title}</h2>
                            <p>De: {selectedMessage.sender}</p>
                            <p>Recibido: {formatDateTime(selectedMessage.dateTime)}</p>
                            <button className="reply-button">RESPONDER</button>
                            <div className="message-content">
                                <p>{selectedMessage.content}</p>
                                {selectedMessage.reply && (
                                    <p className="reply">
                                        RE: {selectedMessage.title} (Recibido: {formatDateTime(selectedMessage.dateTime)})<br />
                                        {selectedMessage.reply}<br />
                                        Autor: {selectedMessage.author}
                                    </p>
                                )}
                            </div>
                        </>
                    ) : (
                        <p className="no-message-selected">Selecciona un mensaje para ver los detalles.</p>
                    )}
                </div>
            </div>

            {showComposeForm && (
                <div className="compose-message-window">
                    <div className="compose-header">
                        <span>Nuevo Mensaje</span>
                        <div className="compose-controls">
                            <button className="close-compose-button" onClick={handleCloseComposeForm}>✕</button>
                        </div>
                    </div>
                    <div className="compose-body">
                        <div className="compose-recipient">
                            <label htmlFor="compose-to">Para</label>
                            <input type="text" id="compose-to" placeholder="" />
                            <div className="cc-bcc">
                                <span>Cc</span>
                                <span>Bcc</span>
                            </div>
                        </div>
                        <div className="compose-subject">
                            <label htmlFor="compose-subject">Asunto</label>
                            <input type="text" id="compose-subject" placeholder="" />
                        </div>
                        <textarea
                            className="compose-content"
                            placeholder=""
                        ></textarea>
                    </div>
                    <div className="compose-footer">
                        <button className="send-button" onClick={handleSendMessage}>Enviar</button>
                        <span className="footer-icon">📎</span> 
                        <span className="footer-icon">💰</span> 
                        <span className="footer-icon">😀</span> 
                        <span className="footer-icon">🗑️</span> 
                    </div>
                </div>
            )}
        </div>
    );
};

export default Mailbox;