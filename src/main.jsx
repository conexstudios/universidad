import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Mensajeria from "./pages/Mensajeria.jsx";
import Notificacion from "./pages/Notificacion.jsx";
import Calificacion from "./pages/Calificacion.jsx";
import Asignaturas from "./pages/Asignaturas.jsx";
import Lista from "./pages/Lista.jsx";
import Factura from "./pages/Factura.jsx";
import Extraer from "./pages/Extraer.jsx";
import Camara from "./pages/Camara.jsx";
import Horario from "./pages/Horario.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/dashboard/mensajeria" element={<Mensajeria/>}></Route>
        <Route path="/dashboard/notificacion "element={<Notificacion/>}></Route>
        <Route path="/dashboard/calificacion" element={<Calificacion/>}></Route>
        <Route path="/dashboard/asignaturas" element={<Asignaturas/>}></Route>
        <Route path="/dashboard/lista" element={<Lista/>}></Route>
        <Route path="/dashboard/factura" element={<Factura/>}></Route>
        <Route path="/dashboard/extraer" element={<Extraer/>}></Route>
        <Route path="/dashboard/camara" element={<Camara/>}></Route>
        <Route path="/dashboard/horario" element={<Horario/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
