import { useCallback, useState } from "react";
import reactQuestions from "../data/reactQuestions";
import type { QuestionType } from "../types/QuestionType.type";
import QuizCompleted from "./QuizCompleted";
import QuestionCard from "./QuestionCard";

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

  const currentQuestionIndex = userAnswers.length;
  const completedQuiz = currentQuestionIndex >= questions.length;

  const handleOptionClick = useCallback((index: number) => {
    setUserAnswers((prev) => [...prev, index]);
  }, []);

  return (
    <main>
      {completedQuiz ? (
        <QuizCompleted userAnswers={userAnswers} questions={questions} />
      ) : (
        <div className="quiz-container">
          <QuestionCard
            key={questions[currentQuestionIndex].question}
            question={questions[currentQuestionIndex]}
            onOptionClick={handleOptionClick}
          />
        </div>
      )}
    </main>
  );
}
