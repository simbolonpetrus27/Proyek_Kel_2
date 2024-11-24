import React, { useState } from 'react';

function MiniQuiz({ topic }) {
const [answers, setAnswers] = useState([]);
const [isFinished, setIsFinished]= useState(false); 
const [essayAnswers, setEssayAnswers] = useState([]); 
const [score, setScore] = useState(0);

const questionBank = {
  'Matrix': [
  {
    type: "multiple-choice",   //PILIHAN GANDA
    question: "1) 1+ 1 = ?",
    options: [
      { value: "A", label: "2" },
      { value: "B", label: "3" },
      { value: "C", label: "4" },
      { value: "D", label: "5" },
      { value: "E", label: "6" },
    ],
    answer: "A",
    explanation: "2"
  },
  {
    type: "essay", //ESSAY
    question: "2) 1 + 1 = ?",
    answer: "2",
    explanation: "2" 
  }
  ],

  'Induksi Matematika': [
    {
      type: "multiple-choice",   //PILIHAN GANDA
      question: "1) 1+ 1 = ?",
      options: [
        { value: "A", label: "2" },
        { value: "B", label: "3" },
        { value: "C", label: "4" },
        { value: "D", label: "5" },
        { value: "E", label: "6" },
      ],
      answer: "A",
      explanation: "2"
    },
    {
      type: "essay", //ESSAY
      question: "2) 1 + 1 = ?",
      answer: "2",
      explanation: "2" 
    }
    ],

    'Linear': [
      {
        type: "multiple-choice",   //PILIHAN GANDA
        question: "1) 1+ 1 = ?",
        options: [
          { value: "A", label: "2" },
          { value: "B", label: "3" },
          { value: "C", label: "4" },
          { value: "D", label: "5" },
          { value: "E", label: "6" },
        ],
        answer: "A",
        explanation: "2"
      },
      {
        type: "essay", //ESSAY
        question: "2) 1 + 1 = ?",
        answer: "2",
        explanation: "2" 
      }
      ],

      'Integral': [
        {
          type: "multiple-choice",   //PILIHAN GANDA
          question: "1) 1+ 1 = ?",
          options: [
            { value: "A", label: "2" },
            { value: "B", label: "3" },
            { value: "C", label: "4" },
            { value: "D", label: "5" },
            { value: "E", label: "6" },
          ],
          answer: "A",
          explanation: "2"
        },
        {
          type: "essay", //ESSAY
          question: "2) 1 + 1 = ?",
          answer: "2",
          explanation: "2" 
        }
        ],
      }

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
