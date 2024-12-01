import React, { useState, useRef } from 'react';
import MateriTransformasi from './MateriTransformasi'; // Import komponen materi
import ContohSoalTransformasi from './ContohSoalTransformasi'; // Import komponen contoh soal
import PembahasanTransformasi from './PembahasanTransformasi.js'; // Import komponen pembahasan
import MiniQuizTransformasi from './MiniQuizTransformasi.js'; // Import komponen mini quiz

const Transformasi = () => {
  // Menggunakan useState untuk menentukan konten yang aktif
  const [activeSection, setActiveSection] = useState(''); // bisa berupa 'materi', 'contohSoal', 'pembahasan', 'miniQuiz'

  // Menggunakan useRef untuk mereferensikan tiap bagian
  const materiRef = useRef(null);
  const contohSoalRef = useRef(null);
  const pembahasanRef = useRef(null);
  const miniQuizRef = useRef(null);

  // Fungsi untuk menggulir ke bagian tertentu
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.scrollBy(0, -70); // Adjust scroll untuk memastikan alignment
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
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
    buttonHover: {
      backgroundColor: '#9c6644',
      transform: 'scale(1.05)',
    },
    content: {
      flexGrow: 1,
      padding: '30px',
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
      fontWeight: 'bold',
      fontSize: '24px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        {/* Tombol untuk menggulir ke section */}
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
          }} // Mengubah state dan menggulir ke Materi
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
          }} // Mengubah state dan menggulir ke Contoh Soal
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
          }} // Mengubah state dan menggulir ke Pembahasan
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
          }} // Mengubah state dan menggulir ke Mini Quiz
        >
          Mini Quiz
        </button>
      </div>

      {/* Konten */}
      <div style={styles.content}>
        {/* Materi Section */}
        {activeSection === 'materi' && (
          <div ref={materiRef} style={styles.section}>
            <MateriTransformasi /> {/* Menampilkan Komponen Materi */}
          </div>
        )}

        {/* Contoh Soal Section */}
        {activeSection === 'contohSoal' && (
          <div ref={contohSoalRef} style={styles.section}>
            <ContohSoalTransformasi /> {/* Menampilkan Komponen Contoh Soal */}
          </div>
        )}

        {/* Pembahasan Section */}
        {activeSection === 'pembahasan' && (
          <div ref={pembahasanRef} style={styles.section}>
            <PembahasanTransformasi /> {/* Menampilkan Komponen Pembahasan */}
          </div>
        )}

        {/* Mini Quiz Section */}
        {activeSection === 'miniQuiz' && (
          <div ref={miniQuizRef} style={styles.section}>
            <MiniQuizTransformasi /> {/* Menampilkan Komponen Mini Quiz */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Transformasi;