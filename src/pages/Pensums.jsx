import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/Pensums.css';

const Pensums = () => {
    const [pensums, setPensums] = useState([]);

    useEffect(() => {
        const fetchPensums = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + '/pensums');
                const data = await response.json();
                setPensums(data);
            } catch (error) {
                console.error('Error fetching pensums:', error);
            }
        };

        fetchPensums();
    }, []);

    return (
        <div className="pensums-container">
            <h1>Pensums</h1>
            <div className="pensums-list">
                {pensums.map((pensum) => (
                    <div key={pensum.id} className="pensum-item">
                        <h2>Pensum ID: {pensum.id}</h2>
                        <p>Grado ID: {pensum.grado_id}</p>
                        <p>Materia ID: {pensum.materia_id}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pensums;
