import "../styles/Dashboard.css";
import Menu from "../components/Menu";
import Buscador from "../components/Buscador";
import BarraInformativa from "../components/BarraInformativa";
import WelcomeArea from "../components/WelcomeArea";
<<<<<<< HEAD
import HomeWork from "../components/HomeWork";
=======
>>>>>>> 4d6e9e654fda8744fbfff6ab5b12c2b7ab61cca1
import Salon from "../components/Salon";
import Oro from "../components/Oro";
import Asignatura from "../components/Asignatura";
import Pen from "./Pen";

const Dashboard = () => {
  return (
    <>
      <Menu></Menu>
      <main className="main-content dashboard-content">
        <BarraInformativa></BarraInformativa>
        <Buscador></Buscador>
        <WelcomeArea></WelcomeArea>
<<<<<<< HEAD
        <HomeWork></HomeWork>
        <BarraInformativa></BarraInformativa>
        <Salon></Salon>
        <Oro></Oro>
=======
        <BarraInformativa></BarraInformativa>
        <Salon></Salon>
        <Oro></Oro>
        <Asignatura></Asignatura>
        <Pen></Pen>
>>>>>>> 4d6e9e654fda8744fbfff6ab5b12c2b7ab61cca1
      </main>
      <Asig></Asig>
      <Pen></Pen>
    </>
  );
};

export default Dashboard;
