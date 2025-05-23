import React from "react";
// It's good practice to have a specific CSS file for this component if its styles are unique.
// If you want to reuse styles from a different file, adjust the path accordingly.
import "../styles/TareasData.css"; // This CSS will style the task list.

const TareasData = () => {
    const tareas = [
        { id: 1, subject: "Matemáticas", task: "Guía de ejercicios 3.1", dueDate: "25/05/2025" },
        { id: 2, subject: "Física", task: "Pre-informe de laboratorio N°2", dueDate: "28/05/2025" },
        { id: 3, subject: "Español", task: "Análisis literario: 'La Vorágine'", dueDate: "01/06/2025" },
        { id: 4, subject: "Inglés", task: "Redacción: 'My future plans'", dueDate: "03/06/2025" },
        { id: 5, subject: "Química", task: "Tabla periódica interactiva", dueDate: "05/06/2025" },
        { id: 6, subject: "Dibujo", task: "Boceto de perspectiva cónica", dueDate: "07/06/2025" },
    ];

    return (
        <article
            className="pending-tasks-card" // Renamed from "Tareas" to be more descriptive
            id="pending-tasks-section-container"
        >
            <h3>Tareas Pendientes</h3>
            {tareas.length > 0 ? (
                <ul className="pending-tasks-list"> {/* Renamed from "Tareas" */}
                    {tareas.map((task) => (
                        <li key={task.id} className="task-item"> {/* Renamed from "Tareas" */}
                            <span className="task-subject">{task.subject}:</span>{" "}
                            <span className="task-description">{task.task}</span>
                            <span className="task-due-date"> (Entrega: {task.dueDate})</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="no-tasks-message">¡Felicidades! No tienes tareas pendientes.</p> // Renamed from "Tareas"
            )}
        </article>
    );
};

export default TareasData;