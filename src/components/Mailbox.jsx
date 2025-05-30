import React from 'react';
import '../styles/Mailbox.css';

const Mailbox = () => {
  const allMessages = [
{ id: 1, title: "Dudas sobre el análisis DAFO", time: "Hace 200 días", sender: "LUIS MARIO RIVAS HERNÁNDEZ", dateTime: "2023-09-18T16:57:17", content: "Hola, estoy teniendo algunas dudas sobre el análisis DAFO que estamos utilizando en el proyecto. ¿Podemos discutirlas?", reply: "Claro, estaré encantado de ayudarte con tus dudas. ¿Quieres reunirnos en la biblioteca mañana por la tarde?", author: "JAVIER ALEJANDRO NAVA CARRENO" },
{ id: 2, title: "Recopilación de datos de mercado", time: "Hace 200 días", sender: "ANA PEREZ", dateTime: "2023-09-18T10:30:00", content: "Necesito los últimos datos de mercado para el informe trimestral.", reply: null, author: null },
{ id: 3, title: "Revisión de la estrategia propuesta", time: "Hace 200 días", sender: "CARLOS GOMEZ", dateTime: "2023-09-17T09:00:00", content: "Favor revisar la estrategia propuesta para la próxima reunión.", reply: null, author: null },
{ id: 4, title: "Documentación de la investigación", time: "Hace 200 días", sender: "MARIA LOPEZ", dateTime: "2023-09-16T14:15:00", content: "Recordatorio para completar la documentación de la investigación antes del viernes.", reply: null, author: null },

    { id: 5, title: "Actualización de Proyecto X", time: "Hace 2 días", sender: "Equipo de Desarrollo", dateTime: "2025-05-28T11:00:00", content: "Se ha publicado una nueva actualización para el Proyecto X. Favor de revisar los cambios.", reply: null, author: null },
    { id: 6, title: "Recordatorio de Pago de Matrícula", time: "Hace 1 día", sender: "Administración", dateTime: "2025-05-29T09:30:00", content: "Su fecha límite de pago de matrícula se acerca. Por favor, realice el pago a la brevedad.", reply: null, author: null },
    { id: 7, title: "Reunión de Coordinación", time: "Hace 3 horas", sender: "Prof. García", dateTime: "2025-05-30T13:00:00", content: "La reunión de coordinación se realizará hoy a las 2 PM en la sala B.", reply: null, author: null },
    { id: 8, title: "Consulta sobre Tarea Final", time: "Hace 1 hora", sender: "Estudiante Anónimo", dateTime: "2025-05-30T15:00:00", content: "Tengo una duda sobre el formato de entrega de la tarea final de Matemáticas.", reply: null, author: null },
 ];


 const sortedMessages = [...allMessages].sort((a, b) => {
return new Date(b.dateTime) - new Date(a.dateTime);
 });

const selectedMessage = sortedMessages[0]; 

  
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
<button className="compose-button">Redactar</button>
</div>
<ul className="message-list">
{sortedMessages.map((message) => ( 
<li key={message.id} className="message-item">
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
</div>
</div>
</div>
);
};

export default Mailbox;