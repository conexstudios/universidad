import "../styles/Dashboard.css";
import Menu from "../components/Menu";
import Buscador from "../components/Buscador";
import BarraInformativa from "../components/BarraInformativa";
import WelcomeArea from "../components/WelcomeArea";
import HomeWork from "../components/HomeWork";
import Salon from "../components/Salon";
import Horario from "../components/Horario";
import Asignatura from "../components/Asignatura";
import Pen from "./Pen";

const Dashboard = () => {
  window.addEventListener('message', function(event) {
    if (event.origin === import.meta.env.VITE_LOGIN_URL) {
      const token = event.data.token;
      document.cookie = `authToken=${token}; secure; httpOnly; path=/; domain=${document.location.href}; samesite=Lax`;
    }
  }, false);

   function checkAuth() {
    const loginUrl = import.meta.env.VITE_LOGIN_URL
    const token = localStorage.getItem('token')
    if (!token) {
      return document.location.href = loginUrl
    } 
  } 
  
  checkAuth()
  return (
    <>
      <Menu></Menu>
      <main className="main-content dashboard-content">
        <BarraInformativa></BarraInformativa>
        <Buscador></Buscador>
        <WelcomeArea></WelcomeArea>
        <HomeWork></HomeWork>
        <BarraInformativa></BarraInformativa>
      </main>
      <Salon></Salon>
      <Horario></Horario>
      <Asignatura></Asignatura>
      <Pen></Pen>
    </>
  );
};

export default Dashboard;
