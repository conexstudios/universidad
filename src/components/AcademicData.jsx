import React from 'react';
import '../styles/AcademicData.css';
import { useState, useEffect } from 'react';
import useSessionStore from '../store/sessionStore';
import useCatalogStore from '../store/catalogStore';                
const AcademicData = () => {
    const session = useSessionStore((state) => state.session);
    const [academicData, setAcademicData] = useState({
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
    
    
    const fetchAcademicData = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/nominas?NOM_FICHANRO=${session.NOM_FICHANRO}`
            );
            
            if (!response.ok) {
                throw new Error('Error al cargar los datos académicos');
            }
            
            const data = await response.json();
            setAcademicData(prev => ({
                ...prev,
                ...data
            }));
        } catch (error) {
            console.error('Error fetching academic data:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (session?.NOM_FICHANRO) {
            fetchAcademicData();
        }
    }, [session?.NOM_FICHANRO]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAcademicData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    return (
        <div className="academic-container">
            <h1>Datos Académicos</h1>
            <form className="academic-form">
                <div className="form-section">
                    <div className="form-group">
                        <label htmlFor="etapa-actual">Etapa Actual</label>
                        <input 
                            type="text" 
                            id="etapa-actual" 
                            name="etapa-actual" 
                            value={academicData.etapa_actual || ''}
                            onChange={(e) => setAcademicData({...academicData, etapa_actual: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="plan-estudios">Plan de Estudios Actual</label>
                        <input 
                            type="text" 
                            id="plan-estudios" 
                            name="plan-estudios" 
                            value={academicData.plan_estudios_actual || ''}
                            onChange={(e) => setAcademicData({...academicData, plan_estudios_actual: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="carrera-actual">Carrera Actual</label>
                        <input 
                            type="text" 
                            id="carrera-actual" 
                            name="carrera-actual" 
                            value={academicData.carrera_actual || ''}
                            onChange={(e) => setAcademicData({...academicData, carrera_actual: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mencion-actual">Mención Actual</label>
                        <input 
                            type="text" 
                            id="mencion-actual" 
                            name="mencion-actual" 
                            value={academicData.mencion_actual || ''}
                            onChange={(e) => setAcademicData({...academicData, mencion_actual: e.target.value})}
                        />
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
