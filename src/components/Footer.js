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
        `}
      </style>
    </footer>
  );
}

export default Footer;
