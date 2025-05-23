import React from "react";
import Menu from "../components/Menu";
import Camara from "../components/Camara";
import '../styles/Camara.css';

const Webcam = () => {
    return (
        <>
            <Menu></Menu>
            <main className="main-content webcam-page-content">
            <Camara></Camara>
            </main>
        </>
    );
};

export default Webcam;