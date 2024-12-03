import React, { useState } from 'react';
import './ContohSoalIntegral.css';

const ContohSoalIntegral = () => {
  const [answers, setAnswers] = useState(Array(5).fill(null)); // Track answers for each question
  const [feedback, setFeedback] = useState(Array(5).fill(null)); // Feedback for each question
  const correctAnswers = ['B', 'C', 'A', 'D', 'B']; // Correct answers for the 5 questions

  const handleAnswer = (questionIndex, answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = answer;

    setAnswers(updatedAnswers);

    const updatedFeedback = [...feedback];
    updatedFeedback[questionIndex] = answer === correctAnswers[questionIndex] ? 'Benar!' : `Salah! Jawaban yang benar adalah ${correctAnswers[questionIndex]}`;

    setFeedback(updatedFeedback);

    setTimeout(() => {
      const clearedFeedback = [...feedback];
      clearedFeedback[questionIndex] = null;
      setFeedback(clearedFeedback);
    }, 2000); // Feedback disappears after 2 seconds
  };

  return (
    <div className="soal-integral-container">
      <h2>Soal Integral</h2>

      {/* Soal 1 */}
      <div className="question">
        <h3>1. ∫ (3x² + 2x) dx = ?</h3>
        <div className="options">
          <button onClick={() => handleAnswer(0, 'A')}>A. x³ + x² + C</button>
          <button onClick={() => handleAnswer(0, 'B')}>B. x³ + x²</button>
          <button onClick={() => handleAnswer(0, 'C')}>C. 3x³ + x² + C</button>
          <button onClick={() => handleAnswer(0, 'D')}>D. 3x³ + 2x² + C</button>
        </div>
        {feedback[0] && <p className="feedback">{feedback[0]}</p>}
      </div>

      {/* Soal 2 */}
      <div className="question">
        <h3>2. ∫ (4x + 3) dx = ?</h3>
        <div className="options">
          <button onClick={() => handleAnswer(1, 'A')}>A. 4x² + 3x + C</button>
          <button onClick={() => handleAnswer(1, 'B')}>B. 2x² + 3x + C</button>
          <button onClick={() => handleAnswer(1, 'C')}>C. 2x² + 3x</button>
          <button onClick={() => handleAnswer(1, 'D')}>D. 3x² + 2x + C</button>
        </div>
        {feedback[1] && <p className="feedback">{feedback[1]}</p>}
      </div>

      {/* Soal 3 */}
      <div className="question">
        <h3>3. ∫ (7x³ + 3x) dx = ?</h3>
        <div className="options">
          <button onClick={() => handleAnswer(2, 'A')}>A. (7/4)x⁴ + (3/2)x² + C</button>
          <button onClick={() => handleAnswer(2, 'B')}>B. (7/3)x⁴ + x² + C</button>
          <button onClick={() => handleAnswer(2, 'C')}>C. 7x⁴ + 3x² + C</button>
          <button onClick={() => handleAnswer(2, 'D')}>D. (7/4)x⁴ + x² + C</button>
        </div>
        {feedback[2] && <p className="feedback">{feedback[2]}</p>}
      </div>

      {/* Soal 4 */}
      <div className="question">
        <h3>4. ∫ (5x² - x) dx = ?</h3>
        <div className="options">
          <button onClick={() => handleAnswer(3, 'A')}>A. (5/3)x³ - (1/2)x² + C</button>
          <button onClick={() => handleAnswer(3, 'B')}>B. (5/3)x³ + (1/2)x² + C</button>
          <button onClick={() => handleAnswer(3, 'C')}>C. (5/2)x³ - x² + C</button>
          <button onClick={() => handleAnswer(3, 'D')}>D. (5/3)x³ - (1/2)x² + C</button>
        </div>
        {feedback[3] && <p className="feedback">{feedback[3]}</p>}
      </div>

      {/* Soal 5 */}
      <div className="question">
        <h3>5. ∫ (6x² + 4) dx = ?</h3>
        <div className="options">
          <button onClick={() => handleAnswer(4, 'A')}>A. 2x³ + 4x + C</button>
          <button onClick={() => handleAnswer(4, 'B')}>B. 2x³ + 4x</button>
          <button onClick={() => handleAnswer(4, 'C')}>C. 3x³ + 4x + C</button>
          <button onClick={() => handleAnswer(4, 'D')}>D. 3x³ + 2x + C</button>
        </div>
        {feedback[4] && <p className="feedback">{feedback[4]}</p>}
      </div>
    </div>
  );
};

export default ContohSoalIntegral;
