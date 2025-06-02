import { Link } from "react-router-dom";
import '../styles/Barra.css'
import Menu from "../components/Menu";
import Barra from "../components/Barra";


const Configuracion = () => {
  return (
    <>
      <Menu></Menu>
      <main className="main-content Barra-content">
       <Barra></Barra>
      </main>
    </>
  );
};

export default Configuracion;
