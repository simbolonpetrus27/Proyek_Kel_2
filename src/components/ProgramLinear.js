import React from 'react';
import { Link } from 'react-router-dom';

const ProgramLinear = () => {
  const styles = {
    container: {
      textAlign: 'left', // Mengubah menjadi left untuk memastikan text align kiri
      padding: '50px 0',
    },
    linkContainer: {
      display: 'flex',
      flexDirection: 'column', // Mengatur agar item ditampilkan secara vertikal
      alignItems: 'flex-start', // Mengatur agar item terjajar ke kiri
      width: '200px', // Mengatur lebar box
      marginLeft: '20px', // Mengatur agar box berada di sebelah kiri
      backgroundColor: '#ffffff',
      border: '1px solid #ced4da',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    linkBox: {
      padding: '20px',
      textAlign: 'center',
      transition: 'transform 0.3s, box-shadow 0.3s',
      cursor: 'pointer',
      width: '100%', // Mengatur lebar box agar penuh
    },
    linkBoxHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
    linkText: {
      color: '#007bff',
      textDecoration: 'none',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    separator: {
      height: '1px',
      backgroundColor: '#ced4da',
      margin: '0', // Menghapus margin agar tidak ada jarak
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.linkContainer}>
        {[
          { text: 'Materi', path: '/programlinear/materi' },
          { text: 'Contoh Soal', path: '/programlinear/contoh-soal' },
          { text: 'Pembahasan', path: '/programlinear/pembahasan' },
          { text: 'Mini Quiz', path: '/programlinear/miniquiz' },

        ].map((item, index) => (
          <React.Fragment key={index}>
            <section
              style={styles.linkBox}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = styles.linkBoxHover.transform;
                e.currentTarget.style.boxShadow = styles.linkBoxHover.boxShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none'; // Menghapus box shadow pada leave
              }}
            >
              <Link to={item.path} style={styles.linkText}>
                <h3>{item.text}</h3>
              </Link>
            </section>
            {/* Menambahkan garis pemisah setelah setiap box kecuali yang terakhir */}
            {index < 2 && <div style={styles.separator}></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default ProgramLinear;