import { useCallback } from "react";
import type { QuestionType } from "../types/QuestionType.type";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export default function QuestionCard({
  question,
  onOptionClick,
}: {
  question: QuestionType;
  onOptionClick: (index: number) => void;
}) {
  const handleTimeOver = useCallback(() => {
    onOptionClick(-1);
  }, [onOptionClick]);

  return (
    <div className="card">
      <QuestionTimer timeout={5000} onTimeOver={handleTimeOver} />
      <h2>{question.question}</h2>
      <Answers question={question} onOptionClick={onOptionClick} />
    </div>
  );
}
