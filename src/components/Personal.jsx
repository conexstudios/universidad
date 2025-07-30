import React, { useState, useEffect } from 'react';
import useSessionStore from '../store/sessionStore';
import '../styles/Personal.css';

const Personal = () => {
  const initialPersonalData = {
    nombres: '',
    apellidos: '',
    cedula: '',
    fechaNacimiento: '',
    email: '',
    telefono: '',
    sexo: '',
    estadoCivil: '',
    discapacidad: false,
    tipoDiscapacidad: '',
    codigoDiscapacidad: '',
    relacionContacto: '',
    militarActivo: false,
    componenteMilitar: '',
    notificar: '',
    telefonoContacto: '',
    situacionLaboral: '',
    empresa: '',
  };

  const [personalData, setPersonalData] = useState(initialPersonalData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const session = useSessionStore((state) => state.session);

  useEffect(() => {
    const fetchPersonalData = async () => {
      if (!session || !session.NOM_FICHANRO) {
        setError('No hay sesión activa.');
        window.location.href = import.meta.env.VITE_LOGIN_URL;
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await fetch(`${apiUrl}/nominas?NOM_FICHANRO=${session.NOM_FICHANRO}`);
        if (!response.ok) throw new Error('No se pudo obtener los datos personales');
        const json = await response.json();
        const jsonData = json.data && json.data[0];
        if (jsonData) {
          setPersonalData({
            nombres: jsonData.nom_nombres || '',
            apellidos: jsonData.nom_apellidos || '',
            cedula: jsonData.nom_cedulaid || '',
            fechaNacimiento: jsonData.nom_nacim_fecha || '',
            email: jsonData.nom_email || '',
            telefono: jsonData.nom_telefono || '',
            sexo: jsonData.nom_sexo || '',
            estadoCivil: jsonData.nom_estadocivil || '',
            discapacidad: jsonData.nom_discapacidad || false,
            tipoDiscapacidad: jsonData.nom_tipodiscapacidad || '',
            codigoDiscapacidad: jsonData.nom_codigodiscapacidad || '',
            relacionContacto: jsonData.nom_relacioncontacto || '',
            militarActivo: jsonData.nom_militaractivo || false,
            componenteMilitar: jsonData.nom_componentemilitar || '',
            notificar: jsonData.nom_notificar || '',
            telefonoContacto: jsonData.nom_telefonocontacto || '',
            situacionLaboral: jsonData.nom_situacionlaboral || '',
            empresa: jsonData.nom_empresa || '',
          });
        } else {
          setPersonalData(initialPersonalData);
        }
      } catch (err) {
        setError(err.message);
        setPersonalData(initialPersonalData);
      } finally {
        setLoading(false);
      }
    };
    fetchPersonalData();
  }, [session && session.NOM_FICHANRO]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPersonalData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/nominas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...personalData, NOM_FICHANRO: session.NOM_FICHANRO }),
      });

      if (!response.ok) {
        throw new Error('Failed to save personal data');
      }

      alert('Datos guardados exitosamente');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setPersonalData(initialPersonalData);
  };

  if (loading) {
    return <div className="loading">Cargando datos personales...</div>;
  }

  return (
    <div className="personal-container">
      {error && <div className="error">Error: {error}</div>}
      <h2>Datos Personales</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombres">Nombres</label>
          <input
            type="text"
            id="nombres"
            name="nombres"
            value={personalData.nombres || ''}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellidos">Apellidos</label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            value={personalData.apellidos || ''}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cedula">Cédula de identidad</label>
          <input
            type="text"
            id="cedula"
            name="cedula"
            value={personalData.cedula || ''}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
          <input
            type="date"
            id="fechaNacimiento"
            name="fechaNacimiento"
            value={personalData.fechaNacimiento || ''}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={personalData.email || ''}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono celular</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={personalData.telefono || ''}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="sexo">Sexo</label>
          <select
            id="sexo"
            name="sexo"
            value={personalData.sexo || ''}
            onChange={handleInputChange}
            required
          >
            <option value="">Seleccione</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="estadoCivil">Estado Civil</label>
          <select
            id="estadoCivil"
            name="estadoCivil"
            value={personalData.estadoCivil || ''}
            onChange={handleInputChange}
            required
          >
            <option value="">Seleccione</option>
            <option value="Soltero">Soltero</option>
            <option value="Casado">Casado</option>
            <option value="Divorciado">Divorciado</option>
            <option value="Viudo">Viudo</option>
          </select>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="discapacidad"
              checked={personalData.discapacidad}
              onChange={handleInputChange}
            />
            ¿Discapacidad?
          </label>
          {personalData.discapacidad && (
            <>
              <div className="form-group">
                <label htmlFor="tipoDiscapacidad">Tipo de discapacidad</label>
                <select
                  id="tipoDiscapacidad"
                  name="tipoDiscapacidad"
                  value={personalData.tipoDiscapacidad || ''}
                  onChange={handleInputChange}
                  required={personalData.discapacidad}
                >
                  <option value="">Seleccione</option>
                  <option value="Motriz">Motriz</option>
                  <option value="Visual">Visual</option>
                  <option value="Auditiva">Auditiva</option>
                  <option value="Intelectual">Intelectual</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="codigoDiscapacidad">Código de discapacidad</label>
                <input
                  type="text"
                  id="codigoDiscapacidad"
                  name="codigoDiscapacidad"
                  value={personalData.codigoDiscapacidad || ''}
                  onChange={handleInputChange}
                  required={personalData.discapacidad}
                />
              </div>
            </>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="relacionContacto">Parentesco con Contacto</label>
          <select
            id="relacionContacto"
            name="relacionContacto"
            value={personalData.relacionContacto || ''}
            onChange={handleInputChange}
            required
          >
            <option value="">Seleccione</option>
            <option value="Padre/Madre">Padre/Madre</option>
            <option value="Hermano/a">Hermano/a</option>
            <option value="Cónyuge">Cónyuge</option>
            <option value="Hijo/a">Hijo/a</option>
            <option value="Amigo/a">Amigo/a</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="militarActivo"
              checked={personalData.militarActivo}
              onChange={handleInputChange}
            />
            ¿Militar Activo?
          </label>
          {personalData.militarActivo && (
            <div className="form-group">
              <label htmlFor="componenteMilitar">Componente Militar</label>
              <select
                id="componenteMilitar"
                name="componenteMilitar"
                value={personalData.componenteMilitar || ''}
                onChange={handleInputChange}
                required={personalData.militarActivo}
              >
                <option value="">Seleccione</option>
                <option value="Ejército">Ejército</option>
                <option value="Armada">Armada</option>
                <option value="Aviación">Aviación</option>
                <option value="Guardia Nacional Bolivariana">Guardia Nacional Bolivariana</option>
                <option value="Milicia Bolivariana">Milicia Bolivariana</option>
              </select>
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="notificar">Notificar a</label>
          <input
            type="text"
            id="notificar"
            name="notificar"
            value={personalData.notificar || ''}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefonoContacto">Teléfono de su persona de Contacto</label>
          <input
            type="tel"
            id="telefonoContacto"
            name="telefonoContacto"
            value={personalData.telefonoContacto || ''}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="situacionLaboral">Situación Laboral</label>
          <select
            id="situacionLaboral"
            name="situacionLaboral"
            value={personalData.situacionLaboral || ''}
            onChange={handleInputChange}
            required
          >
            <option value="">Seleccione</option>
            <option value="Empleado">Empleado</option>
            <option value="Desempleado">Desempleado</option>
            <option value="Estudiante">Estudiante</option>
            <option value="Trabajador Independiente">Trabajador Independiente</option>
            <option value="Jubilado">Jubilado</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="empresa">Empresa donde Trabaja</label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            value={personalData.empresa || ''}
            onChange={handleInputChange}
            required={personalData.situacionLaboral === 'Empleado'}
          />
        </div>

        <div className="form-actions">
          <button type="submit" disabled={loading}>
            Guardar Cambios
          </button>
          <button type="button" onClick={handleCancel} disabled={loading}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Personal;