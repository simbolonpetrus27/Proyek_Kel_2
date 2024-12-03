import React, { useState } from 'react';
import './MiniQuizProgramLinear.css';

const MiniQuizProgramLinear = () => {
  const questions = [
    {
      question: 'Apa hasil dari sistem persamaan 2x + 3y = 5 dan 4x - 2y = 8?',
      options: ['x = 1, y = 2', 'x = 2, y = 3', 'x = 1, y = 1', 'x = 3, y = 2'],
      answer: 0, // index dari jawaban yang benar
    },
    {
      question: 'Selesaikan sistem persamaan 3x + y = 5 dan 2x + 2y = 8.',
      options: ['x = 1, y = 1', 'x = 2, y = 2', 'x = 1, y = 2', 'x = 2, y = 1'],
      answer: 2,
    },
    {
      question: 'Apa solusi dari sistem persamaan x + y = 5 dan x - y = 1?',
      options: ['x = 3, y = 2', 'x = 2, y = 3', 'x = 1, y = 4', 'x = 4, y = 1'],
      answer: 0,
    },
    {
      question: 'Dari sistem persamaan 3x + y = 5 dan 2x + 2y = 8, berapa x dan y?',
      options: ['x = 1/2, y = 3', 'x = 1, y = 2', 'x = 1/3, y = 2', 'x = 2, y = 1'],
      answer: 0,
    },
    {
      question: 'Penyelesaian dari sistem 5x + 3y = 15 dan 4x - y = 3 adalah?',
      options: ['x = 3, y = 0', 'x = 1, y = 2', 'x = 2, y = 3', 'x = 1/2, y = 1'],
      answer: 0,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (index) => {
    if (userAnswers.length <= currentQuestion) {
      const updatedAnswers = [...userAnswers, index];
      setUserAnswers(updatedAnswers);

      if (index === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setIsQuizFinished(true);
      }
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setIsQuizFinished(false);
    setScore(0);
  };

  return (
    <div className="quiz-container">
      <h2>Mini Quiz: Linear Algebra</h2>
      {!isQuizFinished ? (
        <div className="question-card">
          <h3>Soal {currentQuestion + 1}</h3>
          <p>{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option ${userAnswers[currentQuestion] === index ? 'selected' : ''}`}
                onClick={() => handleAnswerClick(index)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="results">
          <h3>Quiz selesai!</h3>
          <p>
            Skor Anda: {score}/{questions.length}
          </p>
          <button onClick={restartQuiz} className="restart-btn">
            Ulangi Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default MiniQuizProgramLinear;
