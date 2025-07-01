import { useEffect, useState } from 'react';
import '../styles/Customer.css';

const CustomerOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            setLoading(true);
            setError(null);
            try {
                const apiUrl = `${import.meta.env.VITE_API_URL}/ordenes`;
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error('No se encontraron órdenes.');
                    }
                    throw new Error(`Error al cargar las órdenes: ${response.statusText || response.status}`);
                }
                const data = await response.json();
                setOrders(data);
            } catch (err) {
                setError(err.message);
                setOrders([]);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) {
        return <div className="customer-orders-container loading-message">Cargando órdenes de clientes...</div>;
    }

    if (error) {
        return <div className="customer-orders-container error-message">Error: {error}</div>;
    }

    return (
        <div className="customer-orders-container">
            <h1>Órdenes de Clientes</h1>
            <div className="orders-list">
                {orders.length > 0 ? (
                    orders.map((order) => (
                        <div key={order.id} className="order-item">
                            <h2>Orden ID: {order.id || 'N/A'}</h2>
                            <p>Cliente ID: {order.cliente_id || 'N/A'}</p>
                            <p>Fecha de Orden: {order.fecha_orden ? new Date(order.fecha_orden).toLocaleDateString() : 'N/A'}</p>
                            <p>Monto Total: {order.monto_total ? `$${parseFloat(order.monto_total).toFixed(2)}` : 'N/A'}</p>
                            <p>Estado: {order.estado || 'Desconocido'}</p>
                        </div>
                    ))
                ) : (
                    <p className="no-data-message">No hay órdenes de clientes para mostrar.</p>
                )}
            </div>
        </div>
    );
}

export default CustomerOrders;
