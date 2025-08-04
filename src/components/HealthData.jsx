import React, { useState, useEffect } from 'react';
import '../styles/HealthData.css';
import useSessionStore from '../store/sessionStore';
import useCatalogStore from '../store/catalogStore';
import { toast } from 'react-toastify';

const HealthData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  
  const {
    bloodTypes,
    dominantSides,
    physicalConditions,
    fetchBloodTypes,
    fetchDominantSides,
    fetchPhysicalConditions,
  } = useCatalogStore();

  const session = useSessionStore((state) => state.session);
  
  const [healthData, setHealthData] = useState({
    tipo_sangre: '',
    donante_sangre: false,
    donante_organos: false,
    lado_dominante: '',
    condicion_fisica: '',
    enfermedad_permanente: '',
    alergico_a: '',
    observacion: '',
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
          fetchBloodTypes(),
          fetchDominantSides(),
          fetchPhysicalConditions(),
          fetchHealthData()
        ]);
        
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Error al cargar los datos');
        toast.error('Error al cargar los datos de salud');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [session?.NOM_FICHANRO]);

  
  const fetchHealthData = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/health-data?userId=${session.NOM_FICHANRO}`);
      
      if (!response.ok) {
        throw new Error('Error al cargar los datos de salud');
      }
      
      const data = await response.json();
      if (data) {
        setHealthData(prev => ({
          ...prev,
          ...data,
          donante_sangre: Boolean(data.donante_sangre),
          donante_organos: Boolean(data.donante_organos)
        }));
      }
    } catch (error) {
      console.error('Error fetching health data:', error);
      throw error;
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setHealthData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    try {
      setIsSubmitting(true);
      const apiUrl = import.meta.env.VITE_API_URL;
      
      const response = await fetch(`${apiUrl}/health-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...healthData,
          userId: session.NOM_FICHANRO
        })
      });
      
      if (!response.ok) {
        throw new Error('Error al guardar los datos');
      }
      
      toast.success('Datos de salud guardados correctamente');
      
    } catch (error) {
      console.error('Error saving health data:', error);
      toast.error('Error al guardar los datos de salud');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Cargando datos de salud...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
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
    <div className="health-container">
      <h1>Datos de Salud</h1>
      <form className="health-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="tipo_sangre">Tipo de Sangre</label>
            <select 
              id="tipo_sangre" 
              name="tipo_sangre" 
              value={healthData.tipo_sangre}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccionar tipo de sangre</option>
              {bloodTypes.map(type => (
                <option key={type.id} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group checkbox-group">
            <label>
              <input 
                type="checkbox" 
                name="donante_sangre" 
                checked={healthData.donante_sangre}
                onChange={handleInputChange}
              />
              Donante de Sangre
            </label>
          </div>

          <div className="form-group checkbox-group">
            <label>
              <input 
                type="checkbox" 
                name="donante_organos" 
                checked={healthData.donante_organos}
                onChange={handleInputChange}
              />
              Donante de Órganos
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="lado_dominante">Lado Dominante</label>
            <select 
              id="lado_dominante" 
              name="lado_dominante" 
              value={healthData.lado_dominante}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccionar lado dominante</option>
              {dominantSides.map(side => (
                <option key={side.id} value={side.value}>
                  {side.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="condicion_fisica">Condición Física</label>
            <select 
              id="condicion_fisica" 
              name="condicion_fisica" 
              value={healthData.condicion_fisica}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccionar condición</option>
              {physicalConditions.map(condition => (
                <option key={condition.id} value={condition.value}>
                  {condition.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="enfermedad_permanente">Enfermedad Permanente</label>
            <input 
              type="text" 
              id="enfermedad_permanente" 
              name="enfermedad_permanente" 
              value={healthData.enfermedad_permanente}
              onChange={handleInputChange}
              placeholder="Ej: Diabetes, Hipertensión, etc."
            />
          </div>

          <div className="form-group">
            <label htmlFor="alergico_a">Alérgico a:</label>
            <input 
              type="text" 
              id="alergico_a" 
              name="alergico_a" 
              value={healthData.alergico_a}
              onChange={handleInputChange}
              placeholder="Ej: Penicilina, mariscos, etc."
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="observacion">Observaciones</label>
            <textarea 
              id="observacion" 
              name="observacion" 
              value={healthData.observacion}
              onChange={handleInputChange}
              rows="3"
              placeholder="Otras observaciones médicas importantes..."
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

export default HealthData;