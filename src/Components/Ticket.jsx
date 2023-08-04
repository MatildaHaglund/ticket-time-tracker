import React from "react";
import StopWatch from "./StopWatch";

import './Ticket.css';

const Ticket = (ticketName) => {
  
  return (
    <div className="Ticket-Div" style={{background:ticketName.background}}>
    <span>{ticketName.ticketName.input}</span>
    <br />
    <StopWatch 
      isActive={ticketName.isActive}
      id={ticketName.id}
      key={ticketName.id} />
  </div>
  );

};
export default Ticket;