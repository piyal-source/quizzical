import type { QuestionType } from "../types/QuestionType.type";

export default function QuizCompleted({
  userAnswers,
  questions,
}: {
  userAnswers: number[];
  questions: QuestionType[];
}) {
  const score = userAnswers.reduce((acc, answer, index) => {
    if (answer === questions[index].correctAnswer) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return (
    <>
      <h1>Quiz Completed!</h1>
      <p>
        Your final score is {score} out of {questions.length}
      </p>
      {userAnswers.map((answer, index) => {
        const isCorrect = answer === questions[index].correctAnswer;
        return (
          <div key={index}>
            <h3>{questions[index].question}</h3>
            <p className={isCorrect ? "correct-text" : "incorrect-text"}>
              {answer < 0 ? "No answer" : questions[index].options[answer]}
            </p>
          </div>
        );
      })}
    </>
  );
}
