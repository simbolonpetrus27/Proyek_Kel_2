import React, { useState } from 'react';
import './ContohSoalProgramLinear.css';

const ContohSoalProgamLinear = () => {
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  
  const questions = [
    {
      question: 'Apa hasil dari 3x + 2y = 12 dan 4x - y = 7?',
      options: ['x = 1, y = 3', 'x = 2, y = 4', 'x = 3, y = 2', 'x = 0, y = 6'],
      correct: 2,
    },
    {
      question: 'Selesaikan sistem persamaan berikut: 2x + 3y = 5, 4x - 2y = 8.',
      options: ['x = 2, y = 1', 'x = 1, y = 2', 'x = 3, y = 1', 'x = 4, y = 0'],
      correct: 0,
    },
    {
      question: 'Apa solusi sistem persamaan: x + y = 5 dan x - y = 1?',
      options: ['x = 3, y = 2', 'x = 4, y = 1', 'x = 2, y = 3', 'x = 1, y = 4'],
      correct: 0,
    },
    {
      question: 'Dari sistem persamaan 3x + y = 5 dan 2x + 2y = 8, berapa x dan y?',
      options: ['x = 2, y = 3', 'x = 3, y = 1', 'x = 4, y = 2', 'x = 1, y = 4'],
      correct: 1,
    },
    {
      question: 'Penyelesaian dari sistem 5x + 3y = 15 dan 4x - y = 3 adalah?',
      options: ['x = 2, y = 3', 'x = 1, y = 4', 'x = 3, y = 2', 'x = 4, y = 1'],
      correct: 2,
    }
  ];

  const handleAnswer = (questionIndex, selectedOption) => {
    const isCorrect = questions[questionIndex].correct === selectedOption;
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = isCorrect ? 'correct' : 'incorrect';
      return newAnswers;
    });
    setCorrectAnswer(isCorrect ? 'correct' : 'incorrect');

    setTimeout(() => {
      setCorrectAnswer(null);
    }, 2000);
  };

  return (
    <div className="soal-container">
      <h2>Contoh Soal Linear</h2>
      
      {questions.map((question, index) => (
        <div key={index} className="question-card">
          <p className="question-text">{index + 1}. {question.question}</p>
          
          <div className="options">
            {question.options.map((option, optionIndex) => (
              <button
                key={optionIndex}
                className="option"
                onClick={() => handleAnswer(index, optionIndex)}
              >
                {option}
              </button>
            ))}
          </div>
          
          {answers[index] && (
            <div className={`notification ${answers[index]}`}>
              {answers[index] === 'correct' ? 'Jawaban Anda Benar!' : `Jawaban Salah, Jawaban yang Benar adalah: ${question.options[question.correct]}`}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContohSoalProgamLinear;
