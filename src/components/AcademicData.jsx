import React from 'react';
import '../styles/AcademicData.css';

const AcademicData = () => {
    return (
        <div className="academic-container">
            <h1>Datos Académicos</h1>
            <form className="academic-form">
                <div className="form-section">
                    <div className="form-group">
                        <label htmlFor="etapa-actual">Etapa Actual</label>
                        <input type="text" id="etapa-actual" name="etapa-actual" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="plan-estudios">Plan de Estudios Actual</label>
                        <input type="text" id="plan-estudios" name="plan-estudios" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="carrera-actual">Carrera Actual</label>
                        <input type="text" id="carrera-actual" name="carrera-actual" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mencion-actual">Mención Actual</label>
                        <input type="text" id="mencion-actual" name="mencion-actual" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="turno-pre-asignado">Turno Pre-Asignado</label>
                        <input type="text" id="turno-pre-asignado" name="turno-pre-asignado" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rusnies-id">RUSNIES ID (OPSU)</label>
                        <input type="text" id="rusnies-id" name="rusnies-id" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="plantel-procedencia">Plantel de Procedencia</label>
                        <select id="plantel-procedencia" name="plantel-procedencia">
                            <option value="">Seleccione</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="codigo-dea">Código DEA del Plantel</label>
                        <input type="text" id="codigo-dea" name="codigo-dea" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tipo-discapacidad">Tipo de discapacidad</label>
                        <input type="text" id="tipo-discapacidad" name="tipo-discapacidad" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="titulo-educacion-media">Título de Educación Media</label>
                        <input type="text" id="titulo-educacion-media" name="titulo-educacion-media" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numero-titulo-emg">Número del título de EMG</label>
                        <input type="text" id="numero-titulo-emg" name="numero-titulo-emg" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fecha-graduacion-emg">Fecha de graduación EMG</label>
                        <input type="date" id="fecha-graduacion-emg" name="fecha-graduacion-emg" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="carrera-desea">Carrera que desea estudiar</label>
                        <select id="carrera-desea" name="carrera-desea">
                            <option value="">Seleccione</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="modalidad-ingreso">Modalidad Ingreso</label>
                        <select id="modalidad-ingreso" name="modalidad-ingreso">
                            <option value="">Seleccione</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nivel-academico">Nivel Académico Completado</label>
                        <select id="nivel-academico" name="nivel-academico">
                            <option value="">Seleccione</option>
                        </select>
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

export default AcademicData;
