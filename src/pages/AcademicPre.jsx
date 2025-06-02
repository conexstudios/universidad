import '../styles/AcademicPreferences.css';
import Menu from "../components/Menu";
import Barra from "../components/Barra";
import AcademicPreferences from "../components/AcademicPreferences";

const AcademicPre = () => {
    return (
        <>
            <Menu />
            <Barra />
            <main className="main-content Barra-content">
            <AcademicPreferences></AcademicPreferences>
            </main>
        </>
    );
};

export default AcademicPre;
