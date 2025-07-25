import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useFetchWithSession } from '../store/fetchWithSession';
import useSessionStore from '../store/sessionStore';
import "../styles/DateTime.css";

const DateTime = () => {
  const [horarios, setHorarios] = useState([]);
  const [selectedCareer, setSelectedCareer] = useState('');
  const [selectedQuarter, setSelectedQuarter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [message, setMessage] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]); 
  const navigate = useNavigate();
  const itemsPerPage = 5;

  const session = useSessionStore((state) => state.session);

  useEffect(() => {
    const fetchHorarios = async () => {
      try {
      if (!session) return;
      const params = new URLSearchParams({
        COLEG_ID: session.COLEG_ID,
        COL_PROC_INSCRIPC_ID: session.COL_PROC_INSCRIPC_ID,
        user: session.user,
        id: session.id,
      });
      const apiUrl = `${import.meta.env.VITE_API_URL}/horarios?${params.toString()}`;
      const fetchWithSession = useFetchWithSession();
      const response = await fetchWithSession(apiUrl);
        if (!response.ok) {
          if (response.status === 401) {
            throw new Error("No autorizado. Por favor, inicie sesión.");
          }
          throw new Error(`Error al cargar los horarios: ${response.statusText}`);
        }
        const json = await response.json();
        const fetchedHorarios = json.data || [];
        if (fetchedHorarios.length === 0) {
          throw new Error("No se encontraron horarios.");
        }
        setHorarios(fetchedHorarios);

        if (fetchedHorarios.length > 0) {
          const uniqueCareers = [...new Set(fetchedHorarios.map(h => h.carrera_nombre))];
          if (uniqueCareers.length > 0) {
            setSelectedCareer(uniqueCareers[0]);
            const uniqueQuarters = [...new Set(fetchedHorarios.filter(h => h.carrera_nombre === uniqueCareers[0]).map(h => h.cuatrimestre))];
            if (uniqueQuarters.length > 0) {
              setSelectedQuarter(uniqueQuarters[0]);
            }
          }
        }
      } catch (error) {
        setHorarios([]);
      }
    };
    fetchHorarios();
  }, []);

  const uniqueCareers = [...new Set(horarios.map(h => h.carrera_nombre))];
  const uniqueQuartersForSelectedCareer = selectedCareer
    ? [...new Set(horarios.filter(h => h.carrera_nombre === selectedCareer).map(h => h.cuatrimestre))]
    : [];

  const filteredHorarios = horarios.filter(h =>
    (selectedCareer ? h.carrera_nombre === selectedCareer : true) &&
    (selectedQuarter ? h.cuatrimestre === selectedQuarter : true)
  );

  const totalPages = Math.ceil(filteredHorarios.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedHorarios = filteredHorarios.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCareer, selectedQuarter]);

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

  const handleCheckboxChange = (item) => {
    setSelectedCourses((prev) =>
      prev.some((c) => c === item)
        ? prev.filter((c) => c !== item)
        : [...prev, item]
    );
  };


  const handleGuardarSeleccion = () => {
    navigate('/dashboard/confirmar', { state: { seleccion: selectedCourses } });
  };

  
  const handleCancelarSeleccion = () => {
    navigate('/dashboard/confirmar', { state: { seleccion: selectedCourses } });
  };

  const handleCareerChange = (event) => {
    const newCareer = event.target.value;
    setSelectedCareer(newCareer);
    const newUniqueQuarters = [...new Set(horarios.filter(h => h.carrera_nombre === newCareer).map(h => h.cuatrimestre))];
    setSelectedQuarter(newUniqueQuarters.length > 0 ? newUniqueQuarters[0] : '');
  };

  const handleQuarterChange = (event) => {
    setSelectedQuarter(event.target.value);
  };

  return (
    <div className="courses-schedule-container">
      <h1 className="w-full text-center mb-4">Oferta Académica</h1>
      <div className="top-info-wrapper">
        <div className="left-info">
          <label htmlFor="career-select" className="career-label">Carrera:</label>
          <select
            id="career-select"
            value={selectedCareer}
            onChange={handleCareerChange}
            className="career-select"
            disabled={uniqueCareers.length === 0}
          >
            {uniqueCareers.length === 0 ? (
              <option value="">Cargando Carreras...</option>
            ) : (
              uniqueCareers.map(careerName => (
                <option key={careerName} value={careerName}>
                  {careerName}
                </option>
              ))
            )}
          </select>
        </div>
        <div className="right-info">
          <p className="header-info">
            <span className="font-semibold">Trimestre:</span>{' '}
            <select
              value={selectedQuarter}
              onChange={handleQuarterChange}
              className="quarter-select"
              disabled={uniqueQuartersForSelectedCareer.length === 0}
            >
              {uniqueQuartersForSelectedCareer.length === 0 ? (
                <option value="">No hay trimestres</option>
              ) : (
                uniqueQuartersForSelectedCareer.map(quarter => (
                  <option key={quarter} value={quarter}>
                    {quarter}
                  </option>
                ))
              )}
            </select>
            <span className="font-semibold"> Proceso:</span> Inscripción
          </p>
        </div>
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
            {paginatedHorarios.length > 0 ? (
              paginatedHorarios.map((item, index) => (
                <tr key={index + 1}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedCourses.includes(item)}
                      onChange={() => handleCheckboxChange(item)}
                    />
                  </td>
                  <td>{item.cuatrimestre}</td>
                  <td>{item.grupo_academico}</td>
                  <td>{item.materia_codigo}</td>
                  <td>{item.asignatura}</td>
                  <td>{item.aula}</td>
                  <td>{item.cupo_disponible}</td>
                  <td>{item.dia_semana}</td>
                  <td>{`${item.hora_inicio} - ${item.hora_fin}`}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="px-4 py-4 text-center text-sm text-gray-500">
                  {horarios.length === 0
                    ? "Cargando horarios o no hay datos disponibles."
                    : "No hay cursos disponibles para la selección actual."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>{currentPage} de {totalPages || 1}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages || totalPages === 0}>
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

export default DateTime;