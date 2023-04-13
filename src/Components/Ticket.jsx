import React, { useState } from "react";
import StopWatch from "./StopWatch";

import './Ticket.css';

const Ticket = (ticketName, index) => {
  
  let greenyellow = '#adff2f';
  let red = "#ff0000";
  const [isActive, setIsActive] = useState(true);
  const [bgColor, setBgColor] = useState(greenyellow);

  const setTrackerState = () => {
    
    var newColor = bgColor === red ? greenyellow : red;
    setBgColor(newColor);
    setIsActive(!isActive);
  };

  return (
    <div className="Ticket-Div" onClick={() =>  setTrackerState()} style={{background:bgColor}}>
    <span>{ticketName.ticketName.input}</span>
    <br />
    <StopWatch 
      isActive={isActive}
      key={isActive} />
  </div>
  );

};
export default Ticket;