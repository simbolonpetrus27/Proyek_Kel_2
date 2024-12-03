import React, { useState } from 'react';
import './MiniQuizTransformasi.css';

const MiniQuizTransformasi = () => {
  const questions = [
    {
      question: 'Apa itu transformasi geometri?',
      options: ['Perubahan posisi objek', 'Perubahan ukuran objek', 'Perubahan bentuk objek', 'Semua di atas'],
      correctAnswer: 3
    },
    {
      question: 'Apa yang dimaksud dengan translasi?',
      options: ['Pemindahan objek', 'Perputaran objek', 'Perubahan ukuran objek', 'Refleksi objek'],
      correctAnswer: 0
    },
    {
      question: 'Apa itu rotasi dalam transformasi geometri?',
      options: ['Perpindahan objek', 'Pemantulan objek', 'Pemutaran objek', 'Perubahan ukuran objek'],
      correctAnswer: 2
    },
    {
      question: 'Pemantulan terhadap sumbu X menghasilkan...',
      options: ['Pergeseran objek', 'Perubahan ukuran objek', 'Refleksi objek', 'Rotasi objek'],
      correctAnswer: 2
    },
    {
      question: 'Apa yang terjadi pada objek setelah dilakukan penskalaan?',
      options: ['Objek bergerak', 'Objek berubah bentuk', 'Objek membesar atau mengecil', 'Objek diputar'],
      correctAnswer: 2
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (index) => {
    if (!isAnswered) {
      setSelectedOption(index);
      if (index === questions[currentQuestion].correctAnswer) {
        setCorrectAnswers(correctAnswers + 1);
      }
      setIsAnswered(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setCorrectAnswers(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      <h2>Mini Quiz Transformasi Geometri</h2>
      {!showScore ? (
        <div className="question-container">
          <div className="question">
            <strong>{`Soal ${currentQuestion + 1}:`}</strong> {questions[currentQuestion].question}
          </div>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option ${selectedOption === index ? 'selected' : ''} ${isAnswered ? (index === questions[currentQuestion].correctAnswer ? 'correct' : 'incorrect') : ''}`}
                onClick={() => handleOptionClick(index)}
                disabled={isAnswered}
              >
                {option}
              </button>
            ))}
          </div>
          {isAnswered && (
            <div className={`notification ${selectedOption === questions[currentQuestion].correctAnswer ? 'success' : 'error'}`}>
              {selectedOption === questions[currentQuestion].correctAnswer ? 'Jawaban Benar!' : `Jawaban Salah! Jawaban yang benar: ${questions[currentQuestion].options[questions[currentQuestion].correctAnswer]}`}
            </div>
          )}
          <button className="next-button" onClick={handleNextQuestion}>
            {currentQuestion === questions.length - 1 ? 'Lihat Skor' : 'Next Question'}
          </button>
        </div>
      ) : (
        <div className="score-container">
          <h3>Quiz Selesai!</h3>
          <p>{`Skor Anda: ${correctAnswers} dari ${questions.length}`}</p>
          <button className="restart-button" onClick={handleRestartQuiz}>Ulangi Quiz</button>
        </div>
      )}
    </div>
  );
};

export default MiniQuizTransformasi;
