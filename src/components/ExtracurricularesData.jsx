import React from 'react';
import '../styles/ExtracurricularesData.css';
import { useState, useEffect } from 'react';
import useSessionStore from '../store/sessionStore';
import useCatalogStore from '../store/catalogStore'; 

const ExtracurricularData = () => {
    const session = useSessionStore((state) => state.session);
    const [extracurricularData, setExtracurricularData] = useState({
        tipo_actividad: '',
        nombre_actividad: '',
        organizacion: '',
        tiempo_dedicado: '',
        tiempo_frecuente: '',
        destrezas: '',
        comentarios_observaciones: '',
    });
    
    const fetchExtracurricularData = async () => {
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + '/nominas?NOM_FICHANRO=' + session.NOM_FICHANRO);
            const data = await response.json()
            setExtracurricularData(data);
        } catch (error) {
            console.error('Error fetching extracurricular data:', error);
        }
    };
    
    useEffect(() => {
        fetchExtracurricularData();
    }, []);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExtracurricularData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    return (
        <div className="extracurricular-container">
            <h1>Actividades Extracurriculares</h1>
            <form className="extracurricular-form">
                <div className="form-section">
                    <div className="form-group">
                        <label htmlFor="tipo-actividad">Tipo de Actividad</label>
                        <select id="tipo-actividad" name="tipo-actividad" onChange={(e) => handleInputChange(e)}>
                            <option value="">Seleccionar Valor</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nombre-actividad">Nombre de la Actividad</label>
                        <input type="text" id="nombre-actividad" name="nombre-actividad" onChange={(e) => handleInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="organizacion">Organización</label>
                        <input type="text" id="organizacion" name="organizacion" onChange={(e) => handleInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tiempo-dedicado">Tiempo Dedicado</label>
                        <input type="text" id="tiempo-dedicado" name="tiempo-dedicado" onChange={(e) => handleInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tiempo-frecuente">Tiempo Frecuente</label>
                        <input type="text" id="tiempo-frecuente" name="tiempo-frecuente" onChange={(e) => handleInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="destrezas">Destrezas</label>
                        <input type="text" id="destrezas" name="destrezas" onChange={(e) => handleInputChange(e)} />
                    </div>
                    <div className="form-group full-width">
                        <label htmlFor="comentarios-observaciones">Comentarios/Observaciones</label>
                        <textarea id="comentarios-observaciones" name="comentarios-observaciones" onChange={(e) => handleInputChange(e)}></textarea>
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
