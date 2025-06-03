import '../styles/AparienciaData.css';
import Menu from "../components/Menu";
import Barra from "../components/Barra";
import AparienciaData from "../components/AparienciaData";

const Apariencia = () => {
    return (
        <>
            <Menu />
            <Barra />
            <main className="main-content Barra-content">
            <AparienciaData></AparienciaData>
            </main>
        </>
    );
};

export default Apariencia;
