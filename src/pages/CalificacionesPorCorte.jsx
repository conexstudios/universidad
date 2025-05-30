import React from "react";
import { Link } from "react-router-dom";
import '../styles/StudentData.css'
import Menu from "../components/Menu";
import StudentData from "../components/StudentData";

const CalificacionesPorCorte = () => {
    return (
        <>
            <Menu></Menu>
             <main className="main-content Calificaciones-Por-Corte-content">
                <StudentData></StudentData>
            </main>
        </>
    )
}

export default CalificacionesPorCorte;