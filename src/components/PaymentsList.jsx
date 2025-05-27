import React from "react";
import { Link } from "react-router-dom";
import "../styles/PaymentsList.css";
import Menu from "./Menu";
import { useState, useEffect } from "react";

const PaymentsList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [payments, setPayments] = useState([]);

 
  const paymentsData = [
    {
      id: 455481,
      type: "Confirmacion de horario",
      date: "10/05/25",
      currency: "Bolívares",
      total: 50000.0,
      status: "Completado",
    },
    {
      id: 862796,
      type: "Inscripcion de pregrado",
      date: "05/08/25",
      currency: "Bolívares",
      total: 100000.0,
      status: "Pendiente pago",
    },
    {
      id: 769834,
      type: "Pago aranceles",
      date: "22/11/25",
      currency: "Bolívares",
      total: 80000.0,
      status: "Aprobado",
    },
  ];

  useEffect(() => {
    // 
    setTimeout(() => {
      setPayments(paymentsData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Menu></Menu>
      <div className="main-content payments-list">
        <h2 className="title text-center">Lista de Pagos</h2>
        <table className="table payments-table">
          <thead>
            <tr>
              <th>Número</th>
              <th>Tipo</th>
              <th>Fecha Orden</th>
              <th>Moneda</th>
              <th>Total</th>
              <th>Pagar</th>
              <th>Estatus</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td className="request-number">
                  <a href="#">{payment.id}</a>
                </td>
                <td>{payment.type}</td>
                <td>{payment.date}</td>
                <td>{payment.currency}</td>
                <td className="request-total">{payment.total.toFixed(2)}</td>
                <td>
                  {payment.status === "Pendiente pago" ? (
                    <Link
                      to={`/dashboard/pagos/${payment.id}`}
                      className="pay-button"
                    >
                      Pagar
                    </Link>
                  ) : (
                    "-"
                  )}
                </td>
                <td
                  className={`request-status status-${payment.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {payment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PaymentsList;
