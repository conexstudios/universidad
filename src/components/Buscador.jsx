import { Link } from "react-router-dom";
import "../styles/Buscador.css";

const Buscador = () => {
  return (
    <>
      <div className="buscador">
        <h1>Buscar</h1>
        <div className="buscador-input">
          <input
            className="form-control search"
            type="text"
            placeholder="Escribe aquí..."
          />
        </div>
      </div>
    </>
  );
};

export default Buscador;
