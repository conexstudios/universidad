import React from 'react';
import '../styles/HealthData.css';
import { useState, useEffect } from 'react';
import useSessionStore from '../store/sessionStore';
import useCatalogStore from '../store/catalogStore'; 
const HealthData = () => {
  const session = useSessionStore((state) => state.session);
  const [healthData, setHealthData] = useState({
    tipo_sangre: '',
    donante_sangre: '',
    donante_organos: '',
    lado_dominante: '',
    condicion_fisica: '',
    enfermedad_permanente: '',
    alergico_a: '',
    observacion: '',
  });
  
  const fetchHealthData = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + '/nominas?NOM_FICHANRO=' + session.NOM_FICHANRO);
      const data = await response.json()
      setHealthData(data);
    } catch (error) {
      console.error('Error fetching health data:', error);
    }
  };

  useEffect(() => {
    fetchHealthData();
  }, []);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHealthData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  return (
    <div className="health-container">
      <h1>Salud</h1>
      <form className="health-form">
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="tipo-sangre">Tipo de Sangre</label>
            <select id="tipo-sangre" name="tipo-sangre" onChange={(e) => handleInputChange(e)}>
              <option value="">Seleccionar Valor</option>
            
            </select>
          </div>
          <div className="form-group checkbox-group">
            <label htmlFor="donante-sangre">Donante de Sangre</label>
            <input type="checkbox" id="donante-sangre" name="donante-sangre" onChange={(e) => handleInputChange(e)} />
          </div>
          <div className="form-group checkbox-group">
            <label htmlFor="donante-organos">Donante de Órganos</label>
            <input type="checkbox" id="donante-organos" name="donante-organos" onChange={(e) => handleInputChange(e)} />
          </div>
          <div className="form-group">
            <label htmlFor="lado-dominante">Lado Dominante</label>
            <select id="lado-dominante" name="lado-dominante" onChange={(e) => handleInputChange(e)}>
              <option value="">Seleccionar Valor</option>
             
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="condicion-fisica">Condición Física</label>
            <select id="condicion-fisica" name="condicion-fisica" onChange={(e) => handleInputChange(e)}>
              <option value="">Seleccionar Valor</option>
           
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="enfermedad-permanente">Enfermedad Permanente</label>
            <input type="text" id="enfermedad-permanente" name="enfermedad-permanente" onChange={(e) => handleInputChange(e)} placeholder="(Ej:Diabetes,Hipertension,etc.)" />
          </div>
          <div className="form-group">
            <label htmlFor="alergico-a">Alérgico a:</label>
            <input type="text" id="alergico-a" name="alergico-a" onChange={(e) => handleInputChange(e)} />
          </div>
          <div className="form-group full-width">
            <label htmlFor="observacion">Observación</label>
            <input type="text" id="observacion" name="observacion" onChange={(e) => handleInputChange(e)} />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="save-button">Guardar Cambios</button>
          <button type="button" className="cancel-button">Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default HealthData;
