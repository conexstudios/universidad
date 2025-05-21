import '../styles/AcademicData.css'
import Menu from "../components/Menu";
import Bar  from "../components/Bar";
import AcademicData from "../components/AcademicData";

const Academic = () => {
    return (
        <>
             <Menu></Menu>
             <Bar></Bar>
             <main className="main-content Academic-content">
             <AcademicData></AcademicData>
             </main>
        </>
    )
}

export default Academic;