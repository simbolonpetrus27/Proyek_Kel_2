import React, { useState } from "react";

const MiniQuizProgramLinear = () => {
  const [answers, setAnswers] = useState({});
  const [essayAnswers, setEssayAnswers] = useState(["", ""]);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const multipleChoiceQuestions = [
    {
      id: 1,
      question: "Apa yang dimaksud dengan Program Linear?",
      options: {
        A: "Model matematika untuk optimasi",
        B: "Program komputer untuk hitung integral",
        C: "Algoritma sorting",
      },
      correct: "A",
    },
    {
      id: 2,
      question: "Tujuan utama dari program linear adalah?",
      options: {
        A: "Mencari penyelesaian grafik",
        B: "Maksimalkan atau minimalkan nilai fungsi",
        C: "Menghitung determinan matriks",
      },
      correct: "B",
    },
    {
      id: 3,
      question: "Metode penyelesaian program linear melibatkan?",
      options: {
        A: "Sistem persamaan linier",
        B: "Turunan fungsi",
        C: "Sistem persamaan kuadrat",
      },
      correct: "A",
    },
  ];

  const essayQuestions = [
    "Jelaskan langkah-langkah penyelesaian masalah Program Linear!",
    "Berikan contoh kasus nyata yang menggunakan Program Linear dalam kehidupan sehari-hari!",
  ];

  const handleMultipleChoiceChange = (questionId, selectedOption) => {
    setAnswers({ ...answers, [questionId]: selectedOption });
  };

  const handleMultipleChoiceSubmit = (e, questionId) => {
    e.preventDefault();
    const correctAnswer = multipleChoiceQuestions.find(
      (q) => q.id === questionId
    ).correct;

    if (answers[questionId] === correctAnswer) {
      alert("Jawaban Anda Benar!");
      setScore(score + 1);
    } else {
      setShowCorrectAnswer({ questionId, correctAnswer });
      setTimeout(() => setShowCorrectAnswer(null), 1000);
    }
  };

  const handleEssayChange = (index, value) => {
    const newEssayAnswers = [...essayAnswers];
    newEssayAnswers[index] = value;
    setEssayAnswers(newEssayAnswers);
  };

  const handleEssaySubmit = (e) => {
    e.preventDefault();
    alert("Jawaban esai Anda telah disimpan!");
  };

  const resetQuiz = () => {
    setAnswers({});
    setEssayAnswers(["", ""]);
    setScore(0);
    setShowCorrectAnswer(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Mini Quiz Program Linear</h2>
      <h3>Pilihan Ganda</h3>
      {multipleChoiceQuestions.map((q) => (
        <form
          key={q.id}
          onSubmit={(e) => handleMultipleChoiceSubmit(e, q.id)}
          style={{ marginBottom: "20px" }}
        >
          <p>{q.question}</p>
          {Object.entries(q.options).map(([key, value]) => (
            <label key={key} style={{ display: "block" }}>
              <input
                type="radio"
                name={`question-${q.id}`}
                value={key}
                checked={answers[q.id] === key}
                onChange={(e) =>
                  handleMultipleChoiceChange(q.id, e.target.value)
                }
              />
              {key} {value}
            </label>
          ))}
          <button type="submit">Submit Jawaban</button>
          {showCorrectAnswer?.questionId === q.id && (
            <p style={{ color: "red" }}>
              Jawaban benar adalah: {q.options[showCorrectAnswer.correctAnswer]}
            </p>
          )}
        </form>
      ))}

      <h3>Esai</h3>
      <form onSubmit={handleEssaySubmit}>
        {essayQuestions.map((question, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <p>{question}</p>
            <textarea
              value={essayAnswers[index]}
              onChange={(e) => handleEssayChange(index, e.target.value)}
              rows="5"
              cols="40"
              placeholder="Tuliskan jawaban Anda di sini..."
            />
          </div>
        ))}
        <button type="submit">Submit Jawaban Esai</button>
      </form>

      <h3>Skor Anda</h3>
      <p>Skor pilihan ganda: {score} / {multipleChoiceQuestions.length}</p>

      <button onClick={resetQuiz} style={{ marginTop: "20px" }}>
        Ulangi Quiz
      </button>
    </div>
  );
};

export default MiniQuizProgramLinear;
