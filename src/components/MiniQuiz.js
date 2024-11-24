import React, { useState } from 'react';

function MiniQuiz({ topic }) {
const [answers, setAnswers] = useState([]);
const [isFinished, setIsFinished]= useState(false); 
const [essayAnswers, setEssayAnswers] = useState([]); 
const [score, setScore] = useState(0);

const questions = [
  {
    type: "multiple-choice", // Jenis soal pilihan ganda
    question: "Apa itu Matrix?",
    options: ["A", "B", "C", "D"],
    answer: "A",
    explanation: "Matrix adalah sekumpulan bilangan yang disusun dalam bentuk baris dan kolom."
  },
  {
    type: "multiple-choice", // Jenis soal pilihan ganda
    question: "Apa itu Induksi Matematika?",
    options: ["A", "B", "C", "D"],
    answer: "B",
    explanation: "Induksi matematika adalah metode pembuktian untuk membuktikan suatu proposisi matematika."
  },
  {
    type: "essay", // Jenis soal essay
    question: "Jelaskan konsep Integral secara singkat!",
    answer: "Integral adalah operasi matematika yang digunakan untuk menghitung luas di bawah kurva.",
    explanation: "Integral adalah konsep dasar dalam kalkulus yang digunakan untuk menghitung luas atau volume dari suatu objek matematis."
  },

];

const handleAnswerChange = (questionIndex, answer) => {
  const newAnswers = [...answers];
  newAnswers [questionIndex] = answer;
  setAnswers (newAnswers);
};

const handleEssayAnswerChange = (questionIndex, answer) => { 
  const newEssayAnswers = [...essayAnswers];
  newEssayAnswers[questionIndex] = answer;
  setEssayAnswers(newEssayAnswers);
};

const handleFinishQuiz = () => { 
  let newScore = 0;

  questions.forEach((question, index) => {
    if (question.type === "multiple-choice" && answers[index] === question.answer) {
      newScore++;
    }
  });
  
  setScore (newScore);
  setIsFinished(true);
};

return (
  <div>
    <h2>Quiz: {topic}</h2>
    {isFinished ? (
      <div>
        <h3>Skor Anda: {score} dari {questions.length}</h3> 
        <h4>Pembahasan:</h4>
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              <p><strong>{question.question}</strong></p>
              {question.type === "multiple-choice" ? (
                <p>
                  Jawaban Anda: { answers[index] === question.answer ? "(Benar)" : "(Salah)"}
                </p>
              ) : (
                <p>
                  Jawaban Anda: {essayAnswers[index]}<br />
                  {essayAnswers[index] === question.answer ? "(Benar)" : "(Salah)"}
                </p>
              )}
              <p>Pembahasan: {question.explanation}</p>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <div>
        <form>
          {questions.map((question, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <p>{question.question}</p>

              {question.type === "multiple-choice" && (
                <div style={{ display: 'flex', gap: '10px'}}>
                  {question.options.map((option, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleAnswerChange(index, option)}
                      style={{
                        backgroundColor: answers[index] === option ? '#ddd' : 'transparent',
                        border: '1px solid #ccc',
                        padding: '10px',
                        cursor: 'pointer'
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {question.type === "essay" && (
                <div>
                  <textarea
                    value={essayAnswers[index] || ''}
                    onChange={(e) => handleEssayAnswerChange(index, e.target.value)}
                    rows="4"
                    cols="50"
                    placeholder="Tulis jawaban Anda disini..."
                    style={{ width: '100%' }}
                  />
                </div>
              )}       
            </div>
          ))}
          <button type="button" onClick={handleFinishQuiz} style={{ marginTop: '20px'}}>
        Selesai
      </button>
    </form>
  </div>
)}
</div>
);
}

export default MiniQuiz;
