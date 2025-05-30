import "../styles/TareasData.css";

const TareasData = () => {
    const allTareas = [
        { id: 1, subject: "Matemáticas", task: "Guía de ejercicios 3.1", dueDate: "25/05/2025", status: "Pendiente" },
        { id: 2, subject: "Física", task: "Pre-informe de laboratorio N°2", dueDate: "28/05/2025", status: "No entregada" },
        { id: 3, subject: "Español", task: "Análisis literario: 'La Vorágine'", dueDate: "01/06/2025", status: "Entregada" },
        { id: 4, subject: "Inglés", task: "Redacción: 'My future plans'", dueDate: "03/06/2025", status: "Pendiente" },
        { id: 5, subject: "Química", task: "Tabla periódica interactiva", dueDate: "05/06/2025", status: "Entregada" },
        { id: 6, subject: "Dibujo", task: "Boceto de perspectiva cónica", dueDate: "07/06/2025", status: "No entregada" },
        { id: 7, subject: "Historia", task: "Ensayo sobre la Revolución Francesa", dueDate: "20/05/2025", status: "Entregada" },
        { id: 8, subject: "Biología", task: "Informe de práctica de laboratorio", dueDate: "30/05/2025", status: "Pendiente" },
        { id: 9, subject: "Literatura", task: "Resumen de 'Cien años de soledad'", dueDate: "02/06/2025", status: "No entregada" },
    ];

    const sortedTareas = [...allTareas].sort((a, b) => {
        const [dayA, monthA, yearA] = a.dueDate.split('/').map(Number);
        const [dayB, monthB, yearB] = b.dueDate.split('/').map(Number);
        const dateA = new Date(yearA, monthA - 1, dayA);
        const dateB = new Date(yearB, monthB - 1, dayB);
        return dateA - dateB;
    });

    return (
        <article className="pending-tasks-card" id="pending-tasks-section-container">
            <h3>Planificación de Tareas</h3>
            {sortedTareas.length > 0 ? (
                <ul className="pending-tasks-list">
                    {sortedTareas.map((task) => (
                        <li key={task.id} className={`task-item status-${task.status.toLowerCase().replace(/\s/g, '-')}`}>
                            <div className="task-info">
                                <span className="task-subject">{task.subject}:</span>{" "}
                                <span className="task-description">{task.task}</span>
                                <span className="task-due-date"> (Entrega: {task.dueDate})</span>
                            </div>
                            <div className="task-status-container">
                                <span className={`task-status task-status-${task.status.toLowerCase().replace(/\s/g, '-')}`}>
                                    {task.status}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="no-tasks-message">¡Felicidades! No tienes tareas en la planificación.</p>
            )}
        </article>
    );
};

export default TareasData;
