import React, { useState, useEffect } from "react";


function StopWatch(isActive) {
    let [time, setTime]= useState(0);
    let [intervalId, setIntervalId] = useState(0);


    useEffect(() => {
        let interval;
        if(isActive.isActive) {
            interval = setInterval(() => {
                setTime(time = time + 1);
            }, 1000);
            localStorage.setItem(isActive.id, time)
            setIntervalId(interval);
        } else {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId);

    }, [isActive.isActive]);

    const hours = Math.floor(time / 3600);

    // Minutes calculation
    const minutes = Math.floor((time % 3600) / 60);
  
    // Seconds calculation
    const seconds = Math.floor((time % 60));

return (
    <div className="stopwatch">
    <div className="numbers">
    <p className="stopwatch-time">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
    </div>
  </div>
);

  };
  
  export default StopWatch;