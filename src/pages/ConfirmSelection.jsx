import { useLocation } from "react-router-dom";

const Confirmar = () => {
  const location = useLocation();
  const seleccion = location.state?.seleccion || [];

  return (
    <div>
      <h1>Confirmación</h1>
      <pre>{JSON.stringify(seleccion, null, 2)}</pre>
    </div>
  );
};

export default Confirmar;