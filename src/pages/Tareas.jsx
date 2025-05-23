import React from "react";
import { Link } from "react-router-dom"; 
import '../styles/TareasData.css';
import Menu from "../components/Menu";
import TareasData from "../components/TareasData"; 

const Tareas = () => {
    return (
        <>
           <Menu></Menu>
            <main className="main-content tasks-page-content">
                <TareasData /> 
            </main>
        </>
    );
};

export default Tareas;