import { useEffect, useState } from 'react';
import '../styles/Payrolls.css';

const Nominas = () => {
    const [nominas, setNominas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNominas = async () => {
            try {
                const apiUrl = `${import.meta.env.VITE_API_URL}/nominas`;
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    if (response.status === 401) {
                        throw new Error('No autorizado. Por favor, inicie sesión.');
                    }
                    throw new Error(`Error al cargar las nóminas: ${response.statusText}`);
                }
                const data = await response.json();
                setNominas(data);
            } catch (err) {
                setError(err.message);
                setNominas([]);
            } finally {
                setLoading(false);
            }
        };

        fetchNominas();
    }, []);

    if (loading) {
        return <div className="nominas-container">Cargando nóminas...</div>;
    }

    if (error) {
        return <div className="nominas-container error-message">Error: {error}</div>;
    }

    return (
        <div className="nominas-container">
            <h1>Lista de Nóminas</h1>
            <div className="nominas-list">
                {nominas.length > 0 ? (
                    nominas.map((nomina) => (
                        <div key={nomina.id} className="nomina-item">
                            <h2>Nómina ID: {nomina.id}</h2>
                            <p>Docente ID: {nomina.nom_docente_id || 'N/A'}</p>
                            <p>Fecha de Nómina: {nomina.nom_fecha ? new Date(nomina.nom_fecha).toLocaleDateString() : 'N/A'}</p>
                            <p>Monto: {nomina.nom_monto ? `$${parseFloat(nomina.nom_monto).toFixed(2)}` : 'N/A'}</p>
                            <p>Fecha de Pago: {nomina.nom_fecha_pago ? new Date(nomina.nom_fecha_pago).toLocaleDateString() : 'Pendiente'}</p>
                            <p>Estado: {nomina.nom_estado || 'Desconocido'}</p>
                        </div>
                    ))
                ) : (
                    <p>No hay nóminas para mostrar.</p>
                )}
            </div>
        </div>
    );
}

export default Nominas;
