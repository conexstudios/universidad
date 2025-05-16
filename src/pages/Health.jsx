import { Link } from "react-router-dom";
import "../styles/HealthData.css";
import Menu from "../components/Menu";
import HealthData from "../components/HealthData";

const Health = () => {
  return (
    <>
      <Menu></Menu>
      <main className="main-content Health-content">
        <HealthData></HealthData>
      </main>
    </>
  );
};

export default Health;
