import { useEffect, useState } from "react";

const App = () => {
  const [Time, setTime] = useState(0);
  const [Running, setRunning] = useState(false);
  const [reborn , setReborn] = useState(0)

  useEffect(() => {
    console.log(" shaqee hee");
    let timeId;
    if (Running) {
      timeId = setInterval(() => {
        setTime(prev => {
          if (prev != 0) {
           return prev - 1;
          }else {
            clearInterval(timeId);
          }
        });
      }, 1000);
    }
    return () => clearInterval(timeId);
  }, [Running]);
  function handleStart() {
    setRunning(true);
  }
  function handleStop() {
    setRunning(false);
  }
  function handleReset() {
    setRunning(false);

  }
  function handleChange (){
    const value = Number(e.target.value);
    setTime(value);
    setReborn(value);
  }

  return (
    <div>
      <h1>CountDown Timer</h1>
      <p>SetTime(Second): 
        <input
          type="number"
          name="number"
          onChange={handleChange}
        />
      </p>

      <h3>Time Left: {Time} Seconds</h3>
      <button disabled={Running} onClick={handleStart}>
        Start
      </button>
      <button disabled={!Running} onClick={handleStop}>
        Stop
      </button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};
export default App;
