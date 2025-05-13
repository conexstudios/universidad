import "../styles/Dashboard.css";
import Menu from "../components/Menu";
import Buscador from "../components/Buscador";
import BarraInformativa from "../components/BarraInformativa";
import WelcomeArea from "../components/WelcomeArea";
<<<<<<< HEAD
import Salon from "../components/Salon";
import Oro from "../components/Oro";
import Asig from "../components/Asig";
import Pen from "./Pen";

=======
import HomeWork from "../components/HomeWork";
>>>>>>> 341f101cffd5358040872dc15310f6d05c2e2a24

const Dashboard = () => {
  return (
    <>
      <Menu></Menu>
      <main className="main-content dashboard-content">
        <BarraInformativa></BarraInformativa>
        <Buscador></Buscador>
        <WelcomeArea></WelcomeArea>
<<<<<<< HEAD
        <BarraInformativa></BarraInformativa>
        <Salon></Salon>
        <Oro></Oro>
        <Asig></Asig>
        <Pen></Pen>
=======
        <HomeWork></HomeWork>
>>>>>>> 341f101cffd5358040872dc15310f6d05c2e2a24
      </main>
    </>
  );
};

export default Dashboard;
