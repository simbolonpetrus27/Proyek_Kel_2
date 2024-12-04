import React, { useState } from "react";
import './BigQuiz.css'; // Mengimpor CSS eksternal

const BigQuiz = () => {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState("");
  const [answerStatus, setAnswerStatus] = useState("");

  const questions = [
    {
      question: "Determinant dari matriks A = [[1, 2], [3, 4]] adalah?",
      options: ["A. -2", "B. 2", "C. 4"],
      answer: "A. -2",
    },
    {
      question: "Hasil dari 2x + 3 = 9 adalah nilai x?",
      options: ["A. 2", "B. 3", "C. 4"],
      answer: "A. 2",
    },
    {
      question: "Transformasi titik (2, 3) oleh refleksi terhadap sumbu X adalah?",
      options: ["A. (2, -3)", "B. (-2, 3)", "C. (-2, -3)"],
      answer: "A. (2, -3)",
    },
    {
      question: "Integral dari f(x) = x^2 adalah?",
      options: ["A. x^3/3 + C", "B. x^2 + C", "C. 2x + C"],
      answer: "A. x^3/3 + C",
    },
    {
      question: "Turunan pertama dari f(x) = 5x^2 adalah?",
      options: ["A. 10x", "B. 5x", "C. x^2"],
      answer: "A. 10x",
    },
    {
      question: "Nilai dari 3x - 4y = 7 untuk x = 3 dan y = 2 adalah?",
      options: ["A. 7", "B. 5", "C. 8"],
      answer: "A. 7",
    },
    {
      question: "Transformasi skala dengan faktor 2 pada titik (3, 4) menghasilkan?",
      options: ["A. (6, 8)", "B. (3, 8)", "C. (6, 4)"],
      answer: "A. (6, 8)",
    },
    {
      question: "Hasil dari induksi matematika pada P(n): n(n+1)/2 adalah?",
      options: ["A. n", "B. jumlah bilangan 1 sampai n", "C. faktorial n"],
      answer: "B. jumlah bilangan 1 sampai n",
    },
    {
      question: "Matriks yang memiliki jumlah baris sama dengan jumlah kolom disebut?",
      options: ["A. Matriks persegi", "B. Matriks nol", "C. Matriks kolom"],
      answer: "A. Matriks persegi",
    },
    {
      question: "Hasil dari 3x + 2y = 12 dan 2x - y = 4 adalah nilai x?",
      options: ["A. 2", "B. 3", "C. 4"],
      answer: "B. 3",
    },
    {
      question: "Transformasi titik (1, -2) oleh refleksi terhadap garis y = x adalah?",
      options: ["A. (-2, 1)", "B. (2, -1)", "C. (1, -2)"],
      answer: "A. (-2, 1)",
    },
    {
      question: "Turunan pertama dari f(x) = 3x^3 adalah?",
      options: ["A. 9x^2", "B. 3x^2", "C. x^3"],
      answer: "A. 9x^2",
    },
    {
      question: "Integral dari f(x) = cos(x) adalah?",
      options: ["A. sin(x) + C", "B. -sin(x) + C", "C. tan(x) + C"],
      answer: "A. sin(x) + C",
    },
    {
      question: "Nilai dari determinan matriks [[3, 0], [0, 2]] adalah?",
      options: ["A. 6", "B. 5", "C. 0"],
      answer: "A. 6",
    },
    {
      question: "Transformasi rotasi 180° dari titik (-3, 4) adalah?",
      options: ["A. (3, -4)", "B. (-3, -4)", "C. (3, 4)"],
      answer: "B. (-3, -4)",
    },
    {
      question: "Jika f(x) = ln(x), maka f'(x) adalah?",
      options: ["A. 1/x", "B. ln(x) + C", "C. x ln(x)"],
      answer: "A. 1/x",
    },
    {
      question: "Jika A = [[2, 1], [4, 3]], maka trace(A) adalah?",
      options: ["A. 5", "B. 6", "C. 7"],
      answer: "B. 5",
    },
    {
      question: "Jika f(x) = e^x, maka turunan dari f(x) adalah?",
      options: ["A. e^x", "B. xe^(x-1)", "C. 1"],
      answer: "A. e^x",
    },
    {
      question: "Integral dari f(x) = x adalah?",
      options: ["A. x^2/2 + C", "B. x^2 + C", "C. x/2 + C"],
      answer: "A. x^2/2 + C",
    },
    {
      question: "Transformasi skala dengan faktor 0,5 terhadap titik (6, 8) adalah?",
      options: ["A. (3, 4)", "B. (6, 4)", "C. (12, 16)"],
      answer: "A. (3, 4)",
    },
    {
      question: "Dalam induksi matematika, langkah kedua yang harus dibuktikan adalah?",
      options: [
        "A. Jika berlaku untuk n = k, maka berlaku untuk n = k + 1",
        "B. Berlaku untuk semua bilangan bulat positif",
        "C. Berlaku untuk n = 2",
      ],
      answer: "A. Jika berlaku untuk n = k, maka berlaku untuk n = k + 1",
    },
    {
      question: "Turunan pertama dari f(x) = x^4 adalah?",
      options: ["A. 4x^3", "B. x^3 + C", "C. 3x^2"],
      answer: "A. 4x^3",
    },
    {
      question: "Hasil dari operasi matriks [[1, 2], [3, 4]] + [[4, 3], [2, 1]] adalah?",
      options: ["A. [[5, 5], [5, 5]]", "B. [[5, 5], [6, 6]]", "C. [[6, 5], [5, 5]]"],
      answer: "A. [[5, 5], [5, 5]]",
    },
    {
      question: "Jika vektor A = [2, 3] dan B = [1, -1], maka A • B (dot product) adalah?",
      options: ["A. 1", "B. 5", "C. 7"],
      answer: "A. 1",
    },
    {
      question: "Matriks yang tidak memiliki invers disebut?",
      options: ["A. Matriks singular", "B. Matriks persegi", "C. Matriks identitas"],
      answer: "A. Matriks singular",
    },
    {
      question: "Jika x + 2 = 10, maka nilai x adalah?",
      options: ["A. 8", "B. 7", "C. 6"],
      answer: "A. 8",
    },
    {
      question: "Integral dari fungsi f(x) = sin(x) adalah?",
      options: ["A. -cos(x) + C", "B. cos(x) + C", "C. sin(x) + C"],
      answer: "A. -cos(x) + C",
    },
    {
      question: "Turunan dari f(x) = tan(x) adalah?",
      options: ["A. sec^2(x)", "B. cos(x)", "C. -sec^2(x)"],
      answer: "A. sec^2(x)",
    },
    {
      question: "Jika A = [[3, 1], [2, 4]] dan B = [[1, 2], [3, 4]], maka A × B = ?",
      options: ["A. [[3, 10], [14, 19]]", "B. [[7, 10], [14, 19]]", "C. [[4, 8], [14, 19]]"],
      answer: "A. [[3, 10], [14, 19]]",
    },
    {
      question: "Matriks berikut yang merupakan matriks identitas adalah?",
      options: ["A. [[1, 0], [0, 1]]", "B. [[0, 0], [0, 0]]", "C. [[1, 1], [0, 0]]"],
      answer: "A. [[1, 0], [0, 1]]",
    },
    {
      question: "Apakah hasil dari limit x → 0 untuk fungsi f(x) = x^2?",
      options: ["A. 0", "B. 1", "C. Tidak terdefinisi"],
      answer: "A. 0",
    },
    {
      question: "Jika A = [[2, 3], [4, 5]], maka A^2 (perkalian matriks A dengan dirinya sendiri) adalah?",
      options: ["A. [[14, 19], [19, 29]]", "B. [[10, 15], [18, 23]]", "C. [[12, 13], [20, 23]]"],
      answer: "A. [[14, 19], [19, 29]]",
    },
    {
      question: "Jika persamaan linier x + 2y = 10 dan x - y = 4 diselesaikan, maka nilai x adalah?",
      options: ["A. 6", "B. 8", "C. 7"],
      answer: "A. 6",
    },
    {
      question: "Transformasi refleksi terhadap sumbu Y dari titik (4, 3) adalah?",
      options: ["A. (-4, 3)", "B. (4, -3)", "C. (-4, -3)"],
      answer: "A. (-4, 3)",
    },
    {
      question: "Jika A = [[3, 2], [1, 4]], maka hasil determinan A adalah?",
      options: ["A. 10", "B. 7", "C. 5"],
      answer: "A. 10",
    },
  ];

  const handleAnswer = (answer) => {
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (answer === correctAnswer) {
      setScore(score + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
      setShowCorrectAnswer(`Jawaban yang benar adalah: ${correctAnswer}`);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handleReset = () => {
    setScore(0);
    setIncorrectAnswers(0);
    setCurrentQuestionIndex(0);
    setIsQuizCompleted(false);
    setShowCorrectAnswer("");
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="big-quiz">
      {!isQuizCompleted ? (
        <div>
          <h2>Soal {currentQuestionIndex + 1} dari {questions.length}</h2>
          <p>{questions[currentQuestionIndex].question}</p>
          <div>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="quiz-button"
              >
                {option}
              </button>
            ))}
          </div>
          {answerStatus && (
            <p className={`answer-status ${answerStatus === "Benar!" ? "correct" : "incorrect"}`}>
              {answerStatus}
            </p>
          )}
          {showCorrectAnswer && (
            <p className="correct-answer">{showCorrectAnswer}</p>
          )}
          <div>
            <button
            onClick={handlePrevious}
            className="previous-button"
            disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="next-button"
              disabled={currentQuestionIndex === questions.length - 1}
            >
              Next
            </button>
          </div>
          </div>
      ) : (
        <div>
          <h2>Quiz Selesai!</h2>
          <p>Skor: {score}</p>
          <p>Jawaban salah: {incorrectAnswers}</p>
          <button onClick={handleReset} className="reset-button">
            Mulai Lagi
          </button>
        </div>
      )}
    </div>
  );
};

export default BigQuiz;
