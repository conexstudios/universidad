import '../styles/Personal.css'
import Menu from "../components/Menu";
import Bar  from "../components/Bar";
import Personal from "../components/Personal";

const PersonalData = () => {
    return (
        <>
            <Menu></Menu>
            <Bar></Bar>
             <main className="main-content personaldata-content">
             <Personal></Personal>
             </main>
             
        </>
    )
}

export default PersonalData;