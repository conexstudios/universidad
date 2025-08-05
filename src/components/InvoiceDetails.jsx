import React from 'react';
import '../styles/InvoiceDetails.css';

const InvoiceDetails = ({ formData, onInputChange, onSubmit }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    onInputChange(name, type === 'checkbox' ? checked : value);
  };

  return (
    <div className="invoice-details-container">
      <h1>Detalles de Pago</h1>
      <form className="invoice-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            value={formData.nombre || ''}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input 
            type="text" 
            id="apellido" 
            name="apellido" 
            value={formData.apellido || ''}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="documento">Documento de identidad</label>
          <input 
            type="text" 
            id="documento" 
            name="documento" 
            value={formData.documento || ''}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input 
            type="tel" 
            id="telefono" 
            name="telefono" 
            value={formData.telefono || ''}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="correo">Correo electrónico</label>
          <input 
            type="email" 
            id="correo" 
            name="correo" 
            value={formData.correo || ''}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="direccion">Dirección</label>
          <input 
            type="text" 
            id="direccion" 
            name="direccion" 
            value={formData.direccion || ''}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="banco">Banco de Origen</label>
          <select 
            id="banco" 
            name="banco" 
            value={formData.banco || ''}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un banco</option>
            <option value="Banesco">Banesco</option>
            <option value="Mercantil">Mercantil</option>
            <option value="Venezuela">Banco de Venezuela</option>
            <option value="Bancaribe">Bancaribe</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="monto">Monto a Pagar</label>
          <div className="input-with-symbol">
            <span className="currency-symbol">$</span>
            <input 
              type="number" 
              id="monto" 
              name="monto" 
              value={formData.monto || ''}
              onChange={handleChange}
              placeholder="0.00" 
              step="0.01"
              min="0"
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="referencia">Número de Referencia</label>
          <input 
            type="text" 
            id="referencia" 
            name="referencia" 
            value={formData.referencia || ''}
            onChange={handleChange}
            placeholder="Ej: 1234567890"
            required
          />
        </div>
        
        <div className="form-actions">
          <button type="submit" className="submit-button">
            Confirmar Pago
          </button>
        </div>
      </form>
    </div>
  );
};

export default InvoiceDetails;