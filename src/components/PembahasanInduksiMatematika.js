import React from 'react';

function PembahasanInduksiMatematika() {
  return (
    <div className="container">
      <h2>Contoh Soal Matrix - Pembahasan Lengkap</h2>

      {/* Soal 1: Penjumlahan dan Pengurangan Matriks */}
      <section className="soal">
        <h3>blm ad cokkk</h3>
        <p>
          Diketahui dua matriks berikut:
          <br />
          <strong>A = </strong> 
          <em>[ 2  3;  4  5 ]</em>
          <br />
          <strong>B = </strong>
          <em>[ 1  4;  6  7 ]</em>
          <br />
          Hitunglah A + B dan A - B!
        </p>
        <p>
          <strong>Langkah 2: Menghitung Invers Matriks A</strong>
          <br />
          Setelah menghitung determinan A, kita dapat menghitung inversnya:
          <br />
          <em>A⁻¹ = (1/10) × [6  -7; -2  4]</em>
          <br />
          <em>A⁻¹ = [0.6  -0.7; -0.2  0.4]</em>
        </p>
      </section>
    </div>
  );
}

export default PembahasanInduksiMatematika;
