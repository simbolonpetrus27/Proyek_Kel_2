import React, { useState } from 'react';
import './MiniQuizMatriks.css';

const questions = [
  {
    question: 'Apa hasil dari perkalian matriks A dan B?',
    options: {
      A: 'A',
      B: 'B',
      C: 'C',
      D: 'D'
    },
    answer: 'B'
  },
  {
    question: 'Apa sifat matriks yang berlaku pada perkalian?',
    options: {
      A: 'Asosiatif',
      B: 'Komutatif',
      C: 'Distribusi',
      D: 'Tidak ada'
    },
    answer: 'A'
  },
  {
    question: 'Matriks apa yang memiliki elemen-elemen yang sama pada diagonal utama?',
    options: {
      A: 'Matriks Identitas',
      B: 'Matriks Diagonal',
      C: 'Matriks Skalar',
      D: 'Matriks Nol'
    },
    answer: 'B'
  },
  {
    question: 'Matriks yang dapat dibalik disebut?',
    options: {
      A: 'Matriks Singular',
      B: 'Matriks Invers',
      C: 'Matriks Kosong',
      D: 'Matriks Identitas'
    },
    answer: 'B'
  },
  {
    question: 'Apa yang dimaksud dengan matriks transpos?',
    options: {
      A: 'Matriks yang dibalik',
      B: 'Matriks yang ditukar baris dan kolom',
      C: 'Matriks yang ditambahkan',
      D: 'Matriks yang dibagi'
    },
    answer: 'B'
  }
];

const MiniQuiz = () => {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (questionIndex, value) => {
    setAnswers({
      ...answers,
      [questionIndex]: value
    });
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    setShowResult(true);
  };

  const handleReset = () => {
    setAnswers({});
    setShowResult(false);
    setScore(0);
  };

  return (
    <div className="quiz-container">
      <h2>Mini Quiz - Matriks</h2>
      {questions.map((question, index) => (
        <div key={index} className="question">
          <p className="question-text">{question.question}</p>
          <div className="options">
            {Object.entries(question.options).map(([key, value]) => (
              <label key={key} className="option-label">
                <input
                  type="radio"
                  name={`question${index}`}
                  value={key}
                  checked={answers[index] === key}
                  onChange={() => handleChange(index, key)}
                />
                {key}. {value}
              </label>
            ))}
          </div>
          {showResult && (
            <p
              className={
                answers[index] === question.answer ? 'correct' : 'incorrect'
              }
            >
              {answers[index] === question.answer
                ? 'Jawaban benar!'
                : `Jawaban salah. Jawaban yang benar: ${question.answer}`}
            </p>
          )}
        </div>
      ))}
      <div className="result">
        {showResult ? (
          <div>
            <p>Skor Kamu: {score}/{questions.length}</p>
            <button onClick={handleReset}>Ulangi Quiz</button>
          </div>
        ) : (
          <button onClick={handleSubmit}>Kirim Jawaban</button>
        )}
      </div>
    </div>
  );
};

export default MiniQuiz;
