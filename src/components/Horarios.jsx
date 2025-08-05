import React, { useState, useEffect } from 'react';
import '../styles/Horario.css';
import useSessionStore from '../store/sessionStore';

const Horarios = () => {
  const session = useSessionStore((state) => state.session);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [scheduleData, setScheduleData] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);

  const initialScheduleData = [
    {
      id: 1,
      time: "7:45-9:15AM",
      lunes: { codigo: "C2B", materia: "Matemáticas", aula: "A-101" },
      martes: null,
      miercoles: { codigo: "K0S", materia: "Física", aula: "B-205" },
      jueves: { codigo: "F4T", materia: "Química", aula: "C-301" },
      viernes: { codigo: "W8R", materia: "Programación", aula: "D-102" },
    },
    {
      id: 2,
      time: "8:00-10:00AM",
      lunes: { codigo: "C2B", materia: "Matemáticas", aula: "A-101" },
      martes: { codigo: "A8L", materia: "Inglés", aula: "E-202" },
      miercoles: null,
      jueves: { codigo: "F4T", materia: "Química", aula: "C-301" },
      viernes: { codigo: "W8R", materia: "Programación", aula: "D-102" },
    },
    {
      id: 3,
      time: "9:25-10:55AM",
      lunes: { codigo: "C2B", materia: "Matemáticas", aula: "A-101" },
      martes: { codigo: "A8L", materia: "Inglés", aula: "E-202" },
      miercoles: { codigo: "K0S", materia: "Física", aula: "B-205" },
      jueves: { codigo: "F4T", materia: "Química", aula: "C-301" },
      viernes: { codigo: "W8R", materia: "Programación", aula: "D-102" },
    },
    {
      id: 4,
      time: "11:05-12:35PM",
      lunes: null,
      martes: null,
      miercoles: { codigo: "K0S", materia: "Física", aula: "B-205" },
      jueves: { codigo: "F4T", materia: "Química", aula: "C-301" },
      viernes: { codigo: "W8R", materia: "Programación", aula: "D-102" },
    },
    {
      id: 5,
      time: "1:30-3:00PM",
      lunes: null,
      martes: null,
      miercoles: { codigo: "K0S", materia: "Física", aula: "B-205" },
      jueves: { codigo: "F4T", materia: "Química", aula: "C-301" },
      viernes: null,
    },
    {
      id: 6,
      time: "3:00-4:30PM",
      lunes: null,
      martes: null,
      miercoles: { codigo: "K0S", materia: "Física", aula: "B-205" },
      jueves: { codigo: "F4T", materia: "Química", aula: "C-301" },
      viernes: null,
    },
    {
      id: 7,
      time: "3:10-4:40PM",
      lunes: null,
      martes: null,
      miercoles: { codigo: "K0S", materia: "Física", aula: "B-205" },
      jueves: { codigo: "F4T", materia: "Química", aula: "C-301" },
      viernes: null,
    },
  ];

  useEffect(() => {
    const fetchScheduleData = async () => {
      try {
        setLoading(true);
        setScheduleData(initialScheduleData);
        setLoading(false);
      } catch (err) {
        console.error('Error al cargar el horario:', err);
        setError('No se pudo cargar el horario. Por favor, intente de nuevo más tarde.');
        setLoading(false);
      }
    };

    fetchScheduleData();
  }, [session.estudiante_id]);

  const handleClassClick = (classInfo) => {
    if (classInfo) {
      setSelectedClass(classInfo);
    }
  };

  const renderClassCell = (classInfo, day) => {
    if (!classInfo) return <td key={day}></td>;
    
    return (
      <td 
        key={day}
        className={`schedule-cell ${selectedClass?.codigo === classInfo.codigo ? 'selected' : ''}`}
        onClick={() => handleClassClick(classInfo)}
      >
        <div className="class-code">{classInfo.codigo}</div>
        <div className="class-details">
          <div className="class-name">{classInfo.materia}</div>
          <div className="class-room">Aula: {classInfo.aula}</div>
        </div>
      </td>
    );
  };

  if (loading) {
    return (
      <div className="schedule-loading">
        <div className="spinner"></div>
        <p>Cargando horario...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="schedule-error">
        <div className="error-icon">⚠️</div>
        <p>{error}</p>
        <button 
          className="retry-button"
          onClick={() => window.location.reload()}
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="schedule-component">
      <h3>Mi Horario de Clases</h3>
      
      <div className="schedule-controls">
        <div className="semester-selector">
          <label htmlFor="semester">Período Académico:</label>
          <select id="semester" disabled={loading}>
            <option>Enero - Abril 2024</option>
            <option>Mayo - Agosto 2024</option>
            <option>Septiembre - Diciembre 2024</option>
          </select>
        </div>
        
        <button 
          className="print-button"
          onClick={() => window.print()}
          disabled={loading}
        >
          Imprimir Horario
        </button>
      </div>
      
      <div className="schedule-table-container">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Hora</th>
              <th>Lunes</th>
              <th>Martes</th>
              <th>Miércoles</th>
              <th>Jueves</th>
              <th>Viernes</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((row) => (
              <tr key={row.id}>
                <td className="time-slot">{row.time}</td>
                {renderClassCell(row.lunes, 'lunes')}
                {renderClassCell(row.martes, 'martes')}
                {renderClassCell(row.miercoles, 'miercoles')}
                {renderClassCell(row.jueves, 'jueves')}
                {renderClassCell(row.viernes, 'viernes')}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {selectedClass && (
        <div className="class-detail-panel">
          <h4>Detalles de la Clase</h4>
          <div className="class-detail-content">
            <p><strong>Código:</strong> {selectedClass.codigo}</p>
            <p><strong>Materia:</strong> {selectedClass.materia}</p>
            <p><strong>Aula:</strong> {selectedClass.aula}</p>
            <p><strong>Horario:</strong> {selectedClass.horario || 'Por definir'}</p>
            <p><strong>Profesor:</strong> {selectedClass.profesor || 'Por asignar'}</p>
          </div>
        </div>
      )}
      
      <div className="schedule-legend">
        <div className="legend-item">
          <span className="legend-color" style={{backgroundColor: '#e6f7ff'}}></span>
          <span>Clase Regular</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{backgroundColor: '#ffebee'}}></span>
          <span>Evaluación</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{backgroundColor: '#e8f5e9'}}></span>
          <span>Laboratorio</span>
        </div>
      </div>
    </div>
  );
};

export default Horarios;
