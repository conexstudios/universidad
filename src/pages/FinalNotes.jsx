import { useEffect, useState } from 'react';
import '../styles/FinalNotes.css';

const FinalNotes = () => {
    const [finalNotes, setFinalNotes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [idColegio, setIdColegio] = useState('');
    const [nombreFichanro, setNombreFichanro] = useState('');
    const [gradoId, setGradoId] = useState('');

    useEffect(() => {}, []);

    const fetchNotasFinales = async () => {
        setLoading(true);
        setError(null);
        try {
            const params = new URLSearchParams();
            if (idColegio) params.append('ID_COLEGIO', idColegio);
            if (nombreFichanro) params.append('NOMBRE_FICHANRO', nombreFichanro);
            if (gradoId) params.append('GRADO_ID', gradoId);

            const queryString = params.toString();
            const apiUrl = `${import.meta.env.VITE_API_URL}/notas-finales${queryString ? `?${queryString}` : ''}`;
            const response = await fetch(apiUrl);

            if (!response.ok) {
                if (response.status === 401) throw new Error('No autorizado. Por favor, inicie sesión.');
                throw new Error(`Error al cargar las notas finales: ${response.statusText || response.status}`);
            }

            const data = await response.json();
            setFinalNotes(data);
        } catch (err) {
            setError(err.message);
            setFinalNotes([]);
        } finally {
            setLoading(false);
        }
    };

    const handleClearFilters = () => {
        setIdColegio('');
        setNombreFichanro('');
        setGradoId('');
        setFinalNotes([]);
        setError(null);
    };

    return (
        <div className="final-notes-container">
            <h1>Notas Finales</h1>
            <div className="filter-controls">
                <div className="filter-input-group">
                    <label htmlFor="idColegio">ID Colegio:</label>
                    <input
                        type="text"
                        id="idColegio"
                        value={idColegio}
                        onChange={(e) => setIdColegio(e.target.value)}
                        placeholder="ID del colegio"
                    />
                </div>
                <div className="filter-input-group">
                    <label htmlFor="nombreFichanro">Nombre Fichanro:</label>
                    <input
                        type="text"
                        id="nombreFichanro"
                        value={nombreFichanro}
                        onChange={(e) => setNombreFichanro(e.target.value)}
                        placeholder="Nombre de ficha"
                    />
                </div>
                <div className="filter-input-group">
                    <label htmlFor="gradoId">ID Grado:</label>
                    <input
                        type="text"
                        id="gradoId"
                        value={gradoId}
                        onChange={(e) => setGradoId(e.target.value)}
                        placeholder="ID del grado"
                    />
                </div>
                <div className="filter-buttons">
                    <button onClick={fetchNotasFinales} disabled={loading}>
                        {loading ? 'Buscando...' : 'Ejecutar'}
                    </button>
                    <button onClick={handleClearFilters} disabled={loading} className="clear-button">
                        Limpiar
                    </button>
                </div>
            </div>
            {error && <div className="error-message">Error: {error}</div>}
            {loading && <div className="loading-message">Cargando notas finales...</div>}
            {!loading && !error && finalNotes.length === 0 && (
                <p className="no-data-message">
                    No hay notas finales para mostrar o no se ha realizado una búsqueda.
                </p>
            )}
            <div className="final-notes-list">
                {finalNotes.length > 0 && finalNotes.map((nota) => (
                    <div key={nota.id} className="note-item">
                        <h2>Nota ID: {nota.id}</h2>
                        <p><strong>Estudiante ID:</strong> {nota.est_id || 'N/A'}</p>
                        <p><strong>Asignatura ID:</strong> {nota.asig_id || 'N/A'}</p>
                        <p><strong>Período ID:</strong> {nota.per_id || 'N/A'}</p>
                        <div className="grades-summary">
                            <p><strong>P1:</strong> {nota.calif_periodo_uno || 'N/A'}</p>
                            <p><strong>P2:</strong> {nota.calif_periodo_dos || 'N/A'}</p>
                            <p><strong>P3:</strong> {nota.calif_periodo_tres || 'N/A'}</p>
                            <p><strong>P4:</strong> {nota.calif_periodo_cuatro || 'N/A'}</p>
                            <p><strong>Promedio:</strong> {parseFloat(nota.calif_promedio_final).toFixed(2) || 'N/A'}</p>
                        </div>
                        <p><strong>Estado:</strong> {nota.calif_status || 'Desconocido'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FinalNotes;
