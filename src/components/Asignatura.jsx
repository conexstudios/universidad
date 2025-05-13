import React from 'react';
import '../styles/Asignatura.css';

const Asignatura = () => {
    const asig = [
        { id: 1, subject: 'Inglés', section: 'C2B' },
        { id: 2, subject: 'Física', section: 'K0S' },
        { id: 3, subject: 'Cálculo', section: 'F4T' },
        { id: 4, subject: 'Química', section: 'W8R' },
    ];

    return (
        <div className="dashboard-card assigned-subjects-component">
            <h3>Asignatura 2025-2026</h3>
            <ul className="asig-subjects-list">
                {asig.map(item => (
                    <li key={item.id}>
                        <strong>{item.subject}:</strong> {item.section}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Asignatura;