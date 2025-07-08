import React from 'react';
import { useLocation } from "react-router-dom";
import '../styles/Schedule.css'; 

const Schedule = () => {
  const location = useLocation();

  const horarioGridData = location.state?.horarioGridData || [];
  

  const scheduleHeaders = ["Lapso Hora", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

  return (
    <div className="schedule-container">
      <h1>Mi Horario de Clases</h1> 

      {horarioGridData.length === 0 ? (
        <p>No hay horario disponible.</p>
      ) : (
        <div className="schedule-list-wrapper">
          <table className="schedule-table">
            <thead>
              <tr>
                {scheduleHeaders.map((header, idx) => (
                  <th key={idx}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {horarioGridData.map((timeSlotRow, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="time-slot-cell">{timeSlotRow.time}</td>
                  <td className={timeSlotRow.lunes ? 'occupied' : 'empty'}>
                    {timeSlotRow.lunes && (
                      <>
                        <span className="subject">{timeSlotRow.lunes.asignatura}</span><br/>
                        <span className="room">{timeSlotRow.lunes.aula}</span><br/>
                        <span className="professor">{timeSlotRow.lunes.profesor}</span>
                      </>
                    )}
                  </td>
                  <td className={timeSlotRow.martes ? 'occupied' : 'empty'}>
                    {timeSlotRow.martes && (
                      <>
                        <span className="subject">{timeSlotRow.martes.asignatura}</span><br/>
                        <span className="room">{timeSlotRow.martes.aula}</span><br/>
                        <span className="professor">{timeSlotRow.martes.profesor}</span>
                      </>
                    )}
                  </td>
                  <td className={timeSlotRow.miercoles ? 'occupied' : 'empty'}>
                    {timeSlotRow.miercoles && (
                      <>
                        <span className="subject">{timeSlotRow.miercoles.asignatura}</span><br/>
                        <span className="room">{timeSlotRow.miercoles.aula}</span><br/>
                        <span className="professor">{timeSlotRow.miercoles.profesor}</span>
                      </>
                    )}
                  </td>
                  <td className={timeSlotRow.jueves ? 'occupied' : 'empty'}>
                    {timeSlotRow.jueves && (
                      <>
                        <span className="subject">{timeSlotRow.jueves.asignatura}</span><br/>
                        <span className="room">{timeSlotRow.jueves.aula}</span><br/>
                        <span className="professor">{timeSlotRow.jueves.profesor}</span>
                      </>
                    )}
                  </td>
                  <td className={timeSlotRow.viernes ? 'occupied' : 'empty'}>
                    {timeSlotRow.viernes && (
                      <>
                        <span className="subject">{timeSlotRow.viernes.asignatura}</span><br/>
                        <span className="room">{timeSlotRow.viernes.aula}</span><br/>
                        <span className="professor">{timeSlotRow.viernes.profesor}</span>
                      </>
                    )}
                  </td>
                  <td className={timeSlotRow.sabado ? 'occupied' : 'empty'}>
                    {timeSlotRow.sabado && (
                      <>
                        <span className="subject">{timeSlotRow.sabado.asignatura}</span><br/>
                        <span className="room">{timeSlotRow.sabado.aula}</span><br/>
                        <span className="professor">{timeSlotRow.sabado.profesor}</span>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Schedule;