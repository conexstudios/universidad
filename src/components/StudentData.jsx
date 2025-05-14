import React from 'react';
import '../styles/StudentData.css'; 

const StudentData = () => {
    const semestreData = [
        { id: 1, asignatura: "Matemáticas", corte1: 20, corte2: 20, corte3: 20, corte4: 20, final: 20 },
        { id: 2, asignatura: "Física", corte1: 20, corte2: 20, corte3: 20, corte4: 20, final: 20 },
        { id: 3, asignatura: "Español", corte1: 20, corte2: 20, corte3: 20, corte4: 20, final: 20 },
        { id: 4, asignatura: "Inglés", corte1: 20, corte2: 20, corte3: 20, corte4: 20, final: 20 },
        { id: 5, asignatura: "Dibujo", corte1: 20, corte2: 20, corte3: 20, corte4: 20, final: 20 },
        { id: 6, asignatura: "Proyecto", corte1: 20, corte2: 20, corte3: 20, corte4: 20, final: 20 },
    ];

    return (
        <div className="student-grades-container">
            <h1 className="student-grades-title">Calificación Del Estudiante</h1>
            <table className="grades-table">
                <thead>
                    <tr>
                        <th className="subject-column">Asignatura</th>
                        <th>Primer Corte</th>
                        <th>Segundo Corte</th>
                        <th>Tercer Corte</th>
                        <th>Cuarto Corte</th>
                        <th>Final</th>
                    </tr>
                </thead>
                <tbody>
                    {semestreData.map((subject) => (
                        <tr key={subject.id}>
                            <td className="subject-column">{subject.asignatura}</td> 
                            <td>{subject.corte1}</td>
                            <td>{subject.corte2}</td>
                            <td>{subject.corte3}</td>
                            <td>{subject.corte4}</td>
                            <td className="final-score">{subject.final}</td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentData;
