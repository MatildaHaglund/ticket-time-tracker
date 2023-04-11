import React from "react";
import StopWatch from "./StopWatch";

import './Ticket.css';



const Ticket = (ticketName, index) => (
  <div className="Ticket-Div">
    <span>{ticketName.ticketName.input}</span>
    <br />
    <StopWatch></StopWatch>
  </div>
);
export default Ticket;