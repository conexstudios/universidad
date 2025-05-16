import React from 'react';
import '../styles/Mailbox.css';

const Mailbox = () => {
  const messages = [
    { id: 1, title: "Dudas sobre el análisis DAFO", time: "Hace 200 días", sender: "LUIS MARIO RIVAS HERNÁNDEZ", date: "18/09/2023 4:57:17 PM", content: "Hola, estoy teniendo algunas dudas sobre el análisis DAFO que estamos utilizando en el proyecto. ¿Podemos discutirlas?", reply: "Claro, estaré encantado de ayudarte con tus dudas. ¿Quieres reunirnos en la biblioteca mañana por la tarde?", author: "JAVIER ALEJANDRO NAVA CARRENO" },
    { id: 2, title: "Recopilación de datos de mercado", time: "Hace 200 días" },
    { id: 3, title: "Revisión de la estrategia propuesta", time: "Hace 200 días" },
    { id: 4, title: "Documentación de la investigación", time: "Hace 200 días" },
  ];

  const selectedMessage = messages[0];

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
            {messages.map((message) => (
              <li key={message.id} className="message-item">
                <div className="message-avatar">👤</div>
                <div>
                  <p className="message-title">{message.title}</p>
                  <p className="message-time">{message.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mailbox-details">
          <h2>{selectedMessage.title}</h2>
          <p>De: {selectedMessage.sender}</p>
          <p>Recibido: {selectedMessage.date}</p>
          <button className="reply-button">RESPONDER</button>
          <div className="message-content">
            <p>{selectedMessage.content}</p>
            <p className="reply">
              RE: {selectedMessage.title} ({selectedMessage.time})<br />
              {selectedMessage.reply}<br />
              Autor: {selectedMessage.author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mailbox;