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
import create from 'zustand';

const useSessionStore = create((set) => ({
  session: null,
  setSession: (sessionData) => set({ session: sessionData }),
}));

const Dashboard = () => {
  const navigate = useNavigate();
  const setSession = useSessionStore((state) => state.setSession);
  const session = useSessionStore((state) => state.session);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (session) {
      setLoading(false);
      return;
    }
    const url = new URL(window.location.href);
    const user = url.searchParams.get('user');
    const id = url.searchParams.get('id');
    const referer = document.referrer;

    if (!user || !id || !referer) {
      setError('Faltan parámetros en la URL o no hay REFERER.');
      setLoading(false);
      return;
    }

    fetch(referer, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, id }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Error en la petición de sesión');
        return res.json();
      })
      .then((data) => {
        setSession(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [setSession, session]);

  if (loading) return <div>Cargando sesión...</div>;
  if (error) return <div>Error: {error}</div>;

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