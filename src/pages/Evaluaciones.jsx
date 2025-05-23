import React from "react";
import { Link } from "react-router-dom";
import '../styles/EvaluacionesData.css';
import Menu from "../components/Menu";
import EvaluacionesData from "../components/EvaluacionesData";

const Evaluaciones = () => {
    return (
        <>
            <Menu></Menu>
            <main className="main-content evaluations-page-content">
                <EvaluacionesData></EvaluacionesData>
            </main>
        </>
    );
};

export default Evaluaciones;