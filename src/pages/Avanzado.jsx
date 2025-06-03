import '../styles/AvanzadoData.css';
import Menu from "../components/Menu";
import Barra from "../components/Barra";
import AvanzadoData from "../components/AvanzadoData";

const Avanzado = () => {
    return (
        <>
            <Menu />
            <Barra />
            <main className="main-content Barra-content">
            <AvanzadoData></AvanzadoData>
            </main>
        </>
    );
};

export default Avanzado;
