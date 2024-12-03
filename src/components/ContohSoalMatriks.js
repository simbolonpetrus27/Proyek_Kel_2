import React, { useState } from 'react';
import './MatrixQuestions.css';

const MatrixQuestions = () => {
  const questions = [
    {
      id: 1,
      question: 'Jika A = [[1, 2], [3, 4]], hitung determinan A.',
      options: ['A. -2', 'B. 2', 'C. 10', 'D. 4'],
      answer: 'B. 2'
    },
    {
      id: 2,
      question: 'Tentukan hasil perkalian matriks A dan B jika A = [[1, 2], [3, 4]] dan B = [[5, 6], [7, 8]].',
      options: ['A. [19, 22], [43, 50]', 'B. [23, 26], [43, 50]', 'C. [19, 22], [35, 40]', 'D. [23, 26], [35, 40]'],
      answer: 'A. [19, 22], [43, 50]'
    },
    {
      id: 3,
      question: 'Jika matriks A adalah matriks identitas 2x2, apa hasil dari A + A?',
      options: ['A. [[2, 2], [2, 2]]', 'B. [[1, 1], [1, 1]]', 'C. [[1, 0], [0, 1]]', 'D. [[0, 0], [0, 0]]'],
      answer: 'A. [[2, 2], [2, 2]]'
    },
    {
      id: 4,
      question: 'Hitung hasil invers dari matriks A = [[1, 2], [3, 4]].',
      options: ['A. [[1, 2], [3, 4]]', 'B. [[-2, 1], [1.5, -0.5]]', 'C. [[-1, 0], [0, -1]]', 'D. [[1, -2], [-1.5, 0.5]]'],
      answer: 'B. [[-2, 1], [1.5, -0.5]]'
    },
    {
      id: 5,
      question: 'Berapa banyak elemen di dalam matriks A = [[1, 2, 3], [4, 5, 6]]?',
      options: ['A. 3', 'B. 6', 'C. 9', 'D. 2'],
      answer: 'B. 6'
    },
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [notification, setNotification] = useState({});

  const handleAnswer = (questionId, selectedAnswer) => {
    const question = questions.find(q => q.id === questionId);
    const correctAnswer = question.answer;
    setUserAnswers({
      ...userAnswers,
      [questionId]: selectedAnswer
    });

    const newNotification = {
      ...notification,
      [questionId]: selectedAnswer === correctAnswer
        ? { type: 'success', message: 'Jawaban Anda benar!' }
        : { type: 'error', message: `Jawaban Anda salah. Jawaban yang benar adalah: ${correctAnswer}` }
    };
    setNotification(newNotification);

    // Menghapus notifikasi setelah 2 detik
    setTimeout(() => {
      setNotification((prevNotification) => {
        const updatedNotification = { ...prevNotification };
        delete updatedNotification[questionId];
        return updatedNotification;
      });
    }, 2000);
  };

  return (
    <div className="matrix-questions">
      <h2>Soal Matriks</h2>
      {questions.map((q) => (
        <div key={q.id} className="question-card">
          <p className="question-number">Soal {q.id}:</p>
          <p className="question-text">{q.question}</p>
          <div className="options">
            {q.options.map((option, index) => (
              <button
                key={index}
                className="option"
                onClick={() => handleAnswer(q.id, option)}
              >
                {option}
              </button>
            ))}
          </div>
          {notification[q.id] && (
            <div className={`notification ${notification[q.id].type}`}>
              {notification[q.id].message}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MatrixQuestions;
