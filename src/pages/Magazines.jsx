import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/Magazines.css';

const Magazines = () => {
    const [magazines, setMagazines] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMagazines = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + '/revistas');
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
                setMagazines(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setMagazines([]);
                console.error("Error fetching magazines:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchMagazines();
    }, []);

    return (
        <div className="magazines-container">
            <h1>Lista de Revistas</h1>
            {loading && <div className="loading-message"><p>Cargando revistas...</p></div>}
            {error && (
                <div className="error-message">
                    <p>Error al cargar las revistas: {error}</p>
                    <ul>
                        <li>Asegúrate de que el servidor de la API esté corriendo en `{import.meta.env.VITE_API_URL}`.</li>
                        <li>Verifica la URL del endpoint: La API espera `{import.meta.env.VITE_API_URL}/api/revistas`.</li>
                        <li>Confirma que las configuraciones de CORS en el backend permiten solicitudes desde `http://localhost:5173`.</li>
                        <li>El formato de respuesta de la API debe ser JSON válido, no HTML.</li>
                    </ul>
                    <p>Revisa la consola del navegador (F12) para más detalles técnicos.</p>
                </div>
            )}
            {!loading && magazines.length === 0 && !error && (
                <div className="no-magazines-message">
                    <p>No hay revistas disponibles para mostrar.</p>
                </div>
            )}
            {!loading && magazines.length > 0 && (
                <div className="magazines-list">
                    {magazines.map((magazine) => (
                        <div key={magazine.TXXX_REVISTA_ID || magazine.id} className="magazine-item">
                            <h2>Revista #{magazine.TXXX_REVISTA_ID || magazine.id}</h2>
                            <p>Título: {magazine.titulo || 'N/A'}</p>
                            <p>ISSN: {magazine.issn || 'N/A'}</p>
                            <p>Fecha de Publicación: {magazine.fecha_publicacion ? new Date(magazine.fecha_publicacion).toLocaleDateString() : 'N/A'}</p>
                            <p>Editor: {magazine.editor || 'N/A'}</p>
                            <Link to={`/magazines/${magazine.TXXX_REVISTA_ID || magazine.id}`}>Ver Detalles</Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Magazines;