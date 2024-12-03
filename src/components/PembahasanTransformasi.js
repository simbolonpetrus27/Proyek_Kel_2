import React from 'react';
import './PembahasanTransformasi.css';

const PembahasanTransformasi = () => {
  const pembahasan = [
    {
      question: 'Apa itu transformasi geometri?',
      explanation: `Transformasi geometri adalah perubahan posisi, bentuk, atau ukuran objek dalam ruang. Ini mencakup berbagai jenis transformasi seperti translasi, rotasi, refleksi, dan penskalaan yang mengubah objek tetapi tetap mempertahankan beberapa sifat geometrisnya.`
    },
    {
      question: 'Apa yang dimaksud dengan translasi?',
      explanation: `Translasi adalah perpindahan objek tanpa mengubah bentuk atau ukurannya. Dalam translasi, setiap titik objek bergerak dengan jarak dan arah yang sama.`
    },
    {
      question: 'Apa itu rotasi dalam transformasi geometri?',
      explanation: `Rotasi adalah transformasi yang memutar objek di sekitar titik tertentu dengan sudut tertentu. Dalam rotasi, objek tetap dalam bentuk yang sama, hanya posisinya yang berubah.`
    },
    {
      question: 'Pemantulan terhadap sumbu X menghasilkan...',
      explanation: `Pemantulan terhadap sumbu X adalah refleksi objek terhadap garis sumbu X. Setiap titik pada objek dipantulkan ke posisi yang simetris terhadap sumbu X.`
    },
    {
      question: 'Apa yang terjadi pada objek setelah dilakukan penskalaan?',
      explanation: `Penskalaan adalah transformasi yang mengubah ukuran objek, bisa membesar atau mengecil, berdasarkan faktor penskalaan yang diberikan. Objek tetap berada dalam bentuk yang sama, tetapi ukurannya berubah.`
    }
  ];

  return (
    <div className="pembahasan-container">
      <h2>Pembahasan Soal Transformasi Geometri</h2>
      {pembahasan.map((item, index) => (
        <div key={index} className="pembahasan-card">
          <div className="question">
            <strong>Soal {index + 1}:</strong> {item.question}
          </div>
          <div className="explanation">
            <strong>Pembahasan:</strong> {item.explanation}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PembahasanTransformasi;
