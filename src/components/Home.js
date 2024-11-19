import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './regist.jpg';

function Home({ userName }) {
  const navigate = useNavigate();

  const handleBoxClick = (path) => {
    navigate(path);
  };

  return (
    <div
      style={{
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
      }}
    >
      <div style={{ marginBottom: '40px' }}>
        <h2
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            fontFamily: 'Quicksand',
          }}
        >
          Selamat Datang, {userName}!
        </h2>
        <p
          style={{
            fontSize: '1.5rem',
            marginTop: '10px',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
            fontFamily: 'Quicksand',
          }}
        >
          Matematika Kelas 11<br />
          Matriks - Induksi Matematika - Linear - Integral
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth: '800px',
        }}
      >
        <div onClick={() => handleBoxClick('/matrix')} style={boxStyle}>
          Matriks
        </div>
        <div onClick={() => handleBoxClick('/linear')} style={boxStyle}>
          Linear
        </div>
        <div onClick={() => handleBoxClick('/induksi-matematika')} style={boxStyle}>
          Induksi Matematika
        </div>
        <div onClick={() => handleBoxClick('/integral')} style={boxStyle}>
          Integral
        </div>
      </div>
    </div>
  );
}

const boxStyle = {
  width: '180px',
  height: '180px',
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  borderRadius: '15px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.3rem',
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#333',
  cursor: 'pointer',
  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.4)',
  transition: 'transform 0.3s, background-color 0.3s',
};

export default Home;