import React from "react";
import "../styles/EvaluacionesData.css";

const EvaluacionesData = () => {
    const evaluaciones = [
        { id: 1, subject: "Matemáticas", evaluationType: "Examen de Unidad 2", dueDate: "30/05/2025" },
        { id: 2, subject: "Física", evaluationType: "Cuestionario Online #3", dueDate: "02/06/2025" },
        { id: 3, subject: "Español", evaluationType: "Exposición Oral: Tema libre", dueDate: "05/06/2025" },
        { id: 4, subject: "Inglés", evaluationType: "Listening Comprehension Test", dueDate: "08/06/2025" },
        { id: 5, subject: "Química", evaluationType: "Laboratorio: Reacciones REDOX", dueDate: "10/06/2025" },
        { id: 6, subject: "Historia", evaluationType: "Control de lectura: Cap. 5", dueDate: "12/06/2025" },
    ];

    return (
        <article
            className="pending-evaluations-card" 
            id="pending-evaluations-section-container"
        >
            <h3>Evaluaciones Pendientes</h3>
            {evaluaciones.length > 0 ? (
                <ul className="pending-evaluations-list"> 
                    {evaluaciones.map((evalItem) => (
                        <li key={evalItem.id} className="evaluation-item"> 
                            <span className="evaluation-subject">{evalItem.subject}:</span>{" "}
                            <span className="evaluation-type">{evalItem.evaluationType}</span>
                            <span className="evaluation-due-date"> (Fecha: {evalItem.dueDate})</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="no-evaluations-message">¡Excelente! No tienes evaluaciones pendientes.</p>
            )}
        </article>
    );
};

export default EvaluacionesData;