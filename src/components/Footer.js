import React from 'react';

function Footer() {
  const materials = [
    'Matriks',
    'Transformasi',
    'Induksi Matematika',
    'Program Linear',
    'Turunan',
    'Integral',
  ];

  return (
    <footer>
      <div className="footer-content">
        <p className="footer-title">Daftar Materi:</p>
        <ul className="footer-list">
          {materials.map((material, index) => (
            <li key={index} className="footer-item">
              {material}
            </li>
          ))}
        </ul>

        {/* Updated introduction in English */}
        <p className="footer-icons-title">
        Untuk informasi dan info lebih lanjut:
        </p>

        <div className="footer-icons">
          <a href="https://www.instagram.com/mantappuacademy?igsh=MW5oMHAxdXJ0N2FraA==" title="Follow Mantappu Academy on Instagram" target="_blank" rel="noopener noreferrer" className="footer-link">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram logo" className="footer-icon" />
          </a>
          <a href="https://x.com/LatihanMat?t=JLsFgdGPC6Tg0o6N_yYCow&s=08" title="Tweet icons" target="_blank" rel="noopener noreferrer" className="footer-link">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Tweet icon" className="footer-icon" />
          </a>
          <a href="https://www.facebook.com/share/yKdXwox1rYp18f8D/" title="Facebook icons" target="_blank" rel="noopener noreferrer" className="footer-link">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook icon" className="footer-icon" />
          </a>
        </div>
      </div>
      <p className="footer-bottom">&copy; 2024 MASI. All rights reserved.</p>

      <style>
        {`
          footer {
            width: 100%;
            padding: 130px;
            background-color: #4b3621;
            color: white;
            text-align: center;
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .footer-content {
            width: 100%;
            max-width: 600px; /* Lebar maksimal untuk konten footer */
            margin-bottom: 20px; /* Jarak dengan teks bawah */
            text-align: left; /* Rata kiri untuk daftar materi */
            position: relative;
          }

          .footer-title {
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 18px;
            text-align: left;
          }

          .footer-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .footer-item {
            font-size: 1rem;
            margin: 5px 0; /* Jarak antar item */
          }

          .footer-bottom {
            font-size: 0.9rem;
            margin-top: 10px;
            text-align: center; /* Tetap rata tengah untuk teks bawah */
          }

          .footer-icons-title {
            font-size: 1.2rem;
            margin-bottom: 15px;
            text-align: center;
            color: black;
          }

          .footer-icons {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 10px;
          }

          .footer-link {
            display: inline-block;
          }

          .footer-icon {
            width: 40px;
            height: 40px;
            transition: transform 0.3s;
          }

          .footer-icon:hover {
            transform: scale(1.1);
          }

        `}
      </style>
    </footer>
  );
}

export default Footer;
