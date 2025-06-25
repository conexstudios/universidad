import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/Fee.css';

const Fees = () => {
    const [fees, setFees] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFees = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + '/pagos');
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(`HTTP error! Status: ${response.status} - ${errorData.message || 'Unknown error'}`);
                }
                const data = await response.json();
                setFees(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setFees([]);
            }
        };
        fetchFees();
    }, []);

    return (
        <div className="fees-container">
            <h1>Lista de Pagos</h1>
            {error && (
                <div className="error-message">
                    <p>Error al cargar los pagos: {error}</p>
                </div>
            )}
            {fees.length === 0 && !error && (
                <div className="no-fees-message">
                    <p>No hay pagos disponibles para mostrar.</p>
                </div>
            )}
            <div className="fees-list">
                {fees.map((fee) => (
                    <div key={fee.TXXX_PAGO_ID || fee.id} className="fee-item">
                        <h2>Pago #{fee.TXXX_PAGO_ID || fee.id}</h2>
                        <p>Monto: ${fee.monto || 'N/A'}</p>
                        <p>Concepto: {fee.concepto || 'N/A'}</p>
                        <p>Fecha de Pago: {fee.fecha_pago ? new Date(fee.fecha_pago).toLocaleDateString() : 'N/A'}</p>
                        <Link to={`/fees/${fee.TXXX_PAGO_ID || fee.id}`}>Ver Detalles</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Fees;
