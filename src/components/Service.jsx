import { useState, useEffect } from "react";
import { useFetchWithSession } from '../store/fetchWithSession';
import useSessionStore from '../store/sessionStore';
import { Link } from "react-router-dom";
import "../styles/Service.css";
import { getDecadeLabel } from "react-calendar/src/shared/dates.js";

const ServiceRequestsList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchWithSession = useFetchWithSession();
    const fetchOrders = async () => {
      try {
        if (!session) return;
        const params = new URLSearchParams({
          user: session.user,
          id: session.id,
        });
        const apiUrl = `${import.meta.env.VITE_API_URL}/ordenes?${params.toString()}`;
        const response = await fetchWithSession(apiUrl);
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
        console.log("Órdenes cargadas:", json.data);
        setOrders(json.data);
      } catch (error) {
        console.error("Error al cargar las órdenes:", error);
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
          {
            orders.length === 0 && (
              <tr>
                <td colSpan="7" className="no-orders">
                  No hay órdenes disponibles.
                </td>
              </tr>
            ) || (
              orders.data.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.tipo}</td>
                  <td>{new Date(order.fecha_orden).toLocaleDateString()}</td>
                  <td>{order.moneda}</td>
                  <td>{order.total.toFixed(2)}</td>
                  <td>
                    {order.pagar ? (
                      <Link to={`/pagar/${order.id}`} className="pay-link">
                        Pagar
                      </Link>
                    ) : (
                      "No disponible"
                    )}
                  </td>
                  <td>{order.estatus}</td>
                </tr>
              ))
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default ServiceRequestsList;
