import { useEffect, useState } from 'react';
import '../styles/Mensajeria.css';

const Mensajeria = () => {
    const [mensajes, setMensajes] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState(10);
    const [totalPaginas, setTotalPaginas] = useState(1);

    useEffect(() => {
        const fetchMensajes = async () => {
            try {
                const apiUrl = `${import.meta.env.VITE_API_URL}/mensajes?pagina=${pagina}&por_pagina=${porPagina}`;
                const response = await fetch(apiUrl);
                const data = await response.json();

                setMensajes(data);
                setTotalPaginas(5);
            } catch (error) {
                setMensajes([]);
            }
        };

        fetchMensajes();
    }, [pagina, porPagina]);

    const handlePrevPage = () => {
        setPagina((prev) => Math.max(1, prev - 1));
    };

    const handleNextPage = () => {
        setPagina((prev) => prev + 1);
    };

    const handlePorPaginaChange = (e) => {
        setPorPagina(Number(e.target.value));
        setPagina(1);
    };

    return (
        <div className="mensajeria-container">
            <h1>Mensajes</h1>

            <div className="pagination-controls">
                <label htmlFor="porPagina">Mensajes por página:</label>
                <select id="porPagina" value={porPagina} onChange={handlePorPaginaChange}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>

                <button onClick={handlePrevPage} disabled={pagina === 1}>
                    Anterior
                </button>
                <span>Página {pagina} de {totalPaginas}</span>
                <button onClick={handleNextPage} disabled={pagina >= totalPaginas}>
                    Siguiente
                </button>
            </div>

            <div className="mensajes-list">
                {mensajes.length > 0 ? (
                    mensajes.map((mensaje) => (
                        <div key={mensaje.id} className="mensaje-item">
                            <h2>Asunto: {mensaje.asunto || 'N/A'}</h2>
                            <p>De: {mensaje.email || 'N/A'}</p>
                            <p>Mensaje: {mensaje.mensaje?.substring(0, 100) + (mensaje.mensaje && mensaje.mensaje.length > 100 ? '...' : '') || 'No disponible'}</p>
                            <p>Publicado: {mensaje.publicado ? 'Sí' : 'No'}</p>
                            <p>Fecha: {new Date(mensaje.created_at).toLocaleDateString()}</p>
                        </div>
                    ))
                ) : (
                    <p>No hay mensajes para mostrar.</p>
                )}
            </div>
        </div>
    );
}

export default Mensajeria;
