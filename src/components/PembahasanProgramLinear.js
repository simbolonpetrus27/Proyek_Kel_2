import React from 'react';
import './PembahasanSoalProgramLinear.css';

const PembahasanProgramSoalLinear = () => {
  const pembahasan = [
    {
      soal: 'Apa hasil dari 3x + 2y = 12 dan 4x - y = 7?',
      pembahasan: `Dari persamaan 3x + 2y = 12 dan 4x - y = 7, kita bisa menggunakan metode eliminasi atau substitusi. 
      Dengan mengalikan persamaan kedua dengan 2, kita dapatkan 8x - 2y = 14, lalu jika dijumlahkan dengan persamaan pertama (3x + 2y = 12), 
      kita mendapatkan 11x = 26, sehingga x = 2. Substitusi x ke dalam persamaan 3x + 2y = 12, didapatkan y = 3. 
      Maka, solusi dari sistem ini adalah x = 2 dan y = 3.`,
      solusi: 'x = 2, y = 3',
    },
    {
      soal: 'Selesaikan sistem persamaan berikut: 2x + 3y = 5, 4x - 2y = 8.',
      pembahasan: `Dengan metode eliminasi, kalikan persamaan pertama dengan 2 sehingga menjadi 4x + 6y = 10, 
      dan persamaan kedua tetap 4x - 2y = 8. Kemudian, kurangkan persamaan kedua dari yang pertama, 
      maka kita dapatkan 8y = 2, sehingga y = 1. Substitusi y = 1 ke dalam persamaan pertama 2x + 3y = 5, 
      didapatkan x = 1. Maka, solusi dari sistem ini adalah x = 1 dan y = 2.`,
      solusi: 'x = 1, y = 2',
    },
    {
      soal: 'Apa solusi sistem persamaan: x + y = 5 dan x - y = 1?',
      pembahasan: `Dengan menjumlahkan kedua persamaan, kita mendapatkan 2x = 6, maka x = 3. 
      Kemudian, substitusi x = 3 ke dalam persamaan pertama x + y = 5, didapatkan y = 2. 
      Maka, solusi dari sistem ini adalah x = 3 dan y = 2.`,
      solusi: 'x = 3, y = 2',
    },
    {
      soal: 'Dari sistem persamaan 3x + y = 5 dan 2x + 2y = 8, berapa x dan y?',
      pembahasan: `Dengan metode eliminasi, kalikan persamaan pertama dengan 2, sehingga menjadi 6x + 2y = 10, 
      dan persamaan kedua tetap 2x + 2y = 8. Kemudian, kurangkan persamaan kedua dari yang pertama, 
      kita mendapatkan 4x = 2, sehingga x = 1/2. Substitusi x = 1/2 ke dalam persamaan 3x + y = 5, 
      didapatkan y = 3. Maka, solusi dari sistem ini adalah x = 1/2 dan y = 3.`,
      solusi: 'x = 1/2, y = 3',
    },
    {
      soal: 'Penyelesaian dari sistem 5x + 3y = 15 dan 4x - y = 3 adalah?',
      pembahasan: `Dengan metode substitusi atau eliminasi, kita akan menemukan bahwa x = 3 dan y = 2. 
      Substitusi nilai x = 3 ke dalam persamaan pertama 5x + 3y = 15, didapatkan 15 + 3y = 15, 
      sehingga y = 0. Maka solusi dari sistem ini adalah x = 3 dan y = 0.`,
      solusi: 'x = 3, y = 0',
    },
  ];

  return (
    <div className="pembahasan-container">
      <h2>Pembahasan Soal Linear</h2>
      {pembahasan.map((item, index) => (
        <div key={index} className="pembahasan-card">
          <h3>Soal {index + 1}: {item.soal}</h3>
          <p><strong>Pembahasan:</strong> {item.pembahasan}</p>
          <p><strong>Solusi:</strong> {item.solusi}</p>
        </div>
      ))}
    </div>
  );
};

export default PembahasanProgramSoalLinear;
