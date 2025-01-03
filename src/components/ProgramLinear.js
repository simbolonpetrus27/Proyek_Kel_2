import React, { useState, useRef } from 'react';
import MateriProgramLinear from './MateriProgramLinear'; // Import komponen materi
import ContohSoalProgramLinear from './ContohSoalProgramLinear'; // Import komponen contoh soal
import PembahasanProgramLinear from './PembahasanProgramLinear'; // Import komponen pembahasan
import MiniQuizProgramLinear from './MiniQuizProgramLinear.js'; // Import komponen mini quiz

const ProgramLinear = () => {
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
        {/* Introduction Section */}
        {!activeSection && (
          <div style={styles.introduction}>
            <h1>Selamat Datang di Pembelajaran Program Linear</h1>
            <p>
              Dalam pembelajaran ini, Anda akan mempelajari konsep dasar dan penerapan dari 
              *Program Linear*, mulai dari materi dasar, contoh soal, pembahasan, hingga menguji 
              pemahaman Anda dengan mini quiz. Mari kita mulai!
            </p>
            <p>
              Gunakan menu di sebelah kiri untuk menjelajahi berbagai bagian materi yang telah kami 
              sediakan. Semoga perjalanan pembelajaran Anda berjalan dengan lancar dan sukses!
            </p>
          </div>
        )}

        {/* Materi Section */}
        {activeSection === 'materi' && (
          <div ref={materiRef} style={styles.section}>
            <MateriProgramLinear /> {/* Menampilkan Komponen Materi */}
          </div>
        )}

        {/* Contoh Soal Section */}
        {activeSection === 'contohSoal' && (
          <div ref={contohSoalRef} style={styles.section}>
            <ContohSoalProgramLinear /> {/* Menampilkan Komponen Contoh Soal */}
          </div>
        )}

        {/* Pembahasan Section */}
        {activeSection === 'pembahasan' && (
          <div ref={pembahasanRef} style={styles.section}>
            <PembahasanProgramLinear /> {/* Menampilkan Komponen Pembahasan */}
          </div>
        )}

        {/* Mini Quiz Section */}
        {activeSection === 'miniQuiz' && (
          <div ref={miniQuizRef} style={styles.section}>
            <MiniQuizProgramLinear /> {/* Menampilkan Komponen Mini Quiz */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramLinear;
