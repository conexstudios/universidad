import React, { useState } from 'react';
import '../styles/StudentData.css';

const StudentData = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('Ene-Abr 2025'); // Default value from image

    const academicPeriods = [
        "Ene-Abr 2025",
        "Sep-Dic 2024",
        "May-Ago 2024",
        "Ene-Abr 2024",
    ];

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
            <h1 className="student-grades-title">Calificación del Estudiante</h1> 

            <div className="academic-period-selector">
                <label htmlFor="academic-period-select" className="period-label">Lapso Académico:</label>
                <select
                    id="academic-period-select"
                    className="period-select"
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                >
                    {academicPeriods.map((period, index) => (
                        <option key={index} value={period}>{period}</option>
                    ))}
                </select>
            </div>

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