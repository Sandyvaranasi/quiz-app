import React, { useState } from 'react';
import { quizData } from './quizData';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    const isCorrect = selectedAnswer === quizData[currentQuestion].answer;
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz">
      {showScore ? (
        <>
          <div className="score">Your score: {score}</div>
          <button className="restart-button" onClick={handleRestartQuiz}>
            Restart Quiz
          </button>
        </>
      ) : (
        <>
          <div className="question">
            {quizData[currentQuestion].question}
          </div>
          <div className="options">
            {quizData[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
