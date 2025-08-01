import React, { useState, useEffect } from 'react';
import '../styles/StudentData.css';
import useSessionStore from '../store/sessionStore';

const StudentData = () => {
    const session = useSessionStore((state) => state.session);
    const [gradesData, setGradesData] = useState([]);
    const [selectedPeriod, setSelectedPeriod] = useState('Ene-Abr 2025');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const academicPeriods = [
        "Ene-Abr 2025",
        "Sep-Dic 2024",
        "May-Ago 2024",
        "Ene-Abr 2024",
    ];

    const sampleData = [
        { id: 1, asignatura: "Matemáticas", corte1: 20, corte2: 20, corte3: 20, corte4: 20, final: 20 },
        { id: 2, asignatura: "Física", corte1: 20, corte2: 20, corte3: 20, corte4: 20, final: 20 },
        { id: 3, asignatura: "Español", corte1: 20, corte2: 20, corte3: 20, corte4: 20, final: 20 },
        { id: 4, asignatura: "Inglés", corte1: 20, corte2: 20, corte3: 20, corte4: 20, final: 20 },
        { id: 5, asignatura: "Dibujo", corte1: 20, corte2: 20, corte3: 20, corte4: 20, final: 20 },
        { id: 6, asignatura: "Proyecto", corte1: 20, corte2: 20, corte3: 20, corte4: 20, final: 20 },
    ];

    const fetchGradesData = async () => {
        try {
            setLoading(true);
            setTimeout(() => {
                setGradesData(sampleData);
                setLoading(false);
            }, 500);
            
        } catch (error) {
            console.error('Error al cargar las calificaciones:', error);
            setError('Error al cargar las calificaciones');
            setLoading(false);
        }
    };

    useEffect(() => {
        if (session?.NOM_FICHANRO) {
            fetchGradesData();
        }
    }, [session?.NOM_FICHANRO, selectedPeriod]);

    const handlePeriodChange = (e) => {
        setSelectedPeriod(e.target.value);
    };

    if (loading) {
        return <div className="loading">Cargando calificaciones...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="student-grades-container">
            <h1 className="student-grades-title">Calificación del Estudiante</h1>

            <div className="academic-period-selector">
                <label htmlFor="academic-period-select" className="period-label">Lapso Académico:</label>
                <select
                    id="academic-period-select"
                    className="period-select"
                    value={selectedPeriod}
                    onChange={handlePeriodChange}
                    disabled={loading}
                >
                    {academicPeriods.map((period, index) => (
                        <option key={index} value={period}>{period}</option>
                    ))}
                </select>
            </div>

            <div className="grades-table-container">
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
                        {gradesData.map((subject) => (
                            <tr key={subject.id}>
                                <td className="subject-column">{subject.asignatura}</td>
                                <td className={subject.corte1 < 10 ? 'low-grade' : ''}>{subject.corte1}</td>
                                <td className={subject.corte2 < 10 ? 'low-grade' : ''}>{subject.corte2}</td>
                                <td className={subject.corte3 < 10 ? 'low-grade' : ''}>{subject.corte3}</td>
                                <td className={subject.corte4 < 10 ? 'low-grade' : ''}>{subject.corte4}</td>
                                <td className={`final-score ${subject.final < 10 ? 'low-grade' : ''}`}>
                                    {subject.final}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentData;