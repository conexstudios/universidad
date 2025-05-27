import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Dashboard.css";
import Menu from "../components/Menu";
import Buscador from "../components/Buscador";
import BarraInformativa from "../components/BarraInformativa";
import WelcomeArea from "../components/WelcomeArea";
import HomeWork from "../components/HomeWork";
import Salon from "../components/Salon";
import Horario from "../components/Horario";
import Asignatura from "../components/Asignatura";

const Dashboard = () => {
  const navigate = useNavigate();

  window.addEventListener('message', function(event) {
    if (event.origin === import.meta.env.VITE_LOGIN_URL) {
      const tokenFromMessage = event.data.token;
      if (tokenFromMessage) {
      }
    }
  }, false);

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log("No se encontró token de autenticación. Redirigiendo al login.");
      navigate('/login');
    }
  };

  useEffect(() => {
    checkAuth();
  }, [navigate]);

  return (
    <>
      <Menu />
      <main className="main-content dashboard-content">
        <BarraInformativa />
        <Buscador />
        <WelcomeArea />
        <HomeWork />
        <BarraInformativa />
        <Salon />
        <Horario />
      </main>
      <Asignatura />
    </>
  );
};

export default Dashboard;

