import React from 'react';
import '../styles/Asignatura.css';

const Asignatura = () => {
    const assignedSubjectsData = [
        { id: 1, subject: 'Inglés', section: 'C2B' },
        { id: 2, subject: 'Física', section: 'K0S' },
        { id: 3, subject: 'Cálculo', section: 'F4T' },
        { id: 4, subject: 'Química', section: 'W8R' },
    ];

    const classRoomData = [
        { id: 1, subject: "Matemáticas", section: "2B" },
        { id: 2, subject: "Química", section: "2A" },
        { id: 3, subject: "Inglés", section: "1C" },
        { id: 4, subject: "Español", section: "1B" },
    ];

    return (
        <div className="dashboard-card combined-component">
            <div className="assigned-subjects-component">
                <h3>Asignatura 2025-2026</h3>
                <ul className="asig-subjects-list">
                    {assignedSubjectsData.map(item => (
                        <li key={item.id}>
                            <strong>{item.subject}:</strong> {item.section}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="classroom-component">
                <h3>Salón de clases</h3>
                <ul className="classroom-list">
                    {classRoomData.map((item) => (
                        <li key={item.id}>
                            <strong>{item.subject}:</strong> {item.section}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Asignatura;
