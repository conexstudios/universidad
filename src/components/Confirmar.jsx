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
          <table className="detalle-tabla">
            <thead>
              <tr>
                <th>Asignatura</th>
                <th>Código</th>
                <th>Precio</th>
                <th>Cuatrimestre</th>
                <th>Grupo</th>
                <th>Aula</th>
                <th>Cupo Disponible</th>
              </tr>
            </thead>
            <tbody>
              {seleccion.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.asignatura}</td>
                  <td>{item.materia_codigo}</td>
                  <td>${item.precio ? Number(item.precio).toFixed(2) : "N/A"}</td>
                  <td>{item.cuatrimestre}</td>
                  <td>{item.grupo_academico}</td>
                  <td>{item.aula}</td>
                  <td>{item.cupo_disponible}</td>
                </tr>
              ))}
            </tbody>
          </table>
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