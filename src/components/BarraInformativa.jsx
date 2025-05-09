import { Link } from "react-router-dom";
import "../styles/BarraInformativa.css";

const BarraInformativa = () => {
  return (
    <>
      <section class="messages-bar messages-section">
        <h2 className="title">Mensajes</h2>
        <div class="message-list">
          <div class="search-bar">
            <input
              className="form-control"
              type="text"
              placeholder="Buscar ..."
            />
          </div>
          <article class="message">
            <p>
              Hola Yolman, aquí encontrarás un resumen de tu actividad en
              conextudios.
            </p>
            <small>21 de abril (Nuevo)</small>
          </article>
          <article class="message">
            <p>Dr. López</p>
            <p>09:00 AM</p>
            <p>Miércoles</p>
          </article>
          <article class="message">
            <p>Recordatorio:</p>
            <p>Examen parcial de Álgebra Lineal mañana, jueves.</p>
          </article>
          <article class="message">
            <p>Departamento:</p>
            <p>
              Aviso sobre cambios en el horario de tutorías del Prof. Pérez.
            </p>
            <small>15 de mayo</small>
          </article>
          <article class="message">
            <p>Prof. Martínez</p>
            <p>Material adicional subido al aula virtual.</p>
          </article>
          <article class="message">
            <p>General:</p>
            <p>
              Charla informativa sobre programas de intercambio estudiantil.
            </p>
            <small>Próximo lunes, 3:00 PM</small>
          </article>
          <article class="message">
            <p>Biblioteca:</p>
            <p>Nuevo horario de atención durante el período de exámenes.</p>
          </article>
          <article class="message">
            <p>Prof. Rodríguez</p>
            <p>Las notas del último quiz ya están disponibles.</p>
            <small>Hoy</small>
          </article>
          <article class="message">
            <p>Recordatorio:</p>
            <p>
              Fecha límite para solicitar retiro de asignaturas: 20 de mayo.
            </p>
          </article>
          <article class="message">
            <p>Administración:</p>
            <p>
              Información sobre becas disponibles para el próximo año académico.
            </p>
          </article>
          <article class="message">
            <p>Prof. Sánchez</p>
            <p>
              Clase suspendida por motivos de salud. Se repondrá el viernes.
            </p>
          </article>
          <article class="message">
            <p>Deportes:</p>
            <p>Inscripciones abiertas para el torneo interfacultades.</p>
            <small>Fecha límite: 30 de mayo</small>
          </article>
          <article class="message">
            <p>Recordatorio:</p>
            <p>Presentación de proyectos finales de grado esta semana.</p>
          </article>
          <article class="message">
            <p>Prof. Gómez</p>
            <p>Consultas sobre el proyecto en mi oficina, jueves de 10 a 12.</p>
            <small>Jueves</small>
          </article>
          <article class="message">
            <p>TI:</p>
            <p>Mantenimiento programado en la plataforma virtual el sábado.</p>
          </article>
          <article class="message">
            <p>General:</p>
            <p>Encuesta de satisfacción estudiantil disponible online.</p>
            <small>Responde antes del 25 de mayo</small>
          </article>
          <article class="message">
            <p>Recordatorio:</p>
            <p>Pago de aranceles universitarios. Evite recargos.</p>
          </article>
          <article class="message">
            <p>Prof. Herrera</p>
            <p>Se ha publicado la guía de estudio para el examen final.</p>
          </article>
          <article class="message">
            <p>Servicios Estudiantiles:</p>
            <p>
              Talleres gratuitos de manejo del estrés y técnicas de estudio.
            </p>
            <small>Inscríbete ya</small>
          </article>
          <article class="message">
            <p>Recordatorio:</p>
            <p>
              Ceremonia de graduación: Detalles y requisitos en la web oficial.
            </p>
          </article>
          <article class="message">
            <p>Administración:</p>
            <p>Fechas de inscripción para asignaturas del próximo período.</p>
            <small>Consulta el calendario académico</small>
          </article>
        </div>
      </section>
    </>
  );
};

export default BarraInformativa;
