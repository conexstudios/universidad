import React, { use } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Service.css";

const ServiceRequestsList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const apiUrl = `${import.meta.env.VITE_API_URL}/ordenes`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          if (response.status === 401) {
            throw new Error("No autorizado. Por favor, inicie sesión.");
          }
          throw new Error(
            `Error al cargar las órdenes: ${response.statusText}`
          );
        }
        const json = await response.json();

        if (json.length === 0) {
          throw new Error("No se encontraron órdenes.");
        }
        console.log("Órdenes obtenidas:", json);
        setOrders(json.data);
      } catch (error) {
        console.error("Error al cargar las órdenes:", error);
        alert("Error al cargar las órdenes. Por favor, inténtelo más tarde.");
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="service-requests-box">
      <h2 className="service-requests-title">
        Lista de Solicitudes de Servicio
      </h2>
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
          {orders.map((request) => (
            <tr key={request.id}>
              <td className="request-number">
                <a href="#">{request.id}</a>
              </td>
              <td>{request.tipo}</td>
              <td>{request.fecha}</td>
              <td>{request.moneda}</td>
              <td className="request-total">{request.total.toFixed(2)}</td>
              <td>
                {request.estatus === "Pendiente pago" ? (
                  <Link
                    to={`/dashboard/order-payments/${request.id}`}
                    className="pay-button"
                  >
                    Pagar
                  </Link>
                ) : (
                  "-"
                )}
              </td>
              <td
                className={`request-status status-${request.estatus
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
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
