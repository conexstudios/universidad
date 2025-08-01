import React from "react";
import "../styles/EvaluacionesData.css";
import { useState, useEffect } from 'react';
import useSessionStore from '../store/sessionStore';
import useCatalogStore from '../store/catalogStore'; 

const EvaluacionesData = () => {
    const session = useSessionStore((state) => state.session);
    const [evaluaciones, setEvaluaciones] = useState([
        { id: 1, subject: "Matemáticas", evaluationType: "Examen de Unidad 2", dueDate: "30/05/2025" },
        { id: 2, subject: "Física", evaluationType: "Cuestionario Online #3", dueDate: "02/06/2025" },
        { id: 3, subject: "Español", evaluationType: "Exposición Oral: Tema libre", dueDate: "05/06/2025" },
        { id: 4, subject: "Inglés", evaluationType: "Listening Comprehension Test", dueDate: "08/06/2025" },
        { id: 5, subject: "Química", evaluationType: "Laboratorio: Reacciones REDOX", dueDate: "10/06/2025" },
        { id: 6, subject: "Historia", evaluationType: "Control de lectura: Cap. 5", dueDate: "12/06/2025" },
    ]);
    
    const fetchEvaluacionesData = async () => {
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + '/evaluaciones?NOM_FICHANRO=' + session.NOM_FICHANRO);
            if (response.ok) {
                const data = await response.json();
                setEvaluaciones(data);
            }
        } catch (error) {
            console.error('Error al cargar las evaluaciones:', error);
        }
    };
    
    useEffect(() => {
        if (session?.NOM_FICHANRO) {
            fetchEvaluacionesData();
        }
    }, [session?.NOM_FICHANRO]);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEvaluaciones(prev => prev.map(evalItem => 
            evalItem.id === parseInt(e.target.dataset.id) 
                ? { ...evalItem, [name]: value } 
                : evalItem
        ));
    };

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