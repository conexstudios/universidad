import React from 'react';
import '../styles/Service.css';

const Service = () => {
  const requestsData = [
    { id: 1, numero: "455481", tipo: "Confirmacion de horario", fecha: "10/5/25", moneda: "Bolivares", total: "50.000", estatus: "Completado" },
    { id: 2, numero: "862796", tipo: "Inscripcion de pregrado", fecha: "5/8/25", moneda: "Bolivares", total: "100.000", estatus: "Pendiente pago" },
    { id: 3, numero: "769834", tipo: "Pago aranceles", fecha: "22/11/25", moneda: "Bolivares", total: "80.000", estatus: "Aprobado" },
  ];

  return (
    <div className="service-requests-container">
      <h1>Lista de Solicitudes de Servicio</h1>
      <table className="service-requests-table">
        <thead>
          <tr>
            <th>Número</th>
            <th>Tipo</th>
            <th>Fecha Orden</th>
            <th>Moneda</th>
            <th>Total</th>
            <th>Pagar</th>
            <th>Estatus</th>
          </tr>
        </thead>
        <tbody>
          {requestsData.map((request) => (
            <tr key={request.id}>
              <td className="link">{request.numero}</td>
              <td>{request.tipo}</td>
              <td>{request.fecha}</td>
              <td>{request.moneda}</td>
              <td>{request.total}</td>
              <td>
                <button className="pay-button">Pagar</button>
              </td>
              <td>{request.estatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Service;