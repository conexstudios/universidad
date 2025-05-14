import React from 'react';
import '../styles/DateTime.css';

const DateTime = () => {
  const data = [
    {
      id: 1,
      cuatrimestre: "T1",
      grupo: "TP01",
      estado: "Aprobada",
      asignatura: "Aplicaciones en internet",
      aula: "Presencial",
      cupo: 100,
      dia: "Viernes",
      horario: "7:45-9:15AM",
    },
    {
      id: 2,
      cuatrimestre: "T1",
      grupo: "TP01",
      estado: "Aprobada",
      asignatura: "Aplicaciones en internet",
      aula: "Presencial",
      cupo: 100,
      dia: "Viernes",
      horario: "7:45-9:15AM",
    },
    {
      id: 3,
      cuatrimestre: "T1",
      grupo: "TP01",
      estado: "Aprobada",
      asignatura: "Aplicaciones en internet",
      aula: "Presencial",
      cupo: 100,
      dia: "Viernes",
      horario: "7:45-9:15AM",
    },
  ];

  return (
    <div className="date-time-container">
      <h1>Asignaturas y Horarios</h1>
      <table className="date-time-table">
        <thead>
          <tr>
            <th>Cuatrimestre</th>
            <th>Grupo</th>
            <th>Código</th>
            <th>Asignatura</th>
            <th>Aula</th>
            <th>Cupo Disponible</th>
            <th>Día</th>
            <th>Horario</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.cuatrimestre}</td>
              <td>{item.grupo}</td>
              <td>{item.estado}</td>
              <td>{item.asignatura}</td>
              <td>{item.aula}</td>
              <td>{item.cupo}</td>
              <td>{item.dia}</td>
              <td>{item.horario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DateTime;