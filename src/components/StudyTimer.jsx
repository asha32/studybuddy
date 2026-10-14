
import { useState, useEffect } from "react";

function StudyTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || timeLeft === 0) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((previousTime) => previousTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  function resetTimer() {
    setIsRunning(false);
    setTimeLeft(25 * 60);
  }

  return (
    <div id="study-timer">
      <h1>Study Timer</h1>
      <p>Stay focused and make your study time count!</p>

      <h2>
        {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </h2>

      {timeLeft === 0 && <p>Great job! Study session completed!</p>}

      <button
        onClick={() => setIsRunning(!isRunning)}
        disabled={timeLeft === 0}
      >
        {isRunning ? "Pause" : "Start"}
      </button>

      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default StudyTimer;
