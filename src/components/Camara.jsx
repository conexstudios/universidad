import React, { useRef, useEffect, useState } from "react";
import "../styles/Camara.css";

const Camara = () => {
    const videoRef = useRef(null);
    const [isLive, setIsLive] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const enableStream = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    setIsLive(true);
                }
            } catch (err) {
                setError("No se pudo acceder a la cámara. Asegúrate de haber dado permiso.");
                setIsLive(false);
            }
        };

        enableStream();

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const tracks = videoRef.current.srcObject.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, []);

    const currentTime = new Date().toLocaleTimeString('es-VE', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    const currentDate = new Date().toLocaleDateString('es-VE');

    return (
        <article
            className="webcam-card"
            id="webcam-section-container"
        >
            <h3>Cámara Web</h3>
            <div className="webcam-frame">
                {isLive && <div className="live-indicator"></div>}
                {error && <p className="webcam-error-message">{error}</p>}
                {!isLive && !error && (
                        <p className="webcam-loading-message">Cargando cámara...</p>
                )}
                <video ref={videoRef} autoPlay playsInline className="webcam-video"></video>
                {isLive && (
                    <div className="webcam-overlay-info">
                        <span className="webcam-date">{currentDate}</span>
                        <span className="webcam-time">{currentTime}</span>
                    </div>
                )}
            </div>
            {!isLive && !error && (
                <p className="permission-hint">
                    Por favor, permite el acceso a la cámara en tu navegador.
                </p>
            )}
        </article>
    );
};

export default Camara;
