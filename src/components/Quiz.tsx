import { useCallback, useState } from "react";
import reactQuestions from "../data/reactQuestions";
import QuestionTimer from "./QuestionTimer";
import type { QuestionType } from "../types/QuestionType.type";
import QuizCompleted from "./QuizCompleted";
import Answers from "./Answers";

function shuffle(arr: QuestionType[]) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const questions = shuffle(reactQuestions.slice(-2));

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const currentQuestionIndex = userAnswers.length;
  const completedQuiz = currentQuestionIndex >= questions.length;

  const handleOptionClick = (index: number) => {
    setTimeout(() => {
      setUserAnswers((prev) => [...prev, index]);
    }, 500);
  };

  const handleTimeOver = useCallback(() => {
    setUserAnswers((prev) => [...prev, -1]);
  }, []);

  return (
    <main>
      {completedQuiz ? (
        <QuizCompleted userAnswers={userAnswers} questions={questions} />
      ) : (
        <div className="quiz-container">
          <div className="card">
            <QuestionTimer
              key={currentQuestionIndex}
              timeout={5000}
              onTimeOver={handleTimeOver}
            />
            <h2>{questions[currentQuestionIndex].question}</h2>
            <Answers
              key={questions[currentQuestionIndex].question}
              question={questions[currentQuestionIndex]}
              onOptionClick={handleOptionClick}
            />
          </div>
        </div>
      )}
    </main>
  );
}
