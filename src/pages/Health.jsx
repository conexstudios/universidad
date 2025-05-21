import { Link } from "react-router-dom";
import "../styles/HealthData.css";
import Menu from "../components/Menu";
import Bar  from "../components/Bar";
import HealthData from "../components/HealthData";

const Health = () => {
  return (
    <>
      <Menu></Menu>
      <Bar></Bar>
      <main className="main-content Health-content">
        <HealthData></HealthData>
      </main>
    </>
  );
};

export default Health;
