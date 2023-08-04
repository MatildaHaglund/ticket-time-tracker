import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { v4 as uuid } from 'uuid';
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

      if(tickets.length > 0){
        tickets.forEach(tick => {
          tick.isActive = false;
          tick.background = "#ff0000";
        });
      }

      let ticket = {"ticketName": {input}, "isActive":true, "background":"#adff2f", "id": uuid()};
      console.log(ticket);
      tickets.push(ticket);
      setInput("");
    };

    const updateList = (ticket) => {
      if(ticket.isActive === true){
        const newState = tickets.map(obj => {
          if (obj.id === ticket.id) {
            return {...obj, isActive: false, background: "#ff0000"};
          }
    
          return obj;
        });
    
        setTickets(newState);
      }
      else{

        const newState = tickets.map(obj => {
          return {...obj, isActive: false, background:"#ff0000" };
      });
        
        let newTicket = {"ticketName": ticket.ticketName, "isActive":true, "background":"#adff2f", "id": ticket.id};

        const indexToUpdate = newState.findIndex(obj => obj.id === ticket.id);

        if (indexToUpdate !== -1) {

          newState[indexToUpdate] = { ...newState[indexToUpdate], ...newTicket };
        
      }
        setTickets(newState);
      }
    }

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
						<AiOutlinePlus size={10} />
					</button>
				</form>
        </div>
        <div className="Ticket-List">
      <ul>
        {tickets.map(function (item, index) {
          return (
            <div onClick={() =>  updateList(item)}>
            <Ticket
              key={item.id}
              ticketName={item.ticketName}
              index={index}
              isActive={item.isActive}
              background={item.background}
              id={item.id}
            ></Ticket>
            </div>
          );
        })}
      </ul>
      </div>
      </div>
    );

  };


export default TicketList;