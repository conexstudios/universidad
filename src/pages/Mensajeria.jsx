import { Link } from "react-router-dom";
import '../styles/Mensajeria.css';
import Menu from "../components/Menu";
import Mailbox from "../components/Mailbox"; 

const Mensajeria = () => {
  return (
    <>
      <Menu></Menu>
      <main className="main-content mensajeria-content">
        <Mailbox />
      </main>
    </>
  );
};

export default Mensajeria;