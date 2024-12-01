import React, { useState, useRef } from 'react';
import MateriInduksiMatematika from './MateriInduksiMatematika';
import ContohSoalInduksiMatematika from './ContohSoalInduksiMatematika';
import PembahasanInduksiMatematika from './PembahasanInduksiMatematika';
import MiniQuizInduksiMatematika from './MiniQuizInduksiMatematika';

const InduksiMatematika = () => {
  const [activeSection, setActiveSection] = useState(''); // untuk navigasi
  const materiRef = useRef(null);
  const contohSoalRef = useRef(null);
  const pembahasanRef = useRef(null);
  const miniQuizRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.scrollBy(0, -70); // Penyesuaian scroll
    }
  };

  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      fontFamily: '"Roboto", sans-serif', // Standard font for a clean look
      backgroundColor: '#f9f5f1',
    },
    sidebar: {
      width: '250px', // Slightly wider for more room
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
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Shadow for the buttons
    },
    buttonHover: {
      backgroundColor: '#9c6644',
      transform: 'scale(1.05)',
    },
    content: {
      flexGrow: 1,
      padding: '30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
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
      fontFamily: '"Roboto", sans-serif',
      fontWeight: '700',
      fontSize: '28px',
      letterSpacing: '1px',
    },
    introduction: {
      textAlign: 'center',
      color: '#6f4e37',
      fontSize: '22px',
      fontFamily: '"Roboto", sans-serif',
      fontWeight: '500',
      lineHeight: '1.8',
      letterSpacing: '0.5px',
      maxWidth: '600px',
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      border: '2px solid #d8c3a5', // Added border for emphasis
    },
  };

  return (
    <div style={styles.container}>
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

      <div style={styles.content}>
        {/* Kata-kata pembuka */}
        {activeSection === '' && (
          <div style={styles.introduction}>
            Selamat datang di pembelajaran Induksi Matematika! <br />
            Pelajari konsep, pahami contoh soal, dan uji kemampuan Anda melalui pembahasan dan mini quiz. Selamat belajar!
          </div>
        )}

        {/* Materi Section */}
        {activeSection === 'materi' && (
          <div ref={materiRef} style={styles.section}>
            <MateriInduksiMatematika />
          </div>
        )}

        {/* Contoh Soal Section */}
        {activeSection === 'contohSoal' && (
          <div ref={contohSoalRef} style={styles.section}>
            <ContohSoalInduksiMatematika />
          </div>
        )}

        {/* Pembahasan Section */}
        {activeSection === 'pembahasan' && (
          <div ref={pembahasanRef} style={styles.section}>
            <PembahasanInduksiMatematika />
          </div>
        )}

        {/* Mini Quiz Section */}
        {activeSection === 'miniQuiz' && (
          <div ref={miniQuizRef} style={styles.section}>
            <MiniQuizInduksiMatematika />
          </div>
        )}
      </div>
    </div>
  );
};

export default InduksiMatematika;
