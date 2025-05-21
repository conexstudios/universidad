import { Link } from "react-router-dom";
import "../styles/ExtracurricularesData.css";
import Menu from "../components/Menu";
import Bar  from "../components/Bar";
import ExtracurricularesData from "../components/ExtracurricularesData";

const Extracurriculares = () => {
    return (
        <>
             <Menu></Menu>
             <Bar></Bar>
               <main className="main-content Extracurriculares-content">
              <ExtracurricularesData></ExtracurricularesData>
             </main>
        </>
    )
}

export default Extracurriculares;