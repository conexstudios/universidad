import React from "react";
import "../styles/Horarios.css";

const Horarios = () => {
  const scheduleData = [
    {
      id: 1,
      time: "7:45-9:15AM",
      lunes: "C2B",
      martes: null,
      miercoles: "K0S",
      jueves: "F4T",
      viernes: "W8R",
    },
    {
      id: 2,
      time: "8:00-10:00AM",
      lunes: "C2B",
      martes: "A8L",
      miercoles: null,
      jueves: "F4T",
      viernes: "W8R",
    },
    {
      id: 3,
      time: "9:25-10:55AM",
      lunes: "C2B",
      martes: "A8L",
      miercoles: "K0S",
      jueves: "F4T",
      viernes: "W8R",
    },
    {
      id: 4,
      time: "11:05-12:35PM",
      lunes: null,
      martes: null,
      miercoles: "K0S",
      jueves: "F4T",
      viernes: "W8R",
    },
    {
      id: 5,
      time: "1:30-3:00PM",
      lunes: null,
      martes: null,
      miercoles: "K0S",
      jueves: "F4T",
      viernes: null,
    },
    {
      id: 6,
      time: "3:00-4:30PM",
      lunes: null,
      martes: null,
      miercoles: "K0S",
      jueves: "F4T",
      viernes: null,
    },
    {
      id: 7,
      time: "3:10-4:40PM",
      lunes: null,
      martes: null,
      miercoles: "K0S",
      jueves: "F4T",
      viernes: null,
    },
  ];

  const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

  return (
    <section className="schedule-component dashboard-card lg">
      <h3>Horario 2025-2026</h3>
      <div className="schedule-table-container">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Lapso de Hora</th>
              {days.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((row) => (
              <tr key={row.id}>
                <td className="time-slot">{row.time}</td>
                {days.map((day) => (
                  <td key={day}>{row[day.toLowerCase()] || ""}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Horarios;
