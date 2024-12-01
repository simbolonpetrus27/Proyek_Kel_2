import React, { useState, useRef } from 'react';
import MateriTransformasi from './MateriTransformasi'; // Pastikan file ini ada
import ContohSoalTransformasi from './ContohSoalTransformasi'; // Pastikan file ini ada
import PembahasanTransformasi from './PembahasanTransformasi'; // Pastikan file ini ada
import MiniQuizTransformasi from './MiniQuizTransformasi'; // Pastikan file ini ada

const Transformasi = () => {
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
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <button
          style={styles.button}
          onClick={() => {
            setActiveSection('materi');
            scrollToSection(materiRef);
          }}
        >
          Materi
        </button>
        <button
          style={styles.button}
          onClick={() => {
            setActiveSection('contohSoal');
            scrollToSection(contohSoalRef);
          }}
        >
          Contoh Soal
        </button>
        <button
          style={styles.button}
          onClick={() => {
            setActiveSection('pembahasan');
            scrollToSection(pembahasanRef);
          }}
        >
          Pembahasan
        </button>
        <button
          style={styles.button}
          onClick={() => {
            setActiveSection('miniQuiz');
            scrollToSection(miniQuizRef);
          }}
        >
          Mini Quiz
        </button>
      </div>
      <div style={styles.content}>
        {!activeSection && (
          <div style={styles.introduction}>
            Selamat datang di pembelajaran Transformasi Geometri! <br />
            Mari kita eksplorasi konsep-konsep menarik bersama. Jangan lupa ikuti mini quiz di akhir untuk menguji
            pemahaman Anda. Selamat belajar!
          </div>
        )}
        {activeSection === 'materi' && (
          <div ref={materiRef} style={styles.section}>
            <MateriTransformasi />
          </div>
        )}
        {activeSection === 'contohSoal' && (
          <div ref={contohSoalRef} style={styles.section}>
            <ContohSoalTransformasi />
          </div>
        )}
        {activeSection === 'pembahasan' && (
          <div ref={pembahasanRef} style={styles.section}>
            <PembahasanTransformasi />
          </div>
        )}
        {activeSection === 'miniQuiz' && (
          <div ref={miniQuizRef} style={styles.section}>
            <MiniQuizTransformasi />
          </div>
        )}
      </div>
    </div>
  );
};

export default Transformasi;
