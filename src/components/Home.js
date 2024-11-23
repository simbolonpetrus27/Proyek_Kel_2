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

  return (
    <div
      style={{
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        color: 'white',
        textAlign: 'center',
        padding: '0',
        margin: '0',
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

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '100%',
            padding: '0',
            margin: '0',
            justifyContent: 'flex-end',
            boxSizing: 'border-box',
          }}
        >
          {['Matriks', 'Induksi Matematika', 'Linear', 'Integral'].map((item, index) => (
            <div
              key={index}
              onClick={() => handleBoxClick(item === 'Matriks' ? '/matrix' : `/${item.toLowerCase().replace(' ', '-')}`)}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
              style={{ ...fullHeightBoxStyle, ...(hoveredBox === item ? hoverStyle : {}) }}
            >
              {item.charAt(0)}
              {hoveredBox === item && (
                <div style={descriptionStyle}>
                  {item} - Penjelasan tentang {item.toLowerCase()}.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const fullHeightBoxStyle = {
  width: '100px',
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  borderRadius: '0',
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
  height: '100%',
  position: 'relative', // To position the description text
};

// Define hover style
const hoverStyle = {
  transform: 'translateY(-10px)', // Move the box up on hover
  backgroundColor: 'rgba(255, 255, 255, 1)', // Optional: Change background color on hover
};

const descriptionStyle = {
  position: 'absolute',
  bottom: '-30px', // Position below the box
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '5px',
  padding: '5px',
  fontSize: '0.9rem',
  color: '#333',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
  transition: 'opacity 0.3s',
  opacity: 1,
};

export default Home;