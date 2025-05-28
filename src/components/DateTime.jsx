import { useState } from 'react';
import '../styles/DateTime.css';

const DateTime = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

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
    {
      id: 4,
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
      id: 5,
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
      id: 6,
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

  const tableData = [
    { type: 'category', name: 'Ingeniería en Programación' },
    { type: 'item', data: data[0] },
    { type: 'item', data: data[1] },
    { type: 'item', data: data[2] },
    { type: 'item', data: data[3] },
    { type: 'item', data: data[4] },
    { type: 'item', data: data[5] },
    { type: 'category', name: 'Ingeniería en Programación' },
    { type: 'item', data: data[0] },
    { type: 'item', data: data[1] },
    { type: 'item', data: data[2] },
    { type: 'item', data: data[3] },
  ];

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleGuardarSeleccion = () => {
    alert('Selección guardada!');
  };

  const handleCancelarSeleccion = () => {
    alert('Selección cancelada!');
  };

  return (
    <div className="courses-schedule-container">
      <h1>Asignaturas y Horarios</h1>
      <div className="courses-table-wrapper">
        <table className="courses-schedule-table">
          <thead>
            <tr>
              <th></th>
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
            {tableData.map((row, index) => {
              if (row.type === 'category') {
                return (
                  <tr key={`category-${index}`} className="category-row">
                    <td colSpan="9">{row.name}</td>
                  </tr>
                );
              } else {
                const item = row.data;
                return (
                  <tr key={item.id}>
                    <td><input type="checkbox" /></td>
                    <td>{item.cuatrimestre}</td>
                    <td>{item.grupo}</td>
                    <td>{item.estado}</td>
                    <td>{item.asignatura}</td>
                    <td>{item.aula}</td>
                    <td>{item.cupo}</td>
                    <td>{item.dia}</td>
                    <td>{item.horario}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>

      <div className="pagination-controls">
        <button
          className="nav-button"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span className="page-info">
          {currentPage} de {totalPages}
        </span>
        <button
          className="nav-button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>

      <div className="action-buttons">
        <button className="button guardar-seleccion" onClick={handleGuardarSeleccion}>
          Guardar Seleccion
        </button>
        <button className="button cancelar-seleccion" onClick={handleCancelarSeleccion}>
          Cancelar Seleccion
        </button>
      </div>
    </div>
  );
};

export default DateTime;
