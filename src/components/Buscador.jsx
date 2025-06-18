import { Link } from "react-router-dom";
import "../styles/Buscador.css";
import BuscarIcon from "../assets/buscar.png"; 

const Buscador = () => {
  return (
    <>
      <div className="buscador">
        <div className="buscador-input">
          <input
            className="form-control search"
            type="text"
            placeholder="Escribe aquí..."
          />
          <img src={BuscarIcon} alt="buscar" width="15" height="15" className="search-icon" />
        </div>
      </div>
    </>
  );
};

export default Buscador;0

