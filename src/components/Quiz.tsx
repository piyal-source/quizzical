import { useState, useRef } from "react";
import reactQuestions from "../data/reactQuestions";
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const score = useRef(0);

  const currentQuestion = userAnswers.length;
  const completedQuiz = currentQuestion >= reactQuestions.length;

  const handleOptionClick = (index: number) => {
    const isCorrect = index === reactQuestions[currentQuestion].correctAnswer;
    if (isCorrect) {
      alert("Correct!");
    } else {
      alert("Wrong!");
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < reactQuestions.length && isCorrect) {
      score.current += 1;
    }
    setUserAnswers((prev) => [...prev, index]);
  };

  return (
    <main>
      {completedQuiz ? (
        <p>
          {/* Your final score is {score.current} out of {reactQuestions.length} */}
        </p>
      ) : (
        <div className="quiz-container">
          <div className="card">
            <h2>{reactQuestions[currentQuestion].question}</h2>
            <ol className="options-list">
              {reactQuestions[currentQuestion].options.map((option, index) => (
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
