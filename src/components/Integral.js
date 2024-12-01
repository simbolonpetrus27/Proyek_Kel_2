import React, { useState, useRef } from 'react';
import MateriIntegral from './MateriIntegral'; // Import komponen materi
import ContohSoalIntegral from './ContohSoalIntegral'; // Import komponen contoh soal
import PembahasanIntegral from './PembahasanIntegral'; // Import komponen pembahasan
import MiniQuizIntegral from './MiniQuizIntegral.js'; // Import komponen mini quiz

const Integral = () => {
  const [activeSection, setActiveSection] = useState(''); // untuk navigasi
  const materiRef = useRef(null);
  const contohSoalRef = useRef(null);
  const pembahasanRef = useRef(null);
  const miniQuizRef = useRef(null);

  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      fontFamily: '"Roboto", sans-serif',
      backgroundColor: '#f9f5f1',
    },
    sidebar: {
      width: '200px',
      padding: '20px',
      backgroundColor: '#d8c3a5',
      boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    button: {
      padding: '12px 20px',
      backgroundColor: '#b08968',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 'bold',
      textAlign: 'left',
      transition: 'background-color 0.3s, transform 0.2s',
    },
    content: {
      flexGrow: 1,
      padding: '30px',
    },
    introduction: {
      textAlign: 'center',
      color: '#6f4e37',
      fontSize: '22px',
      fontFamily: '"Playfair Display", serif',
      fontWeight: '500',
      lineHeight: '1.8',
      maxWidth: '600px',
      margin: '20px auto',
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '10px',
      border: '2px solid #d8c3a5',
    },
    section: {
      padding: '20px',
      marginBottom: '50px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <button
          style={styles.button}
          onClick={() => setActiveSection('materi')} // Set active section for Materi
        >
          Materi
        </button>
        <button
          style={styles.button}
          onClick={() => setActiveSection('contohSoal')} // Set active section for Contoh Soal
        >
          Contoh Soal
        </button>
        <button
          style={styles.button}
          onClick={() => setActiveSection('pembahasan')} // Set active section for Pembahasan
        >
          Pembahasan
        </button>
        <button
          style={styles.button}
          onClick={() => setActiveSection('miniQuiz')} // Set active section for Mini Quiz
        >
          Mini Quiz
        </button>
      </div>

      {/* Konten */}
      <div style={styles.content}>
        {/* Introduction Section */}
        {!activeSection && (
          <div style={styles.introduction}>
            <h1>Selamat Datang di Pembelajaran Integral</h1>
            <p>
              Dalam pembelajaran ini, Anda akan mempelajari dasar-dasar *integral*,
              memahami konsep melalui contoh soal, dan menguji kemampuan Anda dengan pembahasan 
              serta kuis interaktif. Mari mulai perjalanan Anda!
            </p>
            <p>
              Gunakan menu di sebelah kiri untuk mengakses berbagai materi yang telah kami 
              sediakan. Selamat belajar dan semoga sukses!
            </p>
          </div>
        )}

        {/* Materi Section */}
        {activeSection === 'materi' && (
          <div ref={materiRef} style={styles.section}>
            <MateriIntegral /> {/* Menampilkan Komponen Materi */}
          </div>
        )}

        {/* Contoh Soal Section */}
        {activeSection === 'contohSoal' && (
          <div ref={contohSoalRef} style={styles.section}>
            <ContohSoalIntegral /> {/* Menampilkan Komponen Contoh Soal */}
          </div>
        )}

        {/* Pembahasan Section */}
        {activeSection === 'pembahasan' && (
          <div ref={pembahasanRef} style={styles.section}>
            <PembahasanIntegral /> {/* Menampilkan Komponen Pembahasan */}
          </div>
        )}

        {/* Mini Quiz Section */}
        {activeSection === 'miniQuiz' && (
          <div ref={miniQuizRef} style={styles.section}>
            <MiniQuizIntegral /> {/* Menampilkan Komponen Mini Quiz */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Integral;
