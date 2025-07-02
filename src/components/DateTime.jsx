import { useState, useEffect } from 'react';
import "../styles/DateTime.css";

const DateTime = () => {
  const careersData = [
    {
      id: 'ingenieria-programacion',
      name: 'Ingeniería en Programación',
      trimestres: ['T1', 'T2', 'T3'],
      courses: [
        {
          id: 1,
          cuatrimestre: "T1",
          grupo: "TP01",
          estado: "Aprobada",
          codigo: "AI001",
          asignatura: "Aplicaciones en Internet",
          aula: "Presencial",
          cupo: 100,
          dia: "Viernes",
          horario: "7:45-9:15AM",
        },
        {
          id: 2,
          cuatrimestre: "T1",
          grupo: "TP02",
          estado: "Pendiente",
          codigo: "DB002",
          asignatura: "Bases de Datos I",
          aula: "Virtual",
          cupo: 80,
          dia: "Lunes",
          horario: "10:00-11:30AM",
        },
        {
          id: 3,
          cuatrimestre: "T1",
          grupo: "TP03",
          estado: "Aprobada",
          codigo: "ALG003",
          asignatura: "Algoritmos y Estructuras de Datos",
          aula: "Presencial",
          cupo: 90,
          dia: "Martes",
          horario: "1:00-2:30PM",
        },
        {
          id: 4,
          cuatrimestre: "T2",
          grupo: "TP01",
          estado: "Aprobada",
          codigo: "WEB004",
          asignatura: "Desarrollo Web Avanzado",
          aula: "Presencial",
          cupo: 75,
          dia: "Miércoles",
          horario: "3:00-4:30PM",
        },
        {
          id: 5,
          cuatrimestre: "T2",
          grupo: "TP02",
          estado: "Pendiente",
          codigo: "RED005",
          asignatura: "Redes de Computadoras",
          aula: "Virtual",
          cupo: 60,
          dia: "Jueves",
          horario: "9:00-10:30AM",
        },
      ],
    },
    {
      id: 'diseno-grafico',
      name: 'Diseño Gráfico Digital',
      trimestres: ['T1', 'T2'],
      courses: [
        {
          id: 6,
          cuatrimestre: "T1",
          grupo: "DG01",
          estado: "Aprobada",
          codigo: "DG001",
          asignatura: "Fundamentos del Diseño",
          aula: "Presencial",
          cupo: 50,
          dia: "Lunes",
          horario: "8:00-9:30AM",
        },
        {
          id: 7,
          cuatrimestre: "T1",
          grupo: "DG02",
          estado: "Pendiente",
          codigo: "ILU002",
          asignatura: "Ilustración Digital",
          aula: "Virtual",
          cupo: 45,
          dia: "Martes",
          horario: "11:00-12:30PM",
        },
      ],
    },
  ];

  const [selectedCareerId, setSelectedCareerId] = useState(careersData[0].id);
  const [currentPage, setCurrentPage] = useState(1);
  const [message, setMessage] = useState('');
  const itemsPerPage = 5;

  const selectedCareer = careersData.find(career => career.id === selectedCareerId);
  const currentCourses = selectedCareer ? selectedCareer.courses : [];
  const totalPages = Math.ceil(currentCourses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCourses = currentCourses.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCareerId]);

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
    setMessage('¡Selección guardada!');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleCancelarSeleccion = () => {
    setMessage('¡Selección cancelada!');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleCareerChange = (event) => {
    setSelectedCareerId(event.target.value);
  };

  return (
    <div className="courses-schedule-container">
      <div className="w-full text-center mb-4">
        <h1>Oferta Académica</h1>
        {/* INICIO DE CAMBIO EN JSX: Restauramos la estructura original del header-controls */}
        <div className="header-controls">
          <div className="career-selector-group">
            <label htmlFor="career-select">Carrera:</label>
            <select
              id="career-select"
              value={selectedCareerId}
              onChange={handleCareerChange}
            >
              {careersData.map(career => (
                <option key={career.id} value={career.id}>
                  {career.name}
                </option>
              ))}
            </select>
          </div>
          <p className="header-info">
            <span className="font-semibold">Trimestre:</span> {selectedCareer?.trimestres[0] || 'N/A'} |
            <span className="font-semibold"> Proceso:</span> Inscripción
          </p>
        </div>
        {/* FIN DE CAMBIO EN JSX */}
      </div>

      {message && (
        <div className="message-display" role="alert">
          <span className="block sm:inline">{message}</span>
        </div>
      )}

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
            {paginatedCourses.length > 0 ? (
              paginatedCourses.map((item) => (
                <tr key={item.id}>
                  <td><input type="checkbox" /></td>
                  <td>{item.cuatrimestre}</td>
                  <td>{item.grupo}</td>
                  <td>{item.codigo}</td>
                  <td>{item.asignatura}</td>
                  <td>{item.aula}</td>
                  <td>{item.cupo}</td>
                  <td>{item.dia}</td>
                  <td>{item.horario}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="px-4 py-4 text-center text-sm text-gray-500">No hay cursos disponibles para esta carrera.</td>
              </tr>
            )}
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
          Guardar Selección
        </button>
        <button className="button cancelar-seleccion" onClick={handleCancelarSeleccion}>
          Cancelar Selección
        </button>
      </div>
    </div>
  );
};

export default DateTime