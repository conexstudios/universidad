import '../styles/Personal.css'
import Menu from "../components/Menu";
import Personal from "../components/Personal";

const PersonalData = () => {
    return (
        <>
            <Menu></Menu>
             <main className="main-content personaldata-content">
             <Personal></Personal>
             </main>
             
        </>
    )
}

export default PersonalData;