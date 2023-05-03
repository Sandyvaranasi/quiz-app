import React, { useState } from "react";

export default function Quiz() {
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const quiz = [
    {
      question: "What is a Computer",
      answers: {
        animal: false,
        bird: false,
        machine: true,
        tree: false,
      },
      correctAnswer: "machine",
    },
    {
      question: "What is a Lion",
      answers: {
        animal: true,
        bird: false,
        machine: false,
        tree: false,
      },
      correctAnswer: "animal",
    },
    {
      question: "What is a Sparrow",
      answers: {
        animal: false,
        bird: true,
        machine: false,
        tree: false,
      },
      correctAnswer: "bird",
    },
  ];

  const handleAnswerClick = (selectedAnswer) => {
    setSelectedAnswer(selectedAnswer);
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const currentQuestion = quiz[questionIndex];
    setSelectedAnswer(null);
    if (questionIndex < quiz.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setQuestionIndex(0);
      alert(`Quiz completed. Your score is ${score} out of ${quiz.length}.`);
      setScore(0);
    }
  };

  const currentQuestion = quiz[questionIndex];
  const answerOptions = Object.keys(currentQuestion.answers);

  return (
    <div>
      <h3>Your Score {score}</h3>
      <h4>{currentQuestion.question}</h4>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {answerOptions.map((answerOption) => (
          <li
            key={answerOption}
            style={{ display: "inline-block", margin: "10px" }}
          >
            <input
              type="radio"
              id={answerOption}
              name="answer"
              value={answerOption}
              checked={selectedAnswer === answerOption}
              onChange={() => handleAnswerClick(answerOption)}
            />
            <label>{answerOption}</label>
          </li>
        ))}
      </ul>
      <button onClick={handleNextQuestion}>Next</button>
    </div>
  );
}
