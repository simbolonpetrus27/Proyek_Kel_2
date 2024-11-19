import React from 'react';
import { Link } from 'react-router-dom';

const InduksiMatematika = () => {
  // Gaya untuk komponen
  const styles = {
    container: {
      textAlign: 'center',
      padding: '50px 0',
    },
    linkContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    },
    linkBox: {
      backgroundColor: '#ffffff',
      border: '1px solid #ced4da',
      borderRadius: '10px',
      padding: '30px',
      margin: '0 15px',
      textAlign: 'center',
      transition: 'transform 0.3s, box-shadow 0.3s',
      cursor: 'pointer',
      width: '150px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    linkBoxHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
    linkText: {
      color: '#007bff',
      textDecoration: 'none',
      fontWeight: 'bold',
      marginBottom: '10px', // Menambahkan margin bawah untuk memberikan ruang
    },
    description: {
      marginTop: '10px',
      color: '#6c757d',
      fontSize: '0.9rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.linkContainer}>
        {[
          { text: 'Materi', path: '/induksi-matematika/materi' },
          { text: 'Soal', path: '/induksi-matematika/contoh-soal' },
          { text: 'Pembahasan', path: '/induksi-matematika/latihan-soal' },
        ].map((item, index) => (
          <section
            key={index}
            style={styles.linkBox}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = styles.linkBoxHover.transform;
              e.currentTarget.style.boxShadow = styles.linkBoxHover.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = styles.linkBox.boxShadow;
            }}
          >
            <Link to={item.path} style={styles.linkText}>
              <h3>{item.text}</h3>
            </Link>
            {/* Jika Anda ingin menambahkan deskripsi, aktifkan bagian ini */}
            {/* {item.description && <p style={styles.description}>{item.description}</p>} */}
          </section>
        ))}
      </div>
    </div>
  );
}

export default InduksiMatematika;