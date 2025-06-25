import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + '/revisiones');
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
                setReviews(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setReviews([]);
                console.error("Error fetching reviews:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchReviews();
    }, []);

    return (
        <div className="reviews-container">
            <h1>Lista de Revisiones</h1>
            {loading && <div className="loading-message"><p>Cargando revisiones...</p></div>}
            {error && (
                <div className="error-message">
                    <p>Error al cargar las revisiones: {error}</p>
                    <ul>
                        <li>Asegúrate de que el servidor de la API esté corriendo en `{import.meta.env.VITE_API_URL}`.</li>
                        <li>Verifica la URL del endpoint: La API espera `{import.meta.env.VITE_API_URL}/api/revisiones`.</li>
                        <li>Confirma que las configuraciones de CORS en el backend permiten solicitudes desde `http://localhost:5173`.</li>
                        <li>El formato de respuesta de la API debe ser JSON válido, no HTML.</li>
                    </ul>
                    <p>Revisa la consola del navegador (F12) para más detalles técnicos.</p>
                </div>
            )}
            {!loading && reviews.length === 0 && !error && (
                <div className="no-reviews-message">
                    <p>No hay revisiones disponibles para mostrar.</p>
                </div>
            )}
            {!loading && reviews.length > 0 && (
                <div className="reviews-list">
                    {reviews.map((review) => (
                        <div key={review.TXXX_REVISION_ID || review.id} className="review-item">
                            <h2>Revisión #{review.TXXX_REVISION_ID || review.id}</h2>
                            <p>Título de Publicación: {review.titulo_publicacion || 'N/A'}</p>
                            <p>Estado: {review.estado || 'Pendiente'}</p>
                            <p>Fecha de Revisión: {review.fecha_revision ? new Date(review.fecha_revision).toLocaleDateString() : 'N/A'}</p>
                            <p>Revisor: {review.nombre_revisor || 'N/A'}</p>
                            <Link to={`/reviews/${review.TXXX_REVISION_ID || review.id}`}>Ver Detalles</Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Reviews;
