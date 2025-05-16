import React from 'react';
import '../styles/Personal.css';

const Personal = () => {
  return (
    <div className="personal-container">
      <h1>Datos Personales</h1>
      <form className="personal-form">
        <div className="form-group">
          <label htmlFor="nombres">Nombres</label>
          <input type="text" id="nombres" name="nombres" />
        </div>
        <div className="form-group">
          <label htmlFor="apellidos">Apellidos</label>
          <input type="text" id="apellidos" name="apellidos" />
        </div>
        <div className="form-group">
          <label htmlFor="cedula">Cédula de identidad</label>
          <input type="text" id="cedula" name="cedula" />
        </div>
        <div className="form-group">
          <label htmlFor="fecha-nacimiento">Fecha de Nacimiento</label>
          <input type="date" id="fecha-nacimiento" name="fecha-nacimiento" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono celular</label>
          <input type="text" id="telefono" name="telefono" />
        </div>
        <div className="form-group">
          <label htmlFor="sexo">Sexo</label>
          <select id="sexo" name="sexo">
            <option value="">Seleccione</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="estado-civil">Estado Civil</label>
          <select id="estado-civil" name="estado-civil">
            <option value="">Seleccione</option>
            <option value="soltero">Soltero</option>
            <option value="casado">Casado</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="discapacidad">¿Discapacidad?</label>
          <input type="checkbox" id="discapacidad" name="discapacidad" />
        </div>
        <div className="form-group">
          <label htmlFor="tipo-discapacidad">Tipo de discapacidad</label>
          <select id="tipo-discapacidad" name="tipo-discapacidad">
            <option value="">Seleccione</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="codigo-discapacidad">Código de discapacidad</label>
          <input type="text" id="codigo-discapacidad" name="codigo-discapacidad" />
        </div>
        <div className="form-group">
          <label htmlFor="militar-activo">¿Militar Activo?</label>
          <input type="checkbox" id="militar-activo" name="militar-activo" />
        </div>
        <div className="form-group">
          <label htmlFor="componente-militar">Componente Militar</label>
          <select id="componente-militar" name="componente-militar">
            <option value="">Seleccione</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="notificar">Notificar a</label>
          <input type="text" id="notificar" name="notificar" />
        </div>
        <div className="form-group">
          <label htmlFor="telefono-contacto">Teléfono de su persona de Contacto</label>
          <input type="text" id="telefono-contacto" name="telefono-contacto" />
        </div>
        <div className="form-group">
          <label htmlFor="situacion-laboral">Situación Laboral</label>
          <select id="situacion-laboral" name="situacion-laboral">
            <option value="">Seleccione</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="empresa">Empresa donde Trabaja</label>
          <input type="text" id="empresa" name="empresa" />
        </div>
        <div className="form-actions">
          <button type="submit" className="save-button">Guardar Cambios</button>
          <button type="button" className="cancel-button">Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default Personal;