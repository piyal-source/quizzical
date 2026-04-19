import { useState } from "react";
import type { QuestionType } from "../types/QuestionType.type";
export default function Answers({
  question,
  onOptionClick,
}: {
  question: QuestionType;
  onOptionClick: (index: number) => void;
}) {
  const [selectedAnswer, setSelectedAnswer] = useState<number>();

  const handleOptionClick = (index: number) => {
    if (selectedAnswer !== undefined) return;
    setSelectedAnswer(index);
    onOptionClick(index);
  };

  const { options, correctAnswer } = question;

  return (
    <ol className="options-list">
      {options.map((option, index) => (
        <li key={`${index}-${option}`}>
          <button
            className={`cta ${index === selectedAnswer ? (selectedAnswer === correctAnswer ? "correct-bg" : "incorrect-bg") : ""}`}
            onClick={() => handleOptionClick(index)}
          >
            {option}
          </button>
        </li>
      ))}
    </ol>
  );
}
