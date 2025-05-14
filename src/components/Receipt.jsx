import React from 'react';
import '../styles/Receipt.css';

const Receipt = () => {
  return (
    <div className="receipt-container">
      <table className="receipt-table">
        <tbody>
          <tr>
            <td>Fecha</td>
            <td>5 de Mayo del 2025</td>
          </tr>
          <tr>
            <td>Hora</td>
            <td>9:30 a.m.</td>
          </tr>
          <tr>
            <td>Matemáticas</td>
            <td>100$</td>
          </tr>
          <tr>
            <td>Inglés</td>
            <td>100$</td>
          </tr>
          <tr>
            <td>Cuenta del Destino:</td>
            <td>Banesco</td>
          </tr>
          <tr>
            <td>Cuenta de Origen:</td>
            <td>Merantil</td>
          </tr>
          <tr>
            <td colSpan="2" className="icons">
              <span role="img" aria-label="bank-icon">🏦</span>
              <span role="img" aria-label="card-icon">💳</span>
            </td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>200$</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Receipt;