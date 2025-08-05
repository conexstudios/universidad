import { useState, useEffect } from "react";
import { useFetchWithSession } from '../store/fetchWithSession';
import useSessionStore from '../store/sessionStore';
import { Link } from "react-router-dom";
import "../styles/Service.css";
import useCatalogStore from "../store/catalogStore";

const ServiceRequestsList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const session = useSessionStore((state) => state.session);
  const fetchWithSession = useFetchWithSession();
  const catalog = useCatalogStore((state) => state.catalog);

  const fetchOrders = async () => {
    if (!session?.user) {
      setError("No hay una sesión activa");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const params = new URLSearchParams({
        NOM_FICHANRO: session.NOM_FICHANRO
      });
      
      const apiUrl = `${import.meta.env.VITE_API_URL}/ordenes?${params.toString()}`;
      const response = await fetchWithSession(apiUrl);
      
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("No autorizado. Por favor, inicie sesión.");
        }
        throw new Error(`Error al cargar las órdenes: ${response.statusText}`);
      }
      
      const json = await response.json();
      
      if (!json.data || json.data.length === 0) {
        setOrders([]);
        return;
      }
      
      setOrders(json.data.data);
    } catch (error) {
      console.error("Error al cargar las órdenes:", error);
      setError(error.message || "Error al cargar las órdenes. Por favor, intente de nuevo más tarde.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const formatCurrency = (amount, currency = 'USD') => {
    return new Intl.NumberFormat('es-VE', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  const getStatusBadge = (status) => {
    const statusClasses = {
      'pendiente': 'status-pending',
      'pagado': 'status-paid',
      'procesando': 'status-processing',
      'completado': 'status-completed',
      'cancelado': 'status-cancelled'
    };
    
    const statusText = status?.toLowerCase() || 'desconocido';
    const className = statusClasses[statusText] || 'status-default';
    
    return (
      <span className={`status-badge ${className}`}>
        {statusText.charAt(0).toUpperCase() + statusText.slice(1)}
      </span>
    );
  };

  return (
    <div className="service-requests-container">
      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Cargando órdenes de servicio...</p>
        </div>
      )}
      {error && (
        <div className="error-container">
          <p className="error-message">{error}</p>
          <button 
            className="retry-button"
            onClick={fetchOrders}
          >
            Reintentar
          </button>
        </div>
      )}
      <div className="service-requests-header">
        <h2 className="service-requests-title">
          Lista de Solicitudes de Servicio
        </h2>
        <button 
          className="refresh-button"
          onClick={fetchOrders}
          disabled={loading}
        >
          {loading ? 'Actualizando...' : 'Actualizar'}
        </button>
      </div>
      
      <div className="table-responsive">
        <table className="service-requests-table">
          <thead>
            <tr>
              <th>Número</th>
              <th>Tipo</th>
              <th>Fecha</th>
              <th>Moneda</th>
              <th>Total</th>
              <th>Acciones</th>
              <th>Estatus</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="7" className="no-orders">
                  No hay órdenes de servicio disponibles.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order.id} className="order-row">
                  <td>#{order.id}</td>
                  <td>{order.tipo || 'N/A'}</td>
                  <td>{order.fecha_orden ? new Date(order.fecha_orden).toLocaleDateString() : 'N/A'}</td>
                  <td>{order.moneda || 'USD'}</td>
                  <td>{formatCurrency(order.total || 0, order.moneda)}</td>
                  <td>
                    {order.pagar ? (
                      <Link 
                        to={`/pagar/${order.id}`} 
                        className="pay-button"
                        title="Pagar esta orden"
                      >
                        Pagar
                      </Link>
                    ) : (
                      <span className="no-payment">No disponible</span>
                    )}
                    <Link 
                      to={`/orden/${order.id}`} 
                      className="details-link"
                      title="Ver detalles"
                    >
                      Detalles
                    </Link>
                  </td>
                  <td>
                    {getStatusBadge(order.estatus)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      <div className="service-requests-footer">
        <p>Mostrando {orders.length} órdenes</p>
      </div>
    </div>
  );
};

export default ServiceRequestsList;