import { Link } from "react-router-dom";
import '../styles/LoadFile.css'
import Menu from "../components/Menu";
import LoadFile from "../components/LoadFile";
const Load = () => {
    return (
        <>
            <Menu></Menu>
             <main className="main-content Load-content"></main>
             <LoadFile></LoadFile>

        </>
    )
}

export default Load;