import { Link } from "react-router-dom";
import "../styles/BarraInformativa.css";

const BarraInformativa = () => {
  return (
    <>
      <section class="messages-bar messages-section">
        <h2>Mensajes</h2>
        <div class="search-bar">
          <input
            className="form-control"
            type="text"
            placeholder="Buscar ..."
          />
          <button></button>
        </div>
        <div class="message-list">
          <article class="message">
            <p>
              Hola Yolman, aquí encontrarás un resumen de tu actividad en
              conextudios.
            </p>
            <small>21 de abril (Nuevo)</small>
          </article>
          <article class="message">
            <p>Prof. García</p>
            <p>10:30 AM</p>
            <p>Martes</p>
          </article>
          <article class="message">
            <p>Recordatorio:</p>
            <p>
              Entrega del proyecto final para el viernes 22 de abril (Nuevo)
            </p>
          </article>
          <article class="message">
            <p>Administración:</p>
            <p>Información sobre el pago de matrícula del próximo semestre</p>
            <small>24 de abril (Nuevo)</small>
          </article>
        </div>
      </section>
    </>
  );
};

export default BarraInformativa;
