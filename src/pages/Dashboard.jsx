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
import useSessionStore from '../store/sessionStore';

const Dashboard = () => {
  const navigate = useNavigate();
  const setSession = useSessionStore((state) => state.setSession);
  const session = useSessionStore((state) => state.session);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  if (!session.length === 0) {
    const url = new URL(window.location.href);
    const user = url.searchParams.get('user');
    const id = url.searchParams.get('id');
    const referer = document.referrer;

    if (!user || !id) {
      setError('Faltan parámetros en la URL o no hay REFERER.');
      setLoading(false);
      return;
    }
    const formData = new FormData();
    formData.append('user', user);
    formData.append('id', id);
    formData.append('referer', referer);

    fetch(import.meta.env.VITE_LOGIN_URL, {
      method: 'POST',
      body: formData,
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) throw new Error('Error en la petición de sesión');
        return res.json();
      })
      .then((data) => {
        const sessionData = {};
        for (const key in data) {
          if (Object.hasOwnProperty.call(data, key)) {
            const element = data[key];
            sessionData[key] = element;
          }
        }
        useEffect(() => {
          for (const key of url.searchParams.keys()) {
            if (!sessionData[key]) {
              sessionData[key] = url.searchParams.get(key);
            }
          }
          setSession(sessionData);
          setLoading(false);
        }, [setSession, session]);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        document.location.href = import.meta.env.VITE_LOGIN_URL;
      });
  }
  else {
    setLoading(false);
  }

  if (loading) return <div>Cargando sesión...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Menu />
      <main className="main-content dashboard-content">
        {session && (
          <>
            <Buscador />
            <WelcomeArea />
            <Horarios />
            <Asignatura />
            <HomeWork />
            <BarraInformativa />
          </>
        )}
      </main>
    </>
  );
};
export default Dashboard;