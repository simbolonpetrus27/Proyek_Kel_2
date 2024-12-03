import React, { useState } from 'react';
import './MiniQuizTurunan.css';

const MiniQuizTurunan = () => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: 'Tentukan turunan dari fungsi f(x) = 3 * x^2 + 5 * x + 7.',
      options: {
        A: "6 * x + 5",
        B: "6 * x - 5",
        C: "3 * x + 7",
        D: "5 * x + 7",
      },
      correctAnswer: "A",
    },
    {
      question: 'Tentukan turunan dari fungsi f(x) = 4 * x^3 - 2 * x^2 + x - 1.',
      options: {
        A: "12 * x^2 - 4 * x + 1",
        B: "12 * x^2 + 4 * x - 1",
        C: "3 * x^2 - 4 * x + 1",
        D: "4 * x^3 - 2 * x + 1",
      },
      correctAnswer: "A",
    },
    {
      question: 'Tentukan turunan dari fungsi f(x) = 2 * x^2 - 4 * x + 3.',
      options: {
        A: "4 * x - 4",
        B: "4 * x + 4",
        C: "2 * x - 4",
        D: "2 * x + 4",
      },
      correctAnswer: "A",
    },
    {
      question: 'Tentukan turunan dari fungsi f(x) = 5 * x^3 + 7 * x^2 - 3 * x + 2.',
      options: {
        A: "15 * x^2 + 14 * x - 3",
        B: "15 * x^2 - 14 * x - 3",
        C: "7 * x^2 + 3 * x - 2",
        D: "5 * x^3 - 3 * x + 7",
      },
      correctAnswer: "A",
    },
    {
      question: 'Tentukan turunan dari fungsi f(x) = x^4 - 3 * x^3 + 2 * x^2 - x + 5.',
      options: {
        A: "4 * x^3 - 9 * x^2 + 4 * x - 1",
        B: "3 * x^3 - 9 * x^2 + 3 * x - 1",
        C: "5 * x^3 - 9 * x^2 + 4 * x - 1",
        D: "4 * x^3 - 3 * x^2 + 5 * x - 2",
      },
      correctAnswer: "A",
    },
  ];

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setAnswers({
      ...answers,
      [questionIndex]: selectedOption,
    });
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
  };

  const handleSubmit = () => {
    calculateScore();
    setShowResults(true);
  };

  const handleRetry = () => {
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  return (
    <div className="quiz-container">
      <h1>Mini Quiz Turunan</h1>

      {!showResults ? (
        <div>
          {questions.map((question, index) => (
            <div key={index} className="question-container">
              <h3>{question.question}</h3>
              <div className="options-container">
                {Object.keys(question.options).map((optionKey) => (
                  <div key={optionKey} className="option">
                    <input
                      type="radio"
                      id={`${index}-${optionKey}`}
                      name={`question-${index}`}
                      value={optionKey}
                      checked={answers[index] === optionKey}
                      onChange={() => handleAnswerChange(index, optionKey)}
                    />
                    <label htmlFor={`${index}-${optionKey}`}>{question.options[optionKey]}</label>
                  </div>
                ))}
              </div>
              {answers[index] && (
                <div className={`feedback ${answers[index] === question.correctAnswer ? 'correct' : 'incorrect'}`}>
                  {answers[index] === question.correctAnswer ? 'Jawaban Anda Benar!' : 'Jawaban Anda Salah!'}
                  {answers[index] !== question.correctAnswer && (
                    <div>Jawaban yang benar adalah: {question.options[question.correctAnswer]}</div>
                  )}
                </div>
              )}
            </div>
          ))}
          <button onClick={handleSubmit}>Kirim Jawaban</button>
        </div>
      ) : (
        <div className="result-container">
          <h2>Skor Anda: {score} dari {questions.length}</h2>
          <button onClick={handleRetry}>Coba Lagi</button>
        </div>
      )}
    </div>
  );
};

export default MiniQuizTurunan;
