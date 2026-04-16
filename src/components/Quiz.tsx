import { useCallback, useState } from "react";
import reactQuestions from "../data/reactQuestions";
import QuestionTimer from "./QuestionTimer";
import type { QuestionType } from "../types/QuestionType.type";
import QuizCompleted from "./QuizCompleted";

function shuffle(arr: QuestionType[]) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const questions = shuffle(reactQuestions);

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const currentQuestion = userAnswers.length;
  const completedQuiz = currentQuestion >= questions.length;

  const handleOptionClick = useCallback((index: number) => {
    setUserAnswers((prev) => [...prev, index]);
  }, []);

  const handleTimeOver = useCallback(() => {
    handleOptionClick(-1);
  }, [handleOptionClick]);

  return (
    <main>
      {completedQuiz ? (
        <QuizCompleted userAnswers={userAnswers} questions={questions} />
      ) : (
        <div className="quiz-container">
          <div className="card">
            <QuestionTimer
              key={currentQuestion}
              timeout={15000}
              onTimeOver={handleTimeOver}
            />
            <h2>{questions[currentQuestion].question}</h2>
            <ol className="options-list">
              {questions[currentQuestion].options.map((option, index) => (
                <li key={option}>
                  <button
                    className="cta"
                    onClick={() => handleOptionClick(index)}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </main>
  );
}
