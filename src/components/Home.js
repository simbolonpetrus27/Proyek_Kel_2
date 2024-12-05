import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './bg2.jpg';
import Footer from './Footer';

function Home({ userName }) {
  const navigate = useNavigate();
  const [hoveredBox, setHoveredBox] = useState(null);

  const handleBoxClick = (path) => path && navigate(path);

  const handleMouseEnter = (box) => setHoveredBox(box);

  const handleMouseLeave = () => setHoveredBox(null);

  const boxDescriptions = {
    'BAB 1': 'Matrix',
    'BAB 2': 'Transformasi',
    'BAB 3': 'Induksi Matematika',
    'BAB 4': 'Program Linear',
    'BAB 5': 'Turunan',
    'BAB 6': 'Integral',
  };

  const boxData = [
    { title: 'BAB 1', path: '/matriks' },
    { title: 'BAB 2', path: '/transformasi' },
    { title: 'BAB 3', path: '/induksimatematika' },
    { title: 'BAB 4', path: '/programlinear' },
    { title: 'BAB 5', path: '/turunan' },
    { title: 'BAB 6', path: '/integral' },
  ];

  return (
    <div className="home-container">
      <section className="welcome-section">
        <h2 className="welcome-title">Selamat Datang {userName}!</h2>
        <p className="welcome-description">
          Selamat datang di MASI (Matematika Asik), platform pembelajaran yang dirancang khusus untuk membantu Anda memahami materi seperti Matriks, Transformasi, Induksi Matematika, Linear, Turunan, dan Integral.
          Di sini, Anda akan menemukan penjelasan materi, contoh soal, pembahasan lengkap, serta latihan interaktif. Mari belajar dengan cara yang menyenangkan dan efektif bersama MASI!
        </p>
      </section>

      <section className="card-section">
        <div className="card-container">
          {boxData.map(({ title, path }, index) => (
            <div
              key={index}
              className={`card ${hoveredBox === title ? 'hovered' : ''}`}
              onClick={() => handleBoxClick(path)}
              onMouseEnter={() => handleMouseEnter(title)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="card-content">
                <p className="card-title">{title}</p>
                <p className="card-description">{boxDescriptions[title]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      <style>
        {`
          .home-container {
            min-height: 100vh;
            background-image: url(${backgroundImage});
            background-size: cover;
            background-position: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0;
            padding-bottom: 0px;
            color: white;

          }

          .welcome-section {
            margin-top: 50px;
            text-align: center;
            max-width: 800px;
          }

          .welcome-title {
            font-size: 2.5rem;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
            font-family: 'Quicksand', sans-serif;
          }

          .welcome-description {
            font-size: 1.2rem;
            margin-top: 15px;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
            font-family: 'Quicksand', sans-serif;
            line-height: 1.8;
          }

          .card-section {
            margin-top: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-bottom: 50px; /* Tambahkan jarak ke footer */
          }

          .card-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            max-width: 900px;
            width: 100%;
          }

          .card {
            height: 200px;
            background-color: rgba(255, 255, 255, 0.85);
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            cursor: pointer;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .card:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
          }

          .card-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          .card-title {
            font-size: 1.2rem;
            font-weight: bold;
            color: #333;
            margin: 0;
          }

          .card-description {
            font-size: 1rem;
            margin-top: 8px;
            color: #666;
          }

          footer {
            width: 100%;
            height: 310px; /* Pastikan tinggi tetap */
            background-color: #4b3621;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
    </div>
  );
}

export default Home;
