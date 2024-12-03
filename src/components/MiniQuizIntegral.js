import React, { useState } from 'react';

const MiniQuizIntegral = () => {
  const questions = [
    {
      question: "Integral dari x² dx adalah?",
      options: ["1/3 x³", "x³", "2x²", "x²"],
      answer: "1/3 x³"
    },
    {
      question: "Integral dari sin(x) dx adalah?",
      options: ["-cos(x)", "cos(x)", "tan(x)", "sin(x)"],
      answer: "-cos(x)"
    },
    {
      question: "Integral dari e^x dx adalah?",
      options: ["e^x", "e^x + C", "x", "e^x - C"],
      answer: "e^x"
    },
    {
      question: "Integral dari 1/x dx adalah?",
      options: ["ln(x)", "x", "x²", "1/x²"],
      answer: "ln(x)"
    },
    {
      question: "Integral dari cos(x) dx adalah?",
      options: ["sin(x)", "-sin(x)", "cos(x)", "-cos(x)"],
      answer: "sin(x)"
    }
  ];

  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (questionIndex, selectedOption) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = selectedOption;
    setAnswers(updatedAnswers);

    if (selectedOption === questions[questionIndex].answer) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleSubmit = () => {
    setFinished(true);
  };

  const handleRestart = () => {
    setAnswers([]);
    setScore(0);
    setFinished(false);
  };

  return (
    <div className="quiz-container">
      <h2>Mini Quiz - Integral</h2>

      {!finished ? (
        <div>
          {questions.map((question, index) => (
            <div className="question-card" key={index}>
              <p className="question-number">{`Soal ${index + 1}`}</p>
              <p className="question-text">{question.question}</p>
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
              {answers[index] && (
                <div className={`notification ${answers[index] === question.answer ? 'success' : 'error'}`}>
                  {answers[index] === question.answer ? 'Jawaban Anda Benar!' : `Jawaban yang benar adalah: ${question.answer}`}
                </div>
              )}
            </div>
          ))}
          <button className="submit-btn" onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div className="results">
          <h3>Hasil Quiz</h3>
          <p>Skor Anda: {score} / {questions.length}</p>
          <button className="restart-btn" onClick={handleRestart}>Ulangi Quiz</button>
        </div>
      )}
    </div>
  );
};

export default MiniQuizIntegral;
