import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Service.css';

const serviceRequestsData = [
    { id: 455481, tipo: "Confirmacion de horario", fecha: "10/05/25", moneda: "Bolívares", total: 50000.00, estatus: "Completado" },
    { id: 862796, tipo: "Inscripcion de pregrado", fecha: "05/08/25", moneda: "Bolívares", total: 100000.00, estatus: "Pendiente pago" },
    { id: 769834, tipo: "Pago aranceles", fecha: "22/11/25", moneda: "Bolívares", total: 80000.00, estatus: "Aprobado" },
];

const ServiceRequestsList = () => {
    return (
        <div className="service-requests-box">
            <h2 className="service-requests-title">Lista de Solicitudes de Servicio</h2>
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
                    {serviceRequestsData.map((request) => (
                        <tr key={request.id}>
                            <td className="request-number"><a href="#">{request.id}</a></td>
                            <td>{request.tipo}</td>
                            <td>{request.fecha}</td>
                            <td>{request.moneda}</td>
                            <td className="request-total">{request.total.toFixed(2)}</td>
                            <td>
                                {request.estatus === 'Pendiente pago' ? (
                                    <Link to={`/dashboard/order-payments/${request.id}`} className="pay-button">Pagar</Link>
                                ) : (
                                    '-'
                                )}
                            </td>
                            <td className={`request-status status-${request.estatus.toLowerCase().replace(' ', '-')}`}>
                                {request.estatus}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ServiceRequestsList;
