import React, { useRef, useEffect, useState, useCallback } from "react";
import "../styles/Camara.css";

const Camara = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [isLive, setIsLive] = useState(false);
    const [error, setError] = useState(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const [availableCameras, setAvailableCameras] = useState([]);
    const [currentCameraId, setCurrentCameraId] = useState(null);

    const getCameraDevices = useCallback(async () => {
        try {
            const devices = await navigator.mediaDevices.enumerateDevices();
            const videoDevices = devices.filter(device => device.kind === 'videoinput');
            setAvailableCameras(videoDevices);
            if (videoDevices.length > 0) {
                const frontCamera = videoDevices.find(device =>
                    device.label.toLowerCase().includes('front') || device.label.toLowerCase().includes('user')
                );
                setCurrentCameraId(frontCamera ? frontCamera.deviceId : videoDevices[0].deviceId);
            } else {
                setError("No se encontraron cámaras de video.");
            }
        } catch (err) {
            console.error("Error enumerando dispositivos de cámara:", err);
            setError("No se pudo obtener la lista de cámaras. Asegúrate de haber dado permiso.");
        }
    }, []);

    const enableStream = useCallback(async (deviceId) => {
        setError(null);
        setIsLive(false);
        setCapturedImage(null);

        if (videoRef.current && videoRef.current.srcObject) {
            const tracks = videoRef.current.srcObject.getTracks();
            tracks.forEach(track => track.stop());
        }

        try {
            const constraints = {
                video: deviceId ? { deviceId: { exact: deviceId } } : true,
            };
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                setIsLive(true);
            }
        } catch (err) {
            console.error("Error al iniciar el stream de la cámara:", err);
            if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
                setError("Acceso a la cámara denegado. Por favor, permite el acceso en la configuración de tu navegador.");
            } else if (err.name === 'NotFoundError') {
                setError("No se encontraron cámaras disponibles. Asegúrate de tener una conectada.");
            } else {
                setError("No se pudo acceder a la cámara. Inténtalo de nuevo.");
            }
            setIsLive(false);
        }
    }, []);

    useEffect(() => {
        getCameraDevices();
    }, [getCameraDevices]);

    useEffect(() => {
        if (currentCameraId) {
            enableStream(currentCameraId);
        } else if (availableCameras.length > 0) {
            enableStream(availableCameras[0].deviceId);
        }
        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const tracks = videoRef.current.srcObject.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, [currentCameraId, availableCameras, enableStream]);

    const handleCapture = () => {
        if (videoRef.current && isLive && canvasRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageUrl = canvas.toDataURL('image/png');
            setCapturedImage(imageUrl);
        }
    };

    const switchCamera = () => {
        if (availableCameras.length > 1 && currentCameraId) {
            const currentIndex = availableCameras.findIndex(camera => camera.deviceId === currentCameraId);
            const nextIndex = (currentIndex + 1) % availableCameras.length;
            setCurrentCameraId(availableCameras[nextIndex].deviceId);
        }
    };

    const retakePhoto = () => {
        setCapturedImage(null);
    };

    const currentTime = new Date().toLocaleTimeString('es-VE', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    const currentDate = new Date().toLocaleDateString('es-VE');

    return (
        <article className="webcam-card" id="webcam-section-container">
            <h3>Cámara Web</h3>
            <div className="webcam-frame">
                {isLive && <div className="live-indicator"></div>}
                {error && <p className="webcam-error-message">{error}</p>}
                {!isLive && !error && (
                    <p className="webcam-loading-message">Cargando cámara...</p>
                )}
                {!capturedImage && (
                    <video ref={videoRef} autoPlay playsInline className="webcam-video"></video>
                )}
                {capturedImage && (
                    <img src={capturedImage} alt="Foto capturada" className="captured-image" />
                )}
                {isLive && !capturedImage && (
                    <div className="webcam-overlay-info">
                        <span className="webcam-date">{currentDate}</span>
                        <span className="webcam-time">{currentTime}</span>
                    </div>
                )}
            </div>
            <div className="webcam-controls">
                {isLive && !capturedImage && (
                    <button onClick={handleCapture}>
                        Capturar Foto
                    </button>
                )}
                {availableCameras.length > 1 && isLive && !capturedImage && (
                    <button onClick={switchCamera}>
                        Cambiar Cámara ({availableCameras.findIndex(cam => cam.deviceId === currentCameraId) + 1}/{availableCameras.length})
                    </button>
                )}
                {capturedImage && (
                    <button onClick={retakePhoto}>
                        Volver a Tomar
                    </button>
                )}
            </div>
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
            {!isLive && !error && (
                <p className="permission-hint">
                    Por favor, permite el acceso a la cámara en tu navegador.
                </p>
            )}
        </article>
    );
};

export default Camara;
