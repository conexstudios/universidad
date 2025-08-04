import React, { useState, useEffect } from 'react';
import '../styles/AcademicData.css';
import useSessionStore from '../store/sessionStore';
import useCatalogStore from '../store/catalogStore';

const AcademicData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    academicStages,
    studyPlans,
    careers,
    mentions,
    shifts,
    schools,
    disabilityTypes,
    highSchoolTitles,
    admissionModes,
    academicLevels,
    fetchAcademicStages,
    fetchStudyPlans,
    fetchCareers,
    fetchMentions,
    fetchShifts,
    fetchSchools,
    fetchDisabilityTypes,
    fetchHighSchoolTitles,
    fetchAdmissionModes,
    fetchAcademicLevels,
  } = useCatalogStore();

  const session = useSessionStore((state) => state.session);

  const [formData, setFormData] = useState({
    etapa_actual: '',
    plan_estudios_actual: '',
    carrera_actual: '',
    mencion_actual: '',
    turno_pre_asignado: '',
    rusnies_id: '',
    plantel_procedencia: '',
    codigo_dea: '',
    tipo_discapacidad: '',
    titulo_educacion_media: '',
    numero_titulo_emg: '',
    fecha_graduacion_emg: '',
    carrera_desea: '',
    modalidad_ingreso: '',
    nivel_academico: '',
  });

  
  useEffect(() => {
    const loadData = async () => {
      if (!session?.NOM_FICHANRO) {
        setError('No hay sesión activa');
        setLoading(false);
        setError(null);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        await Promise.all([
          fetchAcademicStages(),
          fetchStudyPlans(),
          fetchCareers(),
          fetchMentions(),
          fetchShifts(),
          fetchSchools(),
          fetchDisabilityTypes(),
          fetchHighSchoolTitles(),
          fetchAdmissionModes(),
          fetchAcademicLevels(),
          fetchAcademicData()
        ]);
        
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Error al cargar los datos académicos');
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [session?.NOM_FICHANRO]);

  const fetchAcademicData = async () => {
    setLoading(true);
    try {
      setError(null);
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/academic?userId=${session.NOM_FICHANRO}`);
      
      if (!response.ok) {
        throw new Error('Error al cargar los datos académicos');
      }
      
      const data = await response.json();
      if (data) {
        setFormData(prev => ({
          ...prev,
          ...data,
          fecha_graduacion_emg: data.fecha_graduacion_emg ? data.fecha_graduacion_emg.split('T')[0] : ''
        }));
        setLoading(false);
      }
    } catch (error) {
      setTimeout(() => {
        setError('Error al cargar los datos académicos');
        setLoading(false);
      }, 1000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    try {
      setIsSubmitting(true);
      const apiUrl = import.meta.env.VITE_API_URL;
      
      const response = await fetch(`${apiUrl}/academic`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          userId: session?.NOM_FICHANRO
        })
      });
      
      if (!response.ok) {
        throw new Error('Error al guardar los datos');
      }
      
    } catch (error) {
      console.error('Error saving academic data:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="academic-container">
      <h1>Datos Académicos</h1>
      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Cargando datos académicos...</p>
        </div>
      )}
      {error && (
        <div className="error-container">
          <p className="error-message">{error}</p>
          <button 
            className="retry-button" 
            onClick={fetchAcademicData}
          >
            Reintentar
          </button>
        </div>
      )}
      <form className="academic-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="etapa_actual">Etapa Actual</label>
            <select
              id="etapa_actual"
              name="etapa_actual"
              value={formData.etapa_actual}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccionar etapa</option>
              {academicStages?.map(stage => (
                <option key={stage.id} value={stage.value}>
                  {stage.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="plan_estudios_actual">Plan de Estudios Actual</label>
            <select
              id="plan_estudios_actual"
              name="plan_estudios_actual"
              value={formData.plan_estudios_actual}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccionar plan de estudios</option>
              {studyPlans?.map(plan => (
                <option key={plan.id} value={plan.value}>
                  {plan.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="carrera_actual">Carrera Actual</label>
            <select
              id="carrera_actual"
              name="carrera_actual"
              value={formData.carrera_actual}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccionar carrera</option>
              {careers?.map(career => (
                <option key={career.id} value={career.value}>
                  {career.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="mencion_actual">Mención Actual</label>
            <select
              id="mencion_actual"
              name="mencion_actual"
              value={formData.mencion_actual}
              onChange={handleInputChange}
            >
              <option value="">Seleccionar mención</option>
              {mentions?.map(mention => (
                <option key={mention.id} value={mention.value}>
                  {mention.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="turno_pre_asignado">Turno Pre-Asignado</label>
            <select
              id="turno_pre_asignado"
              name="turno_pre_asignado"
              value={formData.turno_pre_asignado}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccionar turno</option>
              {shifts?.map(shift => (
                <option key={shift.id} value={shift.value}>
                  {shift.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="rusnies_id">RUSNIES ID (OPSU)</label>
            <input
              type="text"
              id="rusnies_id"
              name="rusnies_id"
              value={formData.rusnies_id}
              onChange={handleInputChange}
              placeholder="Ej: 12345678"
            />
          </div>

          <div className="form-group">
            <label htmlFor="plantel_procedencia">Plantel de Procedencia</label>
            <select
              id="plantel_procedencia"
              name="plantel_procedencia"
              value={formData.plantel_procedencia}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccionar plantel</option>
              {schools?.map(school => (
                <option key={school.id} value={school.value}>
                  {school.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="codigo_dea">Código DEA del Plantel</label>
            <input
              type="text"
              id="codigo_dea"
              name="codigo_dea"
              value={formData.codigo_dea}
              onChange={handleInputChange}
              placeholder="Ej: DEA-12345"
            />
          </div>

          <div className="form-group">
            <label htmlFor="tipo_discapacidad">Tipo de discapacidad</label>
            <select
              id="tipo_discapacidad"
              name="tipo_discapacidad"
              value={formData.tipo_discapacidad}
              onChange={handleInputChange}
            >
              <option value="">Ninguna</option>
              {disabilityTypes?.map(type => (
                <option key={type.id} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="titulo_educacion_media">Título de Educación Media</label>
            <select
              id="titulo_educacion_media"
              name="titulo_educacion_media"
              value={formData.titulo_educacion_media}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccionar título</option>
              {highSchoolTitles?.map(title => (
                <option key={title.id} value={title.value}>
                  {title.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="numero_titulo_emg">Número del título de EMG</label>
            <input
              type="text"
              id="numero_titulo_emg"
              name="numero_titulo_emg"
              value={formData.numero_titulo_emg}
              onChange={handleInputChange}
              placeholder="Ej: 123456"
            />
          </div>

          <div className="form-group">
            <label htmlFor="fecha_graduacion_emg">Fecha de graduación EMG</label>
            <input
              type="date"
              id="fecha_graduacion_emg"
              name="fecha_graduacion_emg"
              value={formData.fecha_graduacion_emg}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="carrera_desea">Carrera que desea estudiar</label>
            <select
              id="carrera_desea"
              name="carrera_desea"
              value={formData.carrera_desea}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccionar carrera</option>
              {careers?.map(career => (
                <option key={`desired-${career.id}`} value={career.value}>
                  {career.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="modalidad_ingreso">Modalidad de Ingreso</label>
            <select
              id="modalidad_ingreso"
              name="modalidad_ingreso"
              value={formData.modalidad_ingreso}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccionar modalidad</option>
              {admissionModes?.map(mode => (
                <option key={mode.id} value={mode.value}>
                  {mode.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="nivel_academico">Nivel Académico Completado</label>
            <select
              id="nivel_academico"
              name="nivel_academico"
              value={formData.nivel_academico}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccionar nivel</option>
              {academicLevels?.map(level => (
                <option key={level.id} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-actions">
          <button 
            type="submit" 
            className="save-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Guardando...' : 'Guardar Cambios'}
          </button>
          <button 
            type="button" 
            className="cancel-button"
            onClick={() => window.history.back()}
            disabled={isSubmitting}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AcademicData;