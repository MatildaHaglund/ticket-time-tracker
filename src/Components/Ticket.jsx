import React from "react";
import './Ticket.css';

const Ticket = (ticketName, index) => (
  <div className="Ticket-Div">
    <span>{ticketName.ticketName.input}</span>
    <br />
    <span className="Time-Span">Tid: 22m</span>
  </div>
);
export default Ticket;