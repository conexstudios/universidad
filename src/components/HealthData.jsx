import React from 'react';
import '../styles/HealthData.css';

const HealthData = () => {
  return (
    <div className="health-container">
      <h1>Salud</h1>
      <form className="health-form">
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="tipo-sangre">Tipo de Sangre</label>
            <select id="tipo-sangre" name="tipo-sangre">
              <option value="">Seleccionar Valor</option>
            
            </select>
          </div>
          <div className="form-group checkbox-group">
            <label htmlFor="donante-sangre">Donante de Sangre</label>
            <input type="checkbox" id="donante-sangre" name="donante-sangre" />
          </div>
          <div className="form-group checkbox-group">
            <label htmlFor="donante-organos">Donante de Órganos</label>
            <input type="checkbox" id="donante-organos" name="donante-organos" />
          </div>
          <div className="form-group">
            <label htmlFor="lado-dominante">Lado Dominante</label>
            <select id="lado-dominante" name="lado-dominante">
              <option value="">Seleccionar Valor</option>
             
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="condicion-fisica">Condición Física</label>
            <select id="condicion-fisica" name="condicion-fisica">
              <option value="">Seleccionar Valor</option>
           
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="enfermedad-permanente">Enfermedad Permanente</label>
            <input type="text" id="enfermedad-permanente" name="enfermedad-permanente" placeholder="(Ej:Diabetes,Hipertension,etc.)" />
          </div>
          <div className="form-group">
            <label htmlFor="alergico-a">Alérgico a:</label>
            <input type="text" id="alergico-a" name="alergico-a" />
          </div>
          <div className="form-group full-width">
            <label htmlFor="observacion">Observación</label>
            <input type="text" id="observacion" name="observacion" />
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
