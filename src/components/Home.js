import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './bg2.jpg';

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
        justifyContent: 'center',
        alignItems: 'flex-start', // Align items at the start (top)
        color: 'white',
        textAlign: 'center',
        padding: '0', // Remove padding from the outer container
        margin: '0', // Remove margin from the outer container
      }}
    >
      <div style={{ display: 'flex', width: '100%', maxWidth: '1200px', height: '100%' }}>
        <div style={{ flex: 2, padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '100px' }}>
          <h2
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              fontFamily: 'Quicksand',
              margin: '0', // Remove default margin
              whiteSpace: 'nowrap', // Prevent wrapping
              overflow: 'hidden', // Hide overflow
              textOverflow: 'ellipsis', // Add ellipsis if text overflows
            }}
          >
            Selamat Datang {userName}!
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
            flexDirection: 'row', // Arrange boxes in a row
            width: '100%', // Full width of the container
            height: '100%', // Full height of the container
            padding: '0', // Remove all padding
            margin: '0', // Remove any margin
            justifyContent: 'flex-end', // Align boxes to the right
            boxSizing: 'border-box', // Include padding and border in element's total width and height
          }}
        >
          <div onClick={() => handleBoxClick('/matrix')} style={fullHeightBoxStyle}>
            M
          </div>
          <div onClick={() => handleBoxClick('/induksi-matematika')} style={fullHeightBoxStyle}>
            I
          </div>
          <div onClick={() => handleBoxClick('/linear')} style={fullHeightBoxStyle}>
            L
          </div>
          <div onClick={() => handleBoxClick('/integral')} style={fullHeightBoxStyle}>
            I
          </div>
        </div>
      </div>
    </div>
  );
}

const fullHeightBoxStyle = {
  width: '100px', // Set a larger fixed width for the boxes
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  borderRadius: '0', // Set borderRadius to 0 for sharp corners
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
  height: '100%', // Full height of the parent container
};

export default Home;