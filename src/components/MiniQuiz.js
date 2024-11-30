// MiniQuiz.js
import React, { useState, useEffect } from 'react';

const MiniQuiz = () => {
  const [soal, setSoal] = useState([]);  // Inisialisasi soal dengan array kosong

  // Simulasi pengambilan data soal dari API
  useEffect(() => {
    const fetchSoal = async () => {
      try {
        // Misalkan API mengembalikan data soal
        const response = await fetch('https://api.example.com/soal');
        const data = await response.json();
        setSoal(data);  // Mengatur soal dengan data yang diterima
      } catch (error) {
        console.error('Error fetching soal:', error);
      }
    };

    fetchSoal();
  }, []);  // Dependency array kosong berarti hanya dijalankan sekali saat komponen pertama kali dimuat

  return (
    <div>
      <h3>Mini Quiz</h3>
      {/* Menampilkan pesan loading jika soal kosong */}
      {soal.length === 0 ? (
        <p>Loading questions...</p>
      ) : (
        <ul>
          {soal.map((question, index) => (
            <li key={index}>{question.text}</li>  // Tampilkan soal
          ))}
        </ul>
      )}
    </div>
  );
};

export default MiniQuiz;
