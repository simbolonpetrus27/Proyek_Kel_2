import React, { useRef } from 'react';
import MateriProgramLinear from './MateriProgramLinear'; // Import komponen materi
import ContohSoalProgramLinear from './ContohSoalProgramLinear'; // Import komponen contoh soal
import PembahasanProgramLinear from './PembahasanProgramLinear'; // Import komponen pembahasan
import MiniQuiz from './MiniQuiz'; // Import komponen mini quiz

const ProgramLinear = () => {
  // Menggunakan useRef untuk mereferensikan tiap bagian
  const materiRef = useRef(null);
  const contohSoalRef = useRef(null);
  const pembahasanRef = useRef(null);
  const miniQuizRef = useRef(null);

  // Fungsi untuk menggulir ke bagian tertentu
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.scrollBy(0, -70); // Adjust scroll untuk memastikan alignment, jika perlu
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
      padding: '20px', // Menambahkan padding agar bagian lebih terlihat jelas
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
          onClick={() => scrollToSection(materiRef)} // Scroll to Materi
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
          onClick={() => scrollToSection(contohSoalRef)} // Scroll to Contoh Soal
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
          onClick={() => scrollToSection(pembahasanRef)} // Scroll to Pembahasan
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
          onClick={() => scrollToSection(miniQuizRef)} // Scroll to Mini Quiz
        >
          Mini Quiz
        </button>
      </div>

      {/* Konten */}
      <div style={styles.content}>
        {/* Materi Section */}
        <div ref={materiRef} style={styles.section}>
          <MateriProgramLinear /> {/* Menampilkan Komponen Materi */}
        </div>

        {/* Contoh Soal Section */}
        <div ref={contohSoalRef} style={styles.section}>
          <ContohSoalProgramLinear /> {/* Menampilkan Komponen Contoh Soal */}
        </div>

        {/* Pembahasan Section */}
        <div ref={pembahasanRef} style={styles.section}>
          <PembahasanProgramLinear /> {/* Menampilkan Komponen Pembahasan */}
        </div>

        {/* Mini Quiz Section */}
        <div ref={miniQuizRef} style={styles.section}>
          <MiniQuiz /> {/* Menampilkan Komponen Mini Quiz */}
        </div>
      </div>
    </div>
  );
};

export default ProgramLinear;
