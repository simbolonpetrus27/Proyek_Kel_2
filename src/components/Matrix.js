import React, { useRef } from 'react';

const Matrix = () => {
  const materiRef = useRef(null);
  const contohSoalRef = useRef(null);

  // Fungsi untuk menggulir ke bagian tertentu
  const scrollToSection = (ref) => {
    // Pastikan kita memberi sedikit waktu sebelum scroll
    setTimeout(() => {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.scrollBy(0, -70); // Adjust scroll to ensure alignment
    }, 100);
  };

  // Helper function to render matrix as a clean grid
  const renderMatrix = (matrix) => {
    return (
      <pre style={{ fontFamily: '"Courier New", monospace', fontSize: '16px', whiteSpace: 'pre-wrap' }}>
        {`[ ${matrix.map(row => row.join('  ')).join(' \n')} ]`}
      </pre>
    );
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
      backgroundColor: '#ffffff',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      marginBottom: '50px',
    },
    heading: {
      color: '#6f4e37',
      marginBottom: '20px',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '24px',
    },
    paragraph: {
      lineHeight: '1.8',
      color: '#555',
      fontSize: '16px',
    },
    list: {
      marginLeft: '20px',
      color: '#555',
      fontSize: '16px',
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
          onClick={() => window.location.replace('/matrix/miniquiz')}
        >
          Mini Quiz
        </button>
      </div>

      {/* Konten */}
      <div style={styles.content}>
        {/* Materi Section */}
        <div ref={materiRef} style={styles.section}>
          <h2 style={styles.heading}>Materi Matrix</h2>
          <p style={styles.paragraph}>
            <strong>Matrix</strong> adalah susunan bilangan atau simbol dalam baris dan kolom. 
            Matriks digunakan dalam operasi matematika seperti penjumlahan, pengurangan, perkalian, dan sebagainya.
          </p>
          <h3 style={styles.heading}>Jenis-Jenis Matriks</h3>
          <ul style={styles.list}>
            <li>Matriks Baris: Matriks dengan satu baris.</li>
            <li>Matriks Kolom: Matriks dengan satu kolom.</li>
            <li>Matriks Persegi: Matriks dengan jumlah baris sama dengan jumlah kolom.</li>
            <li>Matriks Nol: Matriks dengan semua elemen nol.</li>
            <li>Matriks Identitas: Matriks diagonal dengan elemen utama bernilai 1.</li>
          </ul>
        </div>

        {/* Contoh Soal Section */}
        <div ref={contohSoalRef} style={styles.section}>
          <h2 style={styles.heading}>Contoh Soal Matrix</h2>
          <section>
            <h3>Soal 1: Penjumlahan dan Pengurangan Matriks</h3>
            <p style={styles.paragraph}>
              <strong>Soal:</strong> Diketahui matriks A=[2 3; 4 5] dan B=[1 4; 6 7]. Hitung A+B dan A-B.
            </p>
            <p>
              <strong>Pembahasan:</strong><br />
              Untuk penjumlahan, tambahkan elemen-elemen yang posisinya sama:<br />
              A + B = {renderMatrix([[2, 3], [4, 5]])} + {renderMatrix([[1, 4], [6, 7]])} = {renderMatrix([[3, 7], [10, 12]])}.<br />
              Untuk pengurangan, kurangi elemen-elemen yang posisinya sama:<br />
              A - B = {renderMatrix([[2, 3], [4, 5]])} - {renderMatrix([[1, 4], [6, 7]])} = {renderMatrix([[1, -1], [-2, -2]])}.
            </p>
          </section>
          <section>
            <h3>Soal 2: Perkalian Matriks</h3>
            <p style={styles.paragraph}>
              <strong>Soal:</strong> Diketahui A=[1 2; 3 4] dan B=[5 6; 7 8]. Hitung A×B.
            </p>
            <p>
              <strong>Pembahasan:</strong><br />
              Kalikan elemen baris A dengan kolom B:<br />
              A × B = {renderMatrix([[1, 2], [3, 4]])} × {renderMatrix([[5, 6], [7, 8]])} = {renderMatrix([[19, 22], [43, 50]])}.
            </p>
          </section>
          <section>
            <h3>Soal 3: Transpos Matriks</h3>
            <p style={styles.paragraph}>
              <strong>Soal:</strong> Hitung Transpos dari A=[1 2 3; 4 5 6].
            </p>
            <p>
              <strong>Pembahasan:</strong><br />
              Transpos dilakukan dengan menukar elemen baris menjadi kolom:<br />
              Transpos(A) = {renderMatrix([[1, 4], [2, 5], [3, 6]])}.
            </p>
          </section>
          <section>
            <h3>Soal 4: Determinan Matriks</h3>
            <p style={styles.paragraph}>
              <strong>Soal:</strong> Hitung determinan dari A=[3 4; 5 6].
            </p>
            <p>
              <strong>Pembahasan:</strong><br />
              Determinan dihitung dengan rumus: det(A) = ad - bc.<br />
              Det(A) = (3×6) - (4×5) = 18 - 20 = -2.
            </p>
          </section>
          <section>
            <h3>Soal 5: Invers Matriks</h3>
            <p style={styles.paragraph}>
              <strong>Soal:</strong> Hitung invers dari A=[4 7; 2 6].
            </p>
            <p>
              <strong>Pembahasan:</strong><br />
              Invers matriks dihitung dengan rumus: A<sup>-1</sup> = (1/det(A)) × adj(A).<br />
              Det(A) = 4×6 - 7×2 = 24 - 14 = 10.<br />
              Invers(A) = (1/10) × {renderMatrix([[6, -7], [-2, 4]])} = {renderMatrix([[0.6, -0.7], [-0.2, 0.4]])}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Matrix;
