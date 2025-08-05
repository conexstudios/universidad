import React, { useState, useEffect } from 'react';
import '../styles/ExtracurricularesData.css';
import useSessionStore from '../store/sessionStore';
import useCatalogStore from '../store/catalogStore';
import { toast } from 'react-toastify';

const ExtracurricularData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  
  const {
    activityTypes,
    timeFrequencies,
    fetchActivityTypes,
    fetchTimeFrequencies,
  } = useCatalogStore();

  const session = useSessionStore((state) => state.session);
  

  const [formData, setFormData] = useState({
    tipo_actividad: '',
    nombre_actividad: '',
    organizacion: '',
    tiempo_dedicado: '',
    tiempo_frecuente: '',
    destrezas: '',
    comentarios_observaciones: '',
  });

  useEffect(() => {
    const loadData = async () => {
      if (!session?.NOM_FICHANRO) {
        setError('No hay sesión activa');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
     
        await Promise.all([
          fetchActivityTypes(),
          fetchTimeFrequencies(),
          fetchExtracurricularData()
        ]);
        
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Error al cargar los datos');
        toast.error('Error al cargar los datos de actividades extracurriculares');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [session?.NOM_FICHANRO]);


  const fetchExtracurricularData = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/extracurricular?userId=${session.NOM_FICHANRO}`);
      
      if (!response.ok) {
        throw new Error('Error al cargar los datos de actividades extracurriculares');
      }
      
      const data = await response.json();
      if (data) {
        setFormData(data);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching extracurricular data:', error);
      throw error;
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
      
      const response = await fetch(`${apiUrl}/extracurricular`, {
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
      toast.success('Datos de actividades extracurriculares guardados correctamente');
    } catch (error) {
      console.error('Error saving extracurricular data:', error);
      toast.error('Error al guardar los datos de actividades extracurriculares');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="extracurricular-container">
      <h1>Actividades Extracurriculares</h1>
      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Cargando datos de actividades extracurriculares...</p>
        </div>
      )}
      {error && (
        <div className="error-container">
          <p className="error-message">{error}</p>
          <button 
            className="retry-button" 
            onClick={() => window.location.reload()}
          >
            Reintentar
          </button>
        </div>
      )}
      <form className="extracurricular-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="tipo_actividad">Tipo de Actividad</label>
            <select 
              id="tipo_actividad" 
              name="tipo_actividad" 
              value={formData.tipo_actividad}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccionar tipo de actividad</option>
              {activityTypes?.map(type => (
                <option key={type.id} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="nombre_actividad">Nombre de la Actividad</label>
            <input 
              type="text" 
              id="nombre_actividad" 
              name="nombre_actividad" 
              value={formData.nombre_actividad}
              onChange={handleInputChange}
              required
              placeholder="Ej: Club de Ajedrez, Equipo de Fútbol, etc."
            />
          </div>

          <div className="form-group">
            <label htmlFor="organizacion">Organización</label>
            <input 
              type="text" 
              id="organizacion" 
              name="organizacion" 
              value={formData.organizacion}
              onChange={handleInputChange}
              placeholder="Nombre de la organización o institución"
            />
          </div>

          <div className="form-group">
            <label htmlFor="tiempo_dedicado">Tiempo Dedicado (horas/semana)</label>
            <input 
              type="number" 
              id="tiempo_dedicado" 
              name="tiempo_dedicado" 
              value={formData.tiempo_dedicado}
              onChange={handleInputChange}
              min="0"
              step="0.5"
              placeholder="Ej: 5"
            />
          </div>

          <div className="form-group">
            <label htmlFor="tiempo_frecuente">Frecuencia</label>
            <select 
              id="tiempo_frecuente" 
              name="tiempo_frecuente" 
              value={formData.tiempo_frecuente}
              onChange={handleInputChange}
            >
              <option value="">Seleccionar frecuencia</option>
              {timeFrequencies?.map(freq => (
                <option key={freq.id} value={freq.value}>
                  {freq.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="destrezas">Destrezas Desarrolladas</label>
            <input 
              type="text" 
              id="destrezas" 
              name="destrezas" 
              value={formData.destrezas}
              onChange={handleInputChange}
              placeholder="Ej: Liderazgo, trabajo en equipo, etc."
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="comentarios_observaciones">Comentarios/Observaciones</label>
            <textarea 
              id="comentarios_observaciones" 
              name="comentarios_observaciones" 
              value={formData.comentarios_observaciones}
              onChange={handleInputChange}
              rows="3"
              placeholder="Descripción detallada de la actividad, logros, responsabilidades, etc."
            />
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

export default ExtracurricularData;