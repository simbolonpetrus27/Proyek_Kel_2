import React from 'react';
import backgroundImage from './regist.jpg';

function Home() {
  return (
    <div style={{
      height: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    }}>
      <h2 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        fontFamily: 'Quicksand',
      }}>Selamat Datang di MILI</h2>
      <p style={{
        fontSize: '1.5rem',
        marginTop: '10px',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        fontFamily: 'Quicksand',
      }}>Matematika Kelas 11<br />Matriks-Induksi Matematika-Linear-Integral</p>
    </div>
  );
}

export default Home;