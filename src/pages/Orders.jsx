import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/Orders.css';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + '/ordenes');
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(`HTTP error! Status: ${response.status} - ${errorData.message || 'Unknown error'}`);
                }
                const data = await response.json();
                setOrders(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setOrders([]);
            }
        };
        fetchOrders();
    }, []);

    return (
        <div className="orders-container">
            <h1>Lista de Órdenes</h1>
            {error && (
                <div className="error-message">
                    <p>Error al cargar las órdenes: {error}</p>
                    <ul>
                        <li>El servidor de la API no está corriendo o no responde.</li>
                        <li>La URL de la API es incorrecta (actualmente: {import.meta.env.VITE_API_URL}/ordenes).</li>
                        <li>Problemas de CORS en el servidor.</li>
                        <li>No hay órdenes disponibles o el formato de respuesta es incorrecto.</li>
                    </ul>
                    <p>Revisa la consola del navegador para más detalles.</p>
                </div>
            )}
            {orders.length === 0 && !error && (
                <div className="no-orders-message">
                    <p>No hay órdenes disponibles para mostrar.</p>
                </div>
            )}
            <div className="orders-list">
                {orders.map((order) => (
                    <div key={order.T410_ORDEN_ID} className="order-item">
                        <h2>Orden #{order.T410_ORDEN_ID}</h2>
                        <p>Cliente: {order.nombre_cliente || 'N/A'}</p>
                        <p>Estado: {order.estado || 'Pendiente'}</p>
                        <p>Fecha: {new Date(order.fecha_creacion).toLocaleDateString() || 'N/A'}</p>
                        <Link to={`/orders/${order.T410_ORDEN_ID}`}>Leer más</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;
