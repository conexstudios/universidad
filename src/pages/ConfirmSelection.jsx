import '../styles/Confirmar.css';
import Menu from "../components/Menu";
import Confirmar from "../components/Confirmar";
import Schedule from "../components/Schedule";


const ConfirmSelection = () => {
  return (
    <>
      <Menu></Menu>
      <main className="main-content ConfirmSelection-content">
         <Confirmar></Confirmar>
         <Schedule></Schedule>
      </main>
    </>
  );
};

export default ConfirmSelection;