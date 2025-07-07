import { useLocation } from "react-router-dom";
import '../styles/Confirmar.css'; 
const Confirmar = () => {
  const location = useLocation();
  const seleccion = location.state?.seleccion || [];

  const total = seleccion.reduce((acc, item) => acc + (item.precio ? Number(item.precio) : 0), 0);

  return (
    <div className="detalle-pago-container">
      <h1>Confirmación de Selección</h1>
      {seleccion.length === 0 ? (
        <p>No hay materias seleccionadas.</p>
      ) : (
        <>
          <div className="detalle-lista">
            {seleccion.map((item, idx) => (
              <div key={idx} className="detalle-item">
                <h2>{item.asignatura} ({item.materia_codigo})</h2>
                <p><strong>Precio:</strong> ${item.precio ? Number(item.precio).toFixed(2) : "N/A"}</p>
                <p><strong>Cuatrimestre:</strong> {item.cuatrimestre}</p>
                <p><strong>Grupo:</strong> {item.grupo_academico}</p>
                <p><strong>Aula:</strong> {item.aula}</p>
                <p><strong>Día:</strong> {item.dia_semana}</p>
                <p><strong>Horario:</strong> {item.hora_inicio} - {item.hora_fin}</p>
                <p><strong>Cupo Disponible:</strong> {item.cupo_disponible}</p>
              </div>
            ))}
          </div>
          <div className="detalle-total">
            <h3>Total a pagar: ${total.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Confirmar;