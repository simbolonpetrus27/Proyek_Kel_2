import React, { useState } from 'react';

const MiniQuizIntegral = () => {
  const [selectedAnswerMCQ, setSelectedAnswerMCQ] = useState('');
  const [essayAnswer, setEssayAnswer] = useState('');
  const [selectedAnswerTF, setSelectedAnswerTF] = useState('');

  // Data untuk soal-soal Integral
  const questions = {
    Integral: {
      mcq: [
        {
          question: 'Apa itu integral dalam kalkulus?',
          options: [
            'Proses untuk menghitung area di bawah kurva',
            'Proses untuk menghitung kecepatan',
            'Proses untuk menghitung perubahan suhu',
            'Proses untuk menyelesaikan persamaan diferensial',
          ],
          correctAnswer: 'Proses untuk menghitung area di bawah kurva',
        },
        {
          question: 'Apa bentuk integral tak tentu dari fungsi f(x) = 2x?',
          options: ['x^2 + C', '2x^2 + C', 'x^3 + C', '2x^3 + C'],
          correctAnswer: 'x^2 + C',
        },
        {
          question: 'Metode apa yang digunakan untuk menghitung integral dari fungsi tertentu?',
          options: ['Metode substitusi', 'Metode faktorisasi', 'Metode limit', 'Metode diferensiasi'],
          correctAnswer: 'Metode substitusi',
        },
        {
          question: 'Berapa hasil dari integral ∫ 3x^2 dx?',
          options: ['x^3 + C', 'x^2 + C', 'x^4 + C', 'x^3 + 3x + C'],
          correctAnswer: 'x^3 + C',
        },
        // (Lanjutkan dengan soal lainnya)
      ],
      essay: [
        {
          question: 'Jelaskan langkah-langkah dalam menghitung integral tak tentu!',
        },
        {
          question: 'Apa perbedaan antara integral tak tentu dan integral tentu?',
        },
        // (Lanjutkan dengan soal essay lainnya)
      ],
      tf: [
        {
          question: 'Integral tak tentu selalu memiliki hasil yang unik.',
          correctAnswer: 'False',
        },
        {
          question: 'Metode substitusi hanya digunakan untuk integral tertentu.',
          correctAnswer: 'False',
        },
        // (Lanjutkan dengan soal true/false lainnya)
      ],
    },
  };

  // Menangani perubahan jawaban pilihan ganda
  const handleMCQChange = (event) => {
    setSelectedAnswerMCQ(event.target.value);
  };

  // Menangani perubahan jawaban essay
  const handleEssayChange = (event) => {
    setEssayAnswer(event.target.value);
  };

  // Menangani perubahan jawaban true/false
  const handleTFChange = (event) => {
    setSelectedAnswerTF(event.target.value);
  };

  // Fungsi untuk mengecek jawaban
  const checkAnswers = () => {
    const topicQuestions = questions.Integral;  // Fokus hanya pada Integral
    const mcqResult = topicQuestions.mcq.map((q) => (
      selectedAnswerMCQ === q.correctAnswer ? 'Benar' : 'Salah'
    ));
    const tfResult = topicQuestions.tf.map((q) => (
      selectedAnswerTF === q.correctAnswer ? 'Benar' : 'Salah'
    ));
    alert(`Hasil:\nSoal Pilihan Ganda: ${mcqResult.join(', ')}\nSoal True/False: ${tfResult.join(', ')}\nSoal Essay: ${essayAnswer ? 'Sudah Dijawab' : 'Belum Dijawab'}`);
  };

  return (
    <div>
      <h2>Mini Quiz - Integral</h2>
      
      {/* Soal Pilihan Ganda */}
      {questions.Integral.mcq.map((q, index) => (
        <div key={index}>
          <h4>{q.question}</h4>
          {q.options.map((option, i) => (
            <div key={i}>
              <input
                type="radio"
                id={`mcq-option-${i}`}
                name="mcq"
                value={option}
                checked={selectedAnswerMCQ === option}
                onChange={handleMCQChange}
              />
              <label htmlFor={`mcq-option-${i}`}>{option}</label>
            </div>
          ))}
        </div>
      ))}

      {/* Soal Essay */}
      {questions.Integral.essay.map((q, index) => (
        <div key={index}>
          <h4>{q.question}</h4>
          <textarea
            rows="4"
            cols="50"
            value={essayAnswer}
            onChange={handleEssayChange}
            placeholder="Tulis jawaban essay Anda di sini..."
          />
        </div>
      ))}

      {/* Soal True/False */}
      {questions.Integral.tf.map((q, index) => (
        <div key={index}>
          <h4>{q.question}</h4>
          <div>
            <input
              type="radio"
              id={`tf-${index}-true`}
              name="tf"
              value="True"
              checked={selectedAnswerTF === 'True'}
              onChange={handleTFChange}
            />
            <label htmlFor={`tf-${index}-true`}>True</label>
          </div>
          <div>
            <input
              type="radio"
              id={`tf-${index}-false`}
              name="tf"
              value="False"
              checked={selectedAnswerTF === 'False'}
              onChange={handleTFChange}
            />
            <label htmlFor={`tf-${index}-false`}>False</label>
          </div>
        </div>
      ))}

      <button onClick={checkAnswers} style={{ marginTop: '20px' }}>
        Attempt Quiz
      </button>
    </div>
  );
};

export default MiniQuizIntegral;
