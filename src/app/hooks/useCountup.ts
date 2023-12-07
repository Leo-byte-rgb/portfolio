import { useEffect, useRef, useState } from "react";

interface CountupParamets {
  start: number;
  target: number;

  timeInSecondsToTarget: number;
}

export const useCountup = ({
  start,
  target,
  timeInSecondsToTarget,
}: CountupParamets) => {
  const intervalId = useRef<NodeJS.Timeout | undefined>();
  const [counter, setCounter] = useState(start);

  const perLoopTime = (timeInSecondsToTarget * 1000) / (target - start);

  useEffect(() => {
    if (counter < target) {
      intervalId.current = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, perLoopTime);
    }

    return () => {
      clearInterval(intervalId.current);
    };
  }, [counter, perLoopTime, target]);

  return { counter };
};
