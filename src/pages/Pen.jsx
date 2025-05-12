import React from 'react';
import '../styles/Pen.css';

const Pen = () => {
    const pendingSubjectsData = [
        { id: 1, subject: 'Matemáticas' },
        { id: 2, subject: 'Química' },
    ];

    return (
        <div className="dashboard-card pending-assignments-component">
            <div className="pending-assignments-header">
                <h3>Asignaturas Pendientes</h3>
                <span className="pending-assignments-icon">
                </span>
            </div>
            <ul className="pending-subjects-list">
                {pendingSubjectsData.map(item => (
                    <li key={item.id}> 
                        {item.subject}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pen;