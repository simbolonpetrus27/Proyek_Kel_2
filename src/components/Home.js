import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './bg2.jpg';

function Home({ userName }) {
  const navigate = useNavigate();
  const [hoveredBox, setHoveredBox] = useState(null);

  const handleBoxClick = (path) => {
    navigate(path);
  };

  const handleMouseEnter = (box) => {
    setHoveredBox(box);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  const boxDescriptions = {
    'BAB 1': 'Ini adalah penjelasan untuk BAB 1.',
    'BAB 2': 'Ini adalah penjelasan untuk BAB 2.',
    'BAB 3': 'Ini adalah penjelasan untuk BAB 3.',
    'BAB 4': 'Ini adalah penjelasan untuk BAB 4.',
    'BAB 5': 'Ini adalah penjelasan untuk BAB 5.',
    'BAB 6': 'Ini adalah penjelasan untuk BAB 6.',
  };

  return (
    <div
      style={{
        minHeight: '200vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '0',
        margin: '0',
        flexDirection: 'column',
      }}
    >
      {/* Ucapan Selamat Datang */}
      <div style={{ marginBottom: '20px', zIndex: 1, marginTop: '100px' }}>
        <h2
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            fontFamily: 'Quicksand',
            margin: '0',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
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

      {/* Bagian Kosong untuk Scroll */}
      <div style={{ flexGrow: 1, height: '100vh', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Box BAB 1 hingga BAB 3 */}
        <div style={{ ...boxMILContainerStyle, marginTop: '40px' }}>
          {['BAB 1', 'BAB 2', 'BAB 3'].map((item, index) => (
            <div 
              key={index}
              style={{
                ...boxMILStyle,
                transform: hoveredBox === item ? 'scale(1.05)' : 'scale(1)', // Menambahkan efek perbesaran saat hover
              }} 
              onClick={() => {
                // Menentukan path berdasarkan item
                const path = item === 'BAB 1' ? '/matrix' :
                             item === 'BAB 2' ? '/induksi-matematika' :
                             item === 'BAB 3' ? '/linear' : '/';
                if (path !== '/') {
                  handleBoxClick(path);
                }
              }}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              <div style={{ transition: 'opacity 0.3s', opacity: hoveredBox === item ? 0 : 1, textAlign: 'center', lineHeight: '1.2' }}>
                {item}
              </div>
              <div style={{ transition: 'opacity 0.3s', opacity: hoveredBox === item ? 1 : 0, textAlign: 'center', lineHeight: '1.2' }}>
                {boxDescriptions[item]}
              </div>
            </div>
          ))}
        </div>

        {/* Box BAB 4 hingga BAB 6 */}
        <div style={{ ...boxMILContainerStyle, marginTop: '40px' }}>
          {['BAB 4', 'BAB 5', 'BAB 6'].map((item, index) => (
            <div 
              key={index + 3} // Menghindari duplikasi key
              style={{
                ...boxMILStyle,
                transform: hoveredBox === item ? 'scale(1.05)' : 'scale(1)', // Menambahkan efek perbesaran saat hover
              }} 
              onClick={() => {
                // Menentukan path berdasarkan item
                const path = item === 'BAB 4' ? '/integral' : '/'; // BAB 5 dan BAB 6 tidak terhubung ke halaman mana pun
                if (path !== '/') {
                  handleBoxClick(path);
                }
              }}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              <div style={{ transition: 'opacity 0.3s', opacity: hoveredBox === item ? 0 : 1, textAlign: 'center', lineHeight: '1.2' }}>
                {item}
              </div>
              <div style={{ transition: 'opacity 0.3s', opacity: hoveredBox === item ? 1 : 0, textAlign: 'center', lineHeight: '1.2' }}>
                {boxDescriptions[item]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const boxMILContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '40px',
};

const boxMILStyle = {
  width: '225px', height: '300px', // Memperbesar tinggi box menjadi 300px
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.2rem', // Memperkecil ukuran font
  fontWeight: 'bold',
  color: '#333',
  margin: '0 15px', // Menambah jarak antar box
  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.4)',
  transition: 'transform 0.3s, box-shadow 0.3s', // Menambahkan transisi untuk shadow
  cursor: 'pointer',
};

export default Home;