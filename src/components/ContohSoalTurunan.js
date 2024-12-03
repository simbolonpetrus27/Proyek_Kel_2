import React, { useState } from 'react';
import './ContohSoalTurunan.css';

const ContohSoalTurunan = () => {
  const [answers, setAnswers] = useState([null, null, null, null, null]);  // Store user answers
  const [notifications, setNotifications] = useState([null, null, null, null, null]);  // Store notifications

  const correctAnswers = ['B', 'C', 'A', 'D', 'B'];  // Correct answers for each question

  const handleAnswer = (questionIndex, selectedAnswer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = selectedAnswer;
    setAnswers(updatedAnswers);

    const isCorrect = selectedAnswer === correctAnswers[questionIndex];
    const updatedNotifications = [...notifications];
    updatedNotifications[questionIndex] = isCorrect ? 'Jawaban Benar!' : `Jawaban Salah. Jawaban yang benar: ${correctAnswers[questionIndex]}`;
    setNotifications(updatedNotifications);

    // Remove the notification after 2 seconds
    setTimeout(() => {
      const resetNotifications = [...notifications];
      resetNotifications[questionIndex] = null;
      setNotifications(resetNotifications);
    }, 2000);
  };

  return (
    <div className="quiz-container">
      <h1>Contoh Soal Turunan</h1>

      {/* Question 1 */}
      <div className="question">
        <p>1. Tentukan turunan dari fungsi f(x) = 3 * x^2 + 5 * x + 7.</p>
        <div className="options">
          <button onClick={() => handleAnswer(0, 'A')}>A. 6 * x + 5</button>
          <button onClick={() => handleAnswer(0, 'B')}>B. 6 * x + 5</button>
          <button onClick={() => handleAnswer(0, 'C')}>C. 6 * x - 5</button>
          <button onClick={() => handleAnswer(0, 'D')}>D. 3 * x + 5</button>
        </div>
        {notifications[0] && <p className="notification">{notifications[0]}</p>}
      </div>

      {/* Question 2 */}
      <div className="question">
        <p>2. Tentukan turunan dari fungsi f(x) = 4 * x^3 - 2 * x^2 + x - 1.</p>
        <div className="options">
          <button onClick={() => handleAnswer(1, 'A')}>A. 12 * x^2 - 4 * x + 1</button>
          <button onClick={() => handleAnswer(1, 'B')}>B. 12 * x^2 - 4 * x - 1</button>
          <button onClick={() => handleAnswer(1, 'C')}>C. 12 * x^2 - 4 * x + 1</button>
          <button onClick={() => handleAnswer(1, 'D')}>D. 12 * x^2 - 4 * x + 2</button>
        </div>
        {notifications[1] && <p className="notification">{notifications[1]}</p>}
      </div>

      {/* Question 3 */}
      <div className="question">
        <p>3. Tentukan turunan dari fungsi f(x) = 2 * x^2 - 4 * x + 3.</p>
        <div className="options">
          <button onClick={() => handleAnswer(2, 'A')}>A. 4 * x - 4</button>
          <button onClick={() => handleAnswer(2, 'B')}>B. 4 * x + 4</button>
          <button onClick={() => handleAnswer(2, 'C')}>C. 4 * x - 4</button>
          <button onClick={() => handleAnswer(2, 'D')}>D. 4 * x + 4</button>
        </div>
        {notifications[2] && <p className="notification">{notifications[2]}</p>}
      </div>

      {/* Question 4 */}
      <div className="question">
        <p>4. Tentukan turunan dari fungsi f(x) = 5 * x^3 + 7 * x^2 - 3 * x + 2.</p>
        <div className="options">
          <button onClick={() => handleAnswer(3, 'A')}>A. 15 * x^2 + 14 * x - 3</button>
          <button onClick={() => handleAnswer(3, 'B')}>B. 15 * x^2 + 14 * x + 3</button>
          <button onClick={() => handleAnswer(3, 'C')}>C. 5 * x^3 + 7 * x^2 - 3 * x</button>
          <button onClick={() => handleAnswer(3, 'D')}>D. 15 * x^2 + 14 * x - 3</button>
        </div>
        {notifications[3] && <p className="notification">{notifications[3]}</p>}
      </div>

      {/* Question 5 */}
      <div className="question">
        <p>5. Tentukan turunan dari fungsi f(x) = x^4 - 3 * x^3 + 2 * x^2 - x + 5.</p>
        <div className="options">
          <button onClick={() => handleAnswer(4, 'A')}>A. 4 * x^3 - 9 * x^2 + 4 * x - 1</button>
          <button onClick={() => handleAnswer(4, 'B')}>B. 4 * x^3 - 9 * x^2 + 4 * x + 1</button>
          <button onClick={() => handleAnswer(4, 'C')}>C. 3 * x^2 - 6 * x + 2</button>
          <button onClick={() => handleAnswer(4, 'D')}>D. 4 * x^3 - 9 * x^2 + 3 * x - 5</button>
        </div>
        {notifications[4] && <p className="notification">{notifications[4]}</p>}
      </div>
    </div>
  );
};

export default ContohSoalTurunan;
