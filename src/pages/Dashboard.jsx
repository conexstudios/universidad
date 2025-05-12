import "../styles/Dashboard.css";
import Menu from "../components/Menu";
import Buscador from "../components/Buscador";
import BarraInformativa from "../components/BarraInformativa";
import WelcomeArea from "../components/WelcomeArea";
import Salon from "../components/Salon";
import Oro from "../components/Oro";
import Asig from "../components/Asig";
import Pen from "./Pen";


const Dashboard = () => {
  return (
    <>
      <Menu></Menu>
      <main className="main-content">
        <Buscador></Buscador>
        <WelcomeArea></WelcomeArea>
        <BarraInformativa></BarraInformativa>
        <Salon></Salon>
        <Oro></Oro>
        <Asig></Asig>
        <Pen></Pen>
      </main>
    </>
  );
};

export default Dashboard;
