import { Link } from "react-router-dom";
import '../styles/DateTime.css'
import Menu from "../components/Menu";
import DateTime from "../components/DateTime";
const Date = () => {
    return (
        <>
            <Menu></Menu>
             <main className="main-content Load-content">
                <DateTime></DateTime>
             </main>
        </>
    )
}

export default Date;