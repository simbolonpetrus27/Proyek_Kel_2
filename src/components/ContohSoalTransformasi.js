import React, { useState } from 'react';
import './ContohSoalTransformasi.css';

const ContohSoalTransformasi = () => {
  const [answers, setAnswers] = useState({});
  const [notification, setNotification] = useState(null);
  
  const questions = [
    {
      question: 'Apa itu transformasi geometri?',
      options: ['Perubahan posisi', 'Perubahan bentuk', 'Perubahan ukuran', 'Semua di atas'],
      correctAnswer: 'Semua di atas'
    },
    {
      question: 'Apa yang dimaksud dengan translasi?',
      options: ['Perputaran', 'Perpindahan', 'Pemantulan', 'Penskalaan'],
      correctAnswer: 'Perpindahan'
    },
    {
      question: 'Apa itu rotasi dalam transformasi geometri?',
      options: ['Perpindahan objek', 'Pembesaran objek', 'Pemutaran objek', 'Penurunan objek'],
      correctAnswer: 'Pemutaran objek'
    },
    {
      question: 'Pemantulan terhadap sumbu X menghasilkan...',
      options: ['Perubahan posisi', 'Perubahan bentuk', 'Refleksi objek', 'Penskalaan objek'],
      correctAnswer: 'Refleksi objek'
    },
    {
      question: 'Apa yang terjadi pada objek setelah dilakukan penskalaan?',
      options: ['Objek terputar', 'Objek mengalami pembesaran atau pengecilan', 'Objek dipindahkan', 'Objek terpantul'],
      correctAnswer: 'Objek mengalami pembesaran atau pengecilan'
    }
  ];

  const handleAnswer = (questionIndex, selectedAnswer) => {
    const currentAnswer = questions[questionIndex].correctAnswer;
    setAnswers({
      ...answers,
      [questionIndex]: {
        selected: selectedAnswer,
        correct: selectedAnswer === currentAnswer
      }
    });

    setNotification({
      questionIndex,
      correct: selectedAnswer === currentAnswer
    });

    setTimeout(() => setNotification(null), 2000); // Hide notification after 2 seconds
  };

  return (
    <div className="question-container">
      <h2>Soal Transformasi Geometri</h2>
      {questions.map((question, index) => (
        <div key={index} className="question-card">
          <div className="question-number">
            <strong>Soal {index + 1}</strong>
          </div>
          <div className="question-text">
            {question.question}
          </div>
          <div className="options">
            {question.options.map((option, optionIndex) => (
              <button
                key={optionIndex}
                className="option"
                onClick={() => handleAnswer(index, option)}
              >
                {option}
              </button>
            ))}
          </div>
          {notification && notification.questionIndex === index && (
            <div className={`notification ${notification.correct ? 'success' : 'error'}`}>
              {notification.correct ? 'Jawaban Benar!' : `Jawaban Salah. Jawaban yang benar: ${question.correctAnswer}`}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContohSoalTransformasi;
