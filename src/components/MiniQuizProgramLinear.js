import React, { useState } from 'react';

const MiniQuiz = () => {
  const [selectedAnswerMCQ, setSelectedAnswerMCQ] = useState('');
  const [essayAnswer, setEssayAnswer] = useState('');
  const [selectedAnswerTF, setSelectedAnswerTF] = useState('');

  // Data untuk soal-soal hanya Program Linear
  const questions = {
    ProgramLinear: {
      mcq: [
        {
          question: 'Apa yang dimaksud dengan sistem persamaan linear?',
          options: ['Sekumpulan persamaan yang memiliki banyak solusi', 'Sekumpulan persamaan yang memiliki satu solusi', 'Sekumpulan persamaan yang memiliki dua solusi', 'Sekumpulan persamaan yang hanya memiliki solusi tidak real'],
          correctAnswer: 'Sekumpulan persamaan yang memiliki satu solusi',
        },
        {
          question: 'Sistem persamaan linear berikut memiliki berapa solusi? 2x + 3y = 5, 4x + 6y = 10',
          options: ['Tidak ada solusi', 'Satu solusi', 'Tidak terhingga banyaknya solusi', 'Dua solusi'],
          correctAnswer: 'Tidak terhingga banyaknya solusi',
        },
        {
          question: 'Metode yang digunakan untuk menyelesaikan sistem persamaan linear dengan dua variabel adalah?',
          options: ['Eliminasi', 'Faktorisasi', 'Integral', 'Diferensiasi'],
          correctAnswer: 'Eliminasi',
        },
        {
          question: 'Berapa banyak solusi yang dimiliki sistem persamaan berikut? 3x + y = 7, 2x - y = 4',
          options: ['Satu solusi', 'Tidak ada solusi', 'Tidak terhingga banyaknya solusi', 'Dua solusi'],
          correctAnswer: 'Satu solusi',
        },
        // (Lanjutkan dengan soal lainnya)
      ],
      essay: [
        {
          question: 'Jelaskan langkah-langkah yang digunakan untuk menyelesaikan sistem persamaan linear menggunakan metode eliminasi.',
        },
        {
          question: 'Apa perbedaan antara sistem persamaan linear yang konsisten dan sistem yang tidak konsisten? Berikan contoh untuk masing-masing.',
        },
        // (Lanjutkan dengan soal essay lainnya)
      ],
      tf: [
        {
          question: 'Sistem persamaan linear selalu memiliki satu solusi.',
          correctAnswer: 'False',
        },
        {
          question: 'Metode eliminasi hanya dapat digunakan untuk sistem persamaan linear dengan dua variabel.',
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
    const topicQuestions = questions.ProgramLinear;  // Fokus hanya pada Program Linear
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
      <h2>Mini Quiz - Program Linear</h2>
      
      {/* Soal Pilihan Ganda */}
      {questions.ProgramLinear.mcq.map((q, index) => (
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
      {questions.ProgramLinear.essay.map((q, index) => (
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
      {questions.ProgramLinear.tf.map((q, index) => (
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
        Periksa Jawaban
      </button>
    </div>
  );
};

export default MiniQuizProgramLinear;
