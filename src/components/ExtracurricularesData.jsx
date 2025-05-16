import React from 'react';
import '../styles/ExtracurricularesData.css';

const ExtracurricularData = () => {
    return (
        <div className="extracurricular-container">
            <h1>Actividades Extracurriculares</h1>
            <form className="extracurricular-form">
                <div className="form-section">
                    <div className="form-group">
                        <label htmlFor="tipo-actividad">Tipo de Actividad</label>
                        <select id="tipo-actividad" name="tipo-actividad">
                            <option value="">Seleccionar Valor</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nombre-actividad">Nombre de la Actividad</label>
                        <input type="text" id="nombre-actividad" name="nombre-actividad" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="organizacion">Organización</label>
                        <input type="text" id="organizacion" name="organizacion" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tiempo-dedicado">Tiempo Dedicado</label>
                        <input type="text" id="tiempo-dedicado" name="tiempo-dedicado" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tiempo-frecuente">Tiempo Frecuente</label>
                        <input type="text" id="tiempo-frecuente" name="tiempo-frecuente" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="destrezas">Destrezas</label>
                        <input type="text" id="destrezas" name="destrezas" />
                    </div>
                    <div className="form-group full-width">
                        <label htmlFor="comentarios-observaciones">Comentarios/Observaciones</label>
                        <textarea id="comentarios-observaciones" name="comentarios-observaciones"></textarea>
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

export default ExtracurricularData;
