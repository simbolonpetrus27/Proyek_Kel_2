import React, { useState } from 'react';
import './MiniQuizInduksiMatematika.css';

const MiniQuizInduksiMatematika = () => {
  const [answers, setAnswers] = useState(Array(5).fill(null)); // State for storing answers
  const [notifications, setNotifications] = useState(Array(5).fill(null)); // State for notifications
  const [score, setScore] = useState(0); // Score state
  const [quizCompleted, setQuizCompleted] = useState(false); // State to check if the quiz is completed

  const questions = [
    {
      question: 'Buktikan bahwa untuk setiap bilangan bulat positif n, berlaku: 1 + 2 + 3 + ... + n = n(n + 1) / 2',
      options: ['n(n+1)', 'n(n-1)', 'n(n+1)/2', '2n(n+1)'],
      correctAnswer: 2, // Index of the correct answer (0-based)
    },
    {
      question: 'Buktikan bahwa 2^n - 1 = (2 - 1)(2 + 2)(2 + 2^2)...(2 + 2^(n-1))',
      options: ['2^n', '2^(n-1)', '2^n - 1', '2^n + 1'],
      correctAnswer: 2,
    },
    {
      question: 'Buktikan bahwa n^2 + n adalah hasil perkalian dua bilangan berturut-turut.',
      options: ['n(n+1)', 'n(n-1)', 'n^2 + n', '2n(n+1)'],
      correctAnswer: 0,
    },
    {
      question: 'Buktikan bahwa jumlah deret 1 + 3 + 5 + ... + (2n-1) = n^2',
      options: ['n(n+1)', 'n^2', '2n^2', 'n(n-1)'],
      correctAnswer: 1,
    },
    {
      question: 'Buktikan bahwa untuk setiap bilangan bulat positif n, berlaku: 3^n - 1 = (3 - 1)(3 + 3)(3 + 3^2)...(3 + 3^(n-1))',
      options: ['3^n', '3^(n-1)', '3^n - 1', '3^n + 1'],
      correctAnswer: 2,
    },
  ];

  const handleAnswer = (questionIndex, selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = selectedOption;

    // Check if answer is correct
    const isCorrect = selectedOption === questions[questionIndex].correctAnswer;
    const newNotifications = [...notifications];
    newNotifications[questionIndex] = isCorrect
      ? { message: 'Jawaban Benar!', type: 'success' }
      : {
          message: `Jawaban Salah! Jawaban yang benar adalah: ${questions[questionIndex].options[questions[questionIndex].correctAnswer]}`,
          type: 'error',
        };

    setAnswers(newAnswers);
    setNotifications(newNotifications);

    // Update score if correct
    setScore(isCorrect ? score + 1 : score);
  };

  const resetQuiz = () => {
    setAnswers(Array(5).fill(null));
    setNotifications(Array(5).fill(null));
    setScore(0);
    setQuizCompleted(false);
  };

  const completeQuiz = () => {
    setQuizCompleted(true);
  };

  return (
    <div className="quiz-container">
      <h2>Mini Quiz Induksi Matematika</h2>
      {!quizCompleted ? (
        <>
          {questions.map((question, index) => (
            <div className="question-card" key={index}>
              <p className="question-text">{index + 1}. {question.question}</p>
              <div className="options">
                {question.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    className={`option ${answers[index] === optionIndex ? 'selected' : ''}`}
                    onClick={() => handleAnswer(index, optionIndex)}
                    disabled={answers[index] !== null} // Disable options after answering
                  >
                    {option}
                  </button>
                ))}
              </div>
              {notifications[index] && (
                <div className={`notification ${notifications[index].type}`}>
                  {notifications[index].message}
                </div>
              )}
            </div>
          ))}
          <button className="submit-button" onClick={completeQuiz}>Selesai</button>
        </>
      ) : (
        <div className="result">
          <h3>Quiz Selesai!</h3>
          <p>Score Anda: {score} / {questions.length}</p>
          <button className="retry-button" onClick={resetQuiz}>Ulangi Quiz</button>
        </div>
      )}
    </div>
  );
};

export default MiniQuizInduksiMatematika;
