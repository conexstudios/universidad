import React from 'react';
import '../styles/Salon.css';

const Salon = () => {
    const classData = [
        { id: 1, subject: 'Matemáticas', section: '2B' },
        { id: 2, subject: 'Química', section: '2A' },
        { id: 3, subject: 'Inglés', section: '1C' },
        { id: 4, subject: 'Español', section: '1B' },
    ];

    return (
        <>
            <div className="dashboard-container">
                <div id="classroom-section-container" className="dashboard-card classroom-component">
                    <h3>Salón de clases</h3>
                    <ul className="classroom-list">
                        {classData.map(item => (
                            <li key={item.id}> 
                                <strong>{item.subject}:</strong> {item.section}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Salon;