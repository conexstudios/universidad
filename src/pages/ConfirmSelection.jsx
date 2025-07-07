import '../styles/Confirmar.css';
import Menu from "../components/Menu";
import Confirmar from "../components/Confirmar";


const ConfirmSelection = () => {
  return (
    <>
      <Menu></Menu>
      <main className="main-content ConfirmSelection-content">
         <Confirmar></Confirmar>
      </main>
    </>
  );
};

export default ConfirmSelection;