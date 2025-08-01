import { useState } from 'react';
import '../styles/Mailbox.css';
import useSessionStore from '../store/sessionStore';
import useCatalogStore from '../store/catalogStore'; 
const Mailbox = () => {
    const catalog = useCatalogStore((state) => state.catalog);
    const session = useSessionStore((state) => state.session);
    const [showComposeForm, setShowComposeForm] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [messages, setMessages] = useState([]);
    
    const allMessages = [
        { id: 0, title: "Bandeja de Entrada", time: "Hace 200 días", sender: "LUIS MARIO RIVAS HERNÁNDEZ", dateTime: "2023-09-18T16:57:17", content: "Hola, estoy teniendo algunas dudas sobre el análisis DAFO que estamos utilizando en el proyecto. ¿Podemos discutirlas?", reply: "Claro, estaré encantado de ayudarte con tus dudas. ¿Quieres reunirnos en la biblioteca mañana por la tarde?", author: "JAVIER ALEJANDRO NAVA CARRENO" },
        { id: 1, title: "Dudas sobre el análisis DAFO", time: "Hace 200 días", sender: "LUIS MARIO RIVAS HERNÁNDEZ", dateTime: "2023-09-18T16:57:17", content: "Hola, estoy teniendo algunas dudas sobre el análisis DAFO que estamos utilizando en el proyecto. ¿Podemos discutirlas?", reply: "Claro, estaré encantado de ayudarte con tus dudas. ¿Quieres reunirnos en la biblioteca mañana por la tarde?", author: "JAVIER ALEJANDRO NAVA CARRENO" },
        { id: 2, title: "Recopilación de datos de mercado", time: "Hace 200 días", sender: "ANA PEREZ", dateTime: "2023-09-18T10:30:00", content: "Necesito los últimos datos de mercado para el informe trimestral.", reply: null, author: null },
        { id: 3, title: "Revisión de la estrategia propuesta", time: "Hace 200 días", sender: "CARLOS GOMEZ", dateTime: "2023-09-17T09:00:00", content: "Favor revisar la estrategia propuesta para la próxima reunión.", reply: null, author: null },
        { id: 4, title: "Documentación de la investigación", time: "Hace 200 días", sender: "MARIA LOPEZ", dateTime: "2023-09-16T14:15:00", content: "Recordatorio para completar la documentación de la investigación antes del viernes.", reply: null, author: null },
        { id: 5, title: "Actualización de Proyecto X", time: "Hace 2 días", sender: "Equipo de Desarrollo", dateTime: "2025-06-16T11:00:00", content: "Se ha publicado una nueva actualización para el Proyecto X. Favor de revisar los cambios.", reply: null, author: null },
        { id: 6, title: "Recordatorio de Pago de Matrícula", time: "Hace 1 día", sender: "Administración", dateTime: "2025-06-17T09:30:00", content: "Su fecha límite de pago de matrícula se acerca. Por favor, realice el pago a la brevedad.", reply: null, author: null },
        { id: 7, title: "Reunión de Coordinación", time: "Hace 3 horas", sender: "Prof. García", dateTime: "2025-06-18T08:00:00", content: "La reunión de coordinación se realizará hoy a las 2 PM en la sala B.", reply: null, author: null },
        { id: 8, title: "Consulta sobre Tarea Final", time: "Hace 1 hora", sender: "Estudiante Anónimo", dateTime: "2025-06-18T10:00:00", content: "Tengo una duda sobre el formato de entrega de la tarea final de Matemáticas.", reply: null, author: null },
    ];

    const sortedMessages = [...allMessages].sort((a, b) => {
        return new Date(b.dateTime) - new Date(a.dateTime);
    });

    if (!selectedMessage && sortedMessages.length > 0) {
        setSelectedMessage(sortedMessages[0]);
    }

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
        const date = new Date(isoString);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };
        return date.toLocaleString('es-ES', options);
    };

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
                        {sortedMessages.map((message) => (
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
                        ))}
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
