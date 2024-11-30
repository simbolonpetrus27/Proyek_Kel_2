import React, { useState } from 'react';

const MiniQuizInduksiMatematika = () => {
  const [selectedAnswerMCQ, setSelectedAnswerMCQ] = useState('');
  const [essayAnswer, setEssayAnswer] = useState('');
  const [selectedAnswerTF, setSelectedAnswerTF] = useState('');

  // Data untuk soal-soal Induksi Matematika
  const questions = {
    InduksiMatematika: {
      mcq: [
        {
          question: 'Apa itu induksi matematika?',
          options: [
            'Metode untuk membuktikan pernyataan matematika untuk semua bilangan bulat',
            'Metode untuk menemukan angka dalam deret',
            'Metode untuk menyelesaikan persamaan diferensial',
            'Metode untuk mengoptimalkan fungsi',
          ],
          correctAnswer: 'Metode untuk membuktikan pernyataan matematika untuk semua bilangan bulat',
        },
        {
          question: 'Langkah pertama dalam induksi matematika adalah?',
          options: ['Menunjukkan basis induksi', 'Menentukan rumus rekursif', 'Menghitung hasil eksperimen', 'Membuktikan kebenaran untuk n'],
          correctAnswer: 'Menunjukkan basis induksi',
        },
        {
          question: 'Apa yang dimaksud dengan hipotesis induksi?',
          options: ['Pernyataan yang diterima benar untuk n=k', 'Pernyataan yang benar untuk n=k+1', 'Proses pembuktian induksi', 'Kesimpulan dari pembuktian'],
          correctAnswer: 'Pernyataan yang diterima benar untuk n=k',
        },
        // (Lanjutkan dengan soal lainnya)
      ],
      essay: [
        {
          question: 'Jelaskan langkah-langkah dalam pembuktian induksi matematika!',
        },
        {
          question: 'Apa perbedaan antara induksi matematika dan pembuktian langsung?',
        },
        // (Lanjutkan dengan soal essay lainnya)
      ],
      tf: [
        {
          question: 'Induksi matematika hanya dapat digunakan untuk bilangan bulat positif.',
          correctAnswer: 'True',
        },
        {
          question: 'Setiap pernyataan matematika dapat dibuktikan dengan induksi.',
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
    const topicQuestions = questions.InduksiMatematika;  // Fokus hanya pada Induksi Matematika
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
      <h2>Mini Quiz - Induksi Matematika</h2>
      
      {/* Soal Pilihan Ganda */}
      {questions.InduksiMatematika.mcq.map((q, index) => (
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
      {questions.InduksiMatematika.essay.map((q, index) => (
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
      {questions.InduksiMatematika.tf.map((q, index) => (
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

export default MiniQuizInduksiMatematika;
