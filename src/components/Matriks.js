import React, { useState, useRef } from 'react';
import MateriMatriks from './MateriMatriks.js';
import ContohSoalMatriks from './ContohSoalMatriks.js';
import PembahasanMatriks from './PembahasanMatriks';
import MiniQuizMatriks from './MiniQuizMatriks.js';

const Matriks = () => {
  const [activeSection, setActiveSection] = useState(''); // Menentukan konten aktif
  const materiRef = useRef(null);
  const contohSoalRef = useRef(null);
  const pembahasanRef = useRef(null);
  const miniQuizRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.scrollBy(0, -70);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      fontFamily: '"Playfair Display", serif', // Font lebih mewah
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
      fontFamily: '"Cinzel", serif', // Dekorasi font pada tombol
      fontWeight: '700',
      textAlign: 'left',
      transition: 'background-color 0.3s, transform 0.2s',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
    buttonHover: {
      backgroundColor: '#9c6644',
      transform: 'scale(1.05)',
    },
    content: {
      flexGrow: 1,
      padding: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    section: {
      padding: '20px',
      marginBottom: '50px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      color: '#6f4e37',
      marginBottom: '20px',
      textAlign: 'center',
      fontFamily: '"Playfair Display", serif',
      fontWeight: '700',
      fontSize: '28px',
      letterSpacing: '1px',
    },
    introduction: {
      textAlign: 'center',
      color: '#6f4e37',
      fontSize: '22px',
      fontFamily: '"Playfair Display", serif',
      fontWeight: '500',
      lineHeight: '1.8',
      letterSpacing: '0.5px',
      maxWidth: '600px',
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      border: '2px solid #d8c3a5', // Dekorasi tambahan
    },
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <button
          style={styles.button}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
            e.target.style.transform = styles.buttonHover.transform;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = styles.button.backgroundColor;
            e.target.style.transform = 'scale(1)';
          }}
          onClick={() => {
            setActiveSection('materi');
            scrollToSection(materiRef);
          }}
        >
          Materi
        </button>
        <button
          style={styles.button}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
            e.target.style.transform = styles.buttonHover.transform;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = styles.button.backgroundColor;
            e.target.style.transform = 'scale(1)';
          }}
          onClick={() => {
            setActiveSection('contohSoal');
            scrollToSection(contohSoalRef);
          }}
        >
          Contoh Soal
        </button>
        <button
          style={styles.button}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
            e.target.style.transform = styles.buttonHover.transform;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = styles.button.backgroundColor;
            e.target.style.transform = 'scale(1)';
          }}
          onClick={() => {
            setActiveSection('pembahasan');
            scrollToSection(pembahasanRef);
          }}
        >
          Pembahasan
        </button>
        <button
          style={styles.button}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
            e.target.style.transform = styles.buttonHover.transform;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = styles.button.backgroundColor;
            e.target.style.transform = 'scale(1)';
          }}
          onClick={() => {
            setActiveSection('miniQuiz');
            scrollToSection(miniQuizRef);
          }}
        >
          Mini Quiz
        </button>
      </div>

      {/* Konten */}
      <div style={styles.content}>
        {/* Kata-kata pembuka */}
        {activeSection === '' && (
          <div style={styles.introduction}>
            <h1>Selamat datang di Pembelajaran Matriks!</h1>
            <p>
              Sebelum memulai, mari kita pelajari dasar-dasar Matriks dan aplikasinya dalam berbagai 
              konteks. Klik salah satu menu di sebelah kiri untuk melanjutkan ke materi, contoh soal, 
              pembahasan, atau kuis interaktif!
            </p>
          </div>
        )}

        {/* Materi Section */}
        {activeSection === 'materi' && (
          <div ref={materiRef} style={styles.section}>
            <MateriMatriks />
          </div>
        )}

        {/* Contoh Soal Section */}
        {activeSection === 'contohSoal' && (
          <div ref={contohSoalRef} style={styles.section}>
            <ContohSoalMatriks />
          </div>
        )}

        {/* Pembahasan Section */}
        {activeSection === 'pembahasan' && (
          <div ref={pembahasanRef} style={styles.section}>
            <PembahasanMatriks />
          </div>
        )}

        {/* Mini Quiz Section */}
        {activeSection === 'miniQuiz' && (
          <div ref={miniQuizRef} style={styles.section}>
            <MiniQuizMatriks />
          </div>
        )}
      </div>
    </div>
  );
};

export default Matriks;
