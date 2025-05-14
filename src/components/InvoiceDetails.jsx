import React from 'react';
import '../styles/InvoiceDetails.css';

const InvoiceDetails = () => {
  return (
    <div className="invoice-details-container">
      <h1>Detalles de Facturación</h1>
      <form className="invoice-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input type="text" id="apellido" name="apellido" />
        </div>
        <div className="form-group">
          <label htmlFor="documento">Documento de identidad</label>
          <input type="text" id="documento" name="documento" />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input type="text" id="telefono" name="telefono" />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Dirección de correo electrónico</label>
          <input type="email" id="correo" name="correo" />
        </div>
        <div className="form-group">
          <label htmlFor="direccion">Dirección</label>
          <input type="text" id="direccion" name="direccion" />
        </div>
        <div className="form-group">
          <label htmlFor="banco">Banco</label>
          <input type="text" id="banco" name="banco" />
        </div>
        <div className="form-group">
          <label htmlFor="referencia">Referencia</label>
          <input type="text" id="referencia" name="referencia" />
        </div>
      </form>
    </div>
  );
};

export default InvoiceDetails;