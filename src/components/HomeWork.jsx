import React from "react";
import "../styles/HomeWork.css";
import calendar from "../assets/calendar.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const HomeWork = () => {
  return (
    <section className="homework">
      <h3 className="homework-title">
        Plan de Evaluación <img width={30} src={calendar} alt="" />
        <Calendar></Calendar>
      </h3>
    </section>
  );
};

export default HomeWork;
