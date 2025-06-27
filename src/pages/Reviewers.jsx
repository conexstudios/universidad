import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/Reviewers.css';

const Reviewers = () => {
    const [reviewers, setReviewers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviewers = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + '/revisores');
                if (!response.ok) {
                    let errorMsg = `HTTP error! Status: ${response.status}`;
                    try {
                        const errorData = await response.json();
                        errorMsg += ` - ${errorData.message || JSON.stringify(errorData)}`;
                    } catch (jsonError) {
                        errorMsg += ` - ${response.statusText || 'Unknown error format'}`;
                    }
                    throw new Error(errorMsg);
                }
                const data = await response.json();
                setReviewers(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setReviewers([]);
                console.error("Error fetching reviewers:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchReviewers();
    }, []);

    return (
        <div className="reviewers-container">
            <h1>Lista de Revisores</h1>
            {loading && <div className="loading-message"><p>Cargando revisores...</p></div>}
            {error && (
                <div className="error-message">
                    <p>Error al cargar los revisores: {error}</p>
                    <ul>
                        <li>Asegúrate de que el servidor de la API esté corriendo en `{import.meta.env.VITE_API_URL}`.</li>
                        <li>Verifica la URL del endpoint: La API espera `{import.meta.env.VITE_API_URL}/api/revisores`.</li>
                        <li>Confirma que las configuraciones de CORS en el backend permiten solicitudes desde `http://localhost:5173`.</li>
                        <li>El formato de respuesta de la API debe ser JSON válido, no HTML.</li>
                    </ul>
                    <p>Revisa la consola del navegador (F12) para más detalles técnicos.</p>
                </div>
            )}
            {!loading && reviewers.length === 0 && !error && (
                <div className="no-reviewers-message">
                    <p>No hay revisores disponibles para mostrar.</p>
                </div>
            )}
            {!loading && reviewers.length > 0 && (
                <div className="reviewers-list">
                    {reviewers.map((reviewer) => (
                        <div key={reviewer.TXXX_REVISOR_ID || reviewer.id} className="reviewer-item">
                            <h2>Revisor #{reviewer.TXXX_REVISOR_ID || reviewer.id}</h2>
                            <p>Nombre: {reviewer.nombre_revisor || 'N/A'}</p>
                            <p>Email: {reviewer.email_revisor || 'N/A'}</p>
                            <p>Especialidad: {reviewer.especialidad_revisor || 'N/A'}</p>
                            <Link to={`/reviewers/${reviewer.TXXX_REVISOR_ID || reviewer.id}`}>Ver Detalles</Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Reviewers;
