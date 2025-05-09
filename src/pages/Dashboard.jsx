import { Link } from "react-router-dom";
import "../styles/Dashboard.css";
import Menu from "../components/Menu";
import Buscador from "../components/Buscador";
import BarraInformativa from "../components/BarraInformativa";

const Dashboard = () => {
  return (
    <>
      <Menu></Menu>
      <main className="main-content">
        <Buscador></Buscador>
        <BarraInformativa></BarraInformativa>
      </main>
    </>
  );
};

export default Dashboard;
