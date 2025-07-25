import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Dashboard.css";
import Menu from "../components/Menu";
import Buscador from "../components/Buscador";
import BarraInformativa from "../components/BarraInformativa";
import WelcomeArea from "../components/WelcomeArea";
import HomeWork from "../components/HomeWork";
import Horarios from "../components/Horarios";
import Asignatura from "../components/Asignatura";

const Dashboard = () => {
  const [authToken, setAuthToken] = useState(null);
  const [messageStatus, setMessageStatus] = useState('Esperando token...');
  const navigate = useNavigate();

  useEffect(() => {
      const handleMessage = (event) => {
        // --- SEGURIDAD CRÍTICA 1: Validar el ORIGEN del mensaje ---
        // Reemplaza 'https://your-login-domain.com' con el dominio exacto
        // de tu página de inicio de sesión o servicio de autenticación.
        const trustedLoginOrigin = 'https://demouniv.conexstudios.com';
        if (event.origin !== trustedLoginOrigin) {
          console.warn('postMessage: Mensaje recibido de un origen no autorizado:', event.origin);
          setMessageStatus('Error de seguridad: Origen no autorizado.');
          return; // Ignorar mensajes de orígenes no confiables
        }
  
        // --- SEGURIDAD CRÍTICA 2: Validar el TIPO y CONTENIDO del mensaje ---
        // Asegúrate de que el mensaje es el token de autenticación que esperas.
        if (event.data && event.data.type === 'auth_success' && typeof event.data.token === 'string') {
          const receivedToken = event.data.token;
          console.log('postMessage: Token recibido en React:', receivedToken);
  
          // Almacenar el token en el estado de React
          setAuthToken(receivedToken);
          setMessageStatus('Token recibido y almacenado.');
  
          // --- Almacenamiento Persistente (Opcional, con precaución) ---
          // Si necesitas que el token persista después de recargar, puedes guardarlo en localStorage.
          // ¡CUIDADO! localStorage es vulnerable a XSS. Considera usar HttpOnly cookies si tu arquitectura lo permite.
          localStorage.setItem('jwtToken', receivedToken);
          navigate('/dashboard'); 
  
        } else {
          console.warn('postMessage: Mensaje recibido, pero no es el tipo de token esperado o el formato es incorrecto:', event.data);
          setMessageStatus('Error: Mensaje inesperado recibido.');
        }
      };
 
      window.addEventListener('message', handleMessage);
      return () => {
        window.removeEventListener('message', handleMessage);
      };
    }, []);

  return (
    <>
      <Menu />
      <main className="main-content dashboard-content">
        <Buscador />
        <WelcomeArea />
        <Horarios />
        <Asignatura />
        <HomeWork />
        <BarraInformativa />
      </main>
    </>
  );
};
 export default Dashboard;