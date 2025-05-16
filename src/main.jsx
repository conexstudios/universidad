import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Mensajeria from "./pages/Mensajeria.jsx";
import Notificacion from "./pages/Notificacion.jsx";
import Asignaturas from "./pages/Asignaturas.jsx";
import Lista from "./pages/Lista.jsx";
import Camara from "./pages/Camara.jsx";
import Horario from "./pages/Horario.jsx";
import Direccion from "./pages/Direccion.jsx";
import Academico from "./pages/Academico.jsx";
import Salud from "./pages/Salud.jsx";
import Extracurriculares from "./pages/Extracurriculares.jsx";
import StudentRating from "./pages/StudentRating.jsx";
import ChooseSubject from "./pages/ChooseSubject.jsx";
import ServiceRequest from "./pages/ServiceRequest.jsx";
import Load from "./pages/Load.jsx";
import Date from "./pages/Date.jsx";
import Bill from "./pages/Bill.jsx";
import PersonalData from "./pages/PersonalData.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route
          path="/dashboard/studentrating"
          element={<StudentRating />}
        ></Route>
        <Route
          path="/dashboard/ChooseSubject"
          element={<ChooseSubject />}
        ></Route>
        <Route
          path="/dashboard/servicerequest"
          element={<ServiceRequest />}
        ></Route>
        <Route path="/dashboard/load" element={<Load />}></Route>
        <Route path="/dashboard/date" element={<Date />}></Route>
        <Route path="/dashboard/bill" element={<Bill />}></Route>
        <Route
          path="/dashboard/personaldata"
          element={<PersonalData />}
        ></Route>
        <Route path="/dashboard/mensajeria" element={<Mensajeria />}></Route>
        <Route
          path="/dashboard/notificacion"
          element={<Notificacion />}
        ></Route>
        <Route path="/dashboard/asignaturas" element={<Asignaturas />}></Route>
        <Route path="/dashboard/lista" element={<Lista />}></Route>
        <Route path="/dashboard/camara" element={<Camara />}></Route>
        <Route path="/dashboard/horario" element={<Horario />}></Route>
        <Route path="/dashboard/direccion" element={<Direccion />}></Route>
        <Route path="/dashboard/academico" element={<Academico />}></Route>
        <Route path="/dashboard/salud" element={<Salud />}></Route>
        <Route
          path="/dashboard/extracurriculares"
          element={<Extracurriculares />}
        ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
