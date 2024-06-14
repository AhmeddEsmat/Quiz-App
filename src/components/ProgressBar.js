import React, { useEffect, useState } from "react";

function ProgressBar({ index, onTimeOut, max, paused }) {
  const [remainingTime, setRemainingTime] = useState(max);

  useEffect(() => {
    if (paused) return;
    setRemainingTime(max);
    const timer = setTimeout(onTimeOut, max);
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 20);
    }, 20);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onTimeOut, max, paused]);

  useEffect(() => {
    if (remainingTime <= 0) {
      onTimeOut();
    }
  }, [remainingTime, onTimeOut]);

  return (
    <progress
      key={index}
      max={max}
      value={remainingTime}
      className="w-full mt-4 h-2 [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-violet-400 [&::-webkit-progress-bar]:rounded-lg  [&::-webkit-progress-value]:rounded-lg"
    />
  );
}

export default ProgressBar;
