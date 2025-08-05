import React from 'react';
import '../styles/Receipt.css';

const Receipt = ({ factura, formData, onEnviarPago }) => {
  const calcularTotal = () => {
    if (factura?.materias?.length > 0) {
      return factura.materias.reduce((total, materia) => total + (parseFloat(materia.precio) || 0), 0);
    }
    return 0;
  };

  const total = calcularTotal();

  return (
    <div className="receipt-container">
      <h2>Resumen de Pago</h2>
      <table className="receipt-table">
        <tbody>
          <tr>
            <td>Fecha</td>
            <td>{factura?.fecha || 'No disponible'}</td>
          </tr>
          <tr>
            <td>Hora</td>
            <td>{factura?.hora || 'No disponible'}</td>
          </tr>
          
          {factura?.materias?.length > 0 ? (
            factura.materias.map((materia, index) => (
              <tr key={index}>
                <td>{materia.nombre || 'Materia'}</td>
                <td>${parseFloat(materia.precio || 0).toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No hay materias registradas</td>
            </tr>
          )}
          
          <tr>
            <td>Cuenta del Destino:</td>
            <td>{factura?.cuentaDestino || 'No especificado'}</td>
          </tr>
          <tr>
            <td>Cuenta de Origen:</td>
            <td>{factura?.cuentaOrigen || 'No especificado'}</td>
          </tr>
          <tr>
            <td colSpan="2" className="icons">
              <span role="img" aria-label="bank-icon">🏦</span>
              <span role="img" aria-label="card-icon">💳</span>
            </td>
          </tr>
          <tr className="total-row">
            <td>Total:</td>
            <td>${total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <div className="receipt-actions">
        <button 
          type="button" 
          className="send-payment-button"
          onClick={onEnviarPago}
          disabled={total <= 0 || !factura?.cuentaOrigen}
        >
          Enviar Pago
        </button>
      </div>
    </div>
  );
};

export default Receipt;