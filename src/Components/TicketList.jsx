import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Ticket from "./Ticket";
import './TicketList.css';


const TicketList = () => {
    const [tickets, setTickets] = useState([]);
	  const [input, setInput] = useState("");
    
    const createTicket = async (e) => {
      e.preventDefault(e);
      if (input === "") {
        alert("Please enter a Todo!");
        return;
      }
      let ticket = {"ticketName": {input}};
      tickets.push(ticket);
      setInput("");
    };

    return (
      <div>
        <div className="Ticket-Form">
        <form onSubmit={createTicket}>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						type="text"
						placeholder="Add your ticket name..."
					/>
					<button>
						<AiOutlinePlus size={30} />
					</button>
				</form>
        </div>
        <div className="Ticket-List">
      <ul>
        {tickets.map(function (item, index) {
          return (
            <Ticket
              key={index}
              ticketName={item.ticketName}
              index={index}
            ></Ticket>
          );
        })}
      </ul>
      </div>
      </div>
    );

  };


export default TicketList;