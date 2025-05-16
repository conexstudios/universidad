import { Link } from "react-router-dom";
import "../styles/ExtracurricularesData.css";
import Menu from "../components/Menu";
import ExtracurricularesData from "../components/ExtracurricularesData";

const Extracurriculares = () => {
    return (
        <>
             <Menu></Menu>
               <main className="main-content Extracurriculares-content">
              <ExtracurricularesData></ExtracurricularesData>
             </main>
        </>
    )
}

export default Extracurriculares;