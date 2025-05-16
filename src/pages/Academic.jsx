import '../styles/AcademicData.css'
import Menu from "../components/Menu";
import AcademicData from "../components/AcademicData";

const Academic = () => {
    return (
        <>
             <Menu></Menu>
             <main className="main-content Academic-content">
             <AcademicData></AcademicData>
             </main>
        </>
    )
}

export default Academic;