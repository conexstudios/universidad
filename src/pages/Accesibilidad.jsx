import '../styles/AccesibilidadData.css';
import Menu from "../components/Menu";
import Barra from "../components/Barra";
import AccesibilidadData from "../components/AccesibilidadData";

const Accesibilidad = () => {
    return (
        <>
            <Menu />
            <Barra />
            <main className="main-content Barra-content">
            <AccesibilidadData></AccesibilidadData>
            </main>
        </>
    );
};

export default Accesibilidad;
