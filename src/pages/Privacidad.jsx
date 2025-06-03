import '../styles/PrivacidadData.css';
import Menu from "../components/Menu";
import Barra from "../components/Barra";
import PrivacidadData from "../components/PrivacidadData";

const Privacidad = () => {
    return (
        <>
            <Menu />
            <Barra />
            <main className="main-content Barra-content">
            <PrivacidadData></PrivacidadData>
            </main>
        </>
    );
};

export default Privacidad;
