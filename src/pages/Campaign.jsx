import React from "react";
import Menu from "../components/Menu";
import Camara from "../components/CampaignData";
import '../styles/CampaignData.css';

const Campaign = () => {
    return (
        <>
            <Menu></Menu>
            <main className="main-content Campaign-page-content">
            <Camara></Camara>
            </main>
        </>
    );
};

export default Campaign;