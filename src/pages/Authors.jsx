import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/Authors.css';

const Authors = () => {
    const [authors, setAuthors] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + '/autores');
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
                setAuthors(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setAuthors([]);
                console.error("Error fetching authors:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchAuthors();
    }, []);

    return (
        <div className="authors-container">
            <h1>Lista de Autores</h1>
            {loading && <div className="loading-message"><p>Cargando autores...</p></div>}
            {error && (
                <div className="error-message">
                    <p>Error al cargar los autores: {error}</p>
                    <ul>
                        <li>Asegúrate de que el servidor de la API esté corriendo en `{import.meta.env.VITE_API_URL}`.</li>
                        <li>Verifica la URL del endpoint: `{import.meta.env.VITE_API_URL}/api/autores`.</li>
                        <li>Confirma que las configuraciones de CORS en el backend permiten solicitudes desde `http://localhost:5173`.</li>
                        <li>El formato de respuesta de la API debe ser JSON válido.</li>
                    </ul>
                    <p>Revisa la consola del navegador (F12) para más detalles técnicos.</p>
                </div>
            )}
            {!loading && authors.length === 0 && !error && (
                <div className="no-authors-message">
                    <p>No hay autores disponibles para mostrar.</p>
                </div>
            )}
            {!loading && authors.length > 0 && (
                <div className="authors-list">
                    {authors.map((author) => (
                        <div key={author.TXXX_AUTOR_ID || author.id} className="author-item">
                            <h2>{author.nombre_completo || author.nombre || 'Autor Desconocido'}</h2>
                            <p>Email: {author.email || 'N/A'}</p>
                            <p>Afiliación: {author.afiliacion || 'N/A'}</p>
                            <Link to={`/authors/${author.TXXX_AUTOR_ID || author.id}`}>Ver Perfil</Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Authors;
