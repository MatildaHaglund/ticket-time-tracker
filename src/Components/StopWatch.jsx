import React, { useState, useEffect, componentDidUpdate } from "react";


function StopWatch(isActive) {
    const [time, setTime]= useState(0);
    const [running, setRunning] = useState(isActive);

    useEffect(() => {
        let interval;
        console.log(isActive)
        if(isActive) {
          console.log(time);
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else {
          console.log("notactive");
          console.log(interval);
          setTime(interval);
            clearInterval(interval);
            
            console.log(time);
        }
        return () => clearInterval(interval);

    }, [isActive]);


return (
    <div className="stopwatch">
    <div className="numbers">
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
    </div>
    <div className="buttons">
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={() => setTime(0)}>Reset</button>       
    </div>
  </div>
);

  };
  
  export default StopWatch;