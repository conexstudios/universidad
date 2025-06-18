import React, { useEffect } from 'react';
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
  const navigate = useNavigate();

  window.addEventListener('message', function(event) {
    if (event.origin === import.meta.env.VITE_LOGIN_URL) {
      const tokenFromMessage = event.data.token;
      if (tokenFromMessage) {
      }
    }
  }, false);

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