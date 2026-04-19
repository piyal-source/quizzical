import { useEffect, useState } from "react";

export default function QuestionTimer({
  timeout,
  onTimeOver,
}: {
  timeout: number;
  onTimeOver: () => void;
}) {
  const [timeOver, setTimeOver] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(onTimeOver, timeout);
    return () => clearTimeout(timeoutId);
  }, [timeout, onTimeOver]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeOver((prev) => prev + 100);
    }, 100);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="timer">
      <progress value={timeOver} max={timeout - 500}></progress>
    </div>
  );
}
