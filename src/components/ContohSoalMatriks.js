import React from 'react';
import './SoalMatriks.css';

function ContohSoalMatriks() {
  return (
    <div className="container">
      <h2>Soal Matrix</h2>

      <section className="soal">
        <h3>Soal 1: Penjumlahan dan Pengurangan Matriks</h3>
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
      </section>
      <br />

      <section className="soal">
        <h3>Soal 2: Perkalian Matriks</h3>
        <p>
          Diketahui dua matriks berikut:
          <br />
          <strong>A = </strong> 
          <em>[ 1  2;  3  4 ]</em>
          <br />
          <strong>B = </strong>
          <em>[ 5  6;  7  8 ]</em>
          <br />
          Hitunglah A x B!
        </p>
      </section>
      <br />

      <section className="soal">
        <h3>Soal 3: Transpos Matriks</h3>
        <p>
          Diketahui matriks A:
          <br />
          <strong>A = </strong> 
          <em>[ 1  2  3;  4  5  6 ]</em>
          <br />
          Hitunglah transpos dari matriks A!
        </p>
      </section>
      <br />

      <section className="soal">
        <h3>Soal 4: Determinan Matriks</h3>
        <p>
          Diketahui matriks A:
          <br />
          <strong>A = </strong> 
          <em>[ 3  4;  5  6 ]</em>
          <br />
          Hitunglah determinan matriks A!
        </p>
      </section>
      <br />

      <section className="soal">
        <h3>Soal 5: Invers Matriks</h3>
        <p>
          Diketahui matriks A:
          <br />
          <strong>A = </strong> 
          <em>[ 4  7;  2  6 ]</em>
          <br />
          Hitunglah invers dari matriks A!
        </p>  
      </section>
      <br />

      {/* Soal Baru */}
      <section className="soal">
        <h3>Soal 6: Matriks Pangkat</h3>
        <p>
          Diketahui matriks A:
          <br />
          <strong>A = </strong> 
          <em>[ 1  0;  0  1 ]</em>
          <br />
          Hitunglah A^5 (A dipangkatkan 5)!
        </p>
      </section>
      <br />

      <section className="soal">
        <h3>Soal 7: Matriks Baris dan Kolom</h3>
        <p>
          Diketahui matriks A:
          <br />
          <strong>A = </strong> 
          <em>[ 2  5  1;  3  4  6 ]</em>
          <br />
          Tentukan jumlah baris dan kolom dari matriks A!
        </p>
      </section>
      <br />

      <section className="soal">
        <h3>Soal 8: Matriks Identitas</h3>
        <p>
          Diketahui matriks A:
          <br />
          <strong>A = </strong> 
          <em>[ 1  0  0;  0  1  0;  0  0  1 ]</em>
          <br />
          Tentukan apakah matriks A adalah matriks identitas!
        </p>
      </section>
      <br />

      <section className="soal">
        <h3>Soal 9: Matriks dan Sistem Persamaan Linear</h3>
        <p>
          Diketahui sistem persamaan linear berikut:
          <br />
          <strong>2x + 3y = 5</strong>
          <br />
          <strong>4x - y = 3</strong>
          <br />
          Tulis sistem persamaan ini dalam bentuk matriks dan tentukan solusi untuk x dan y!
        </p>
      </section>
      <br />

      <section className="soal">
        <h3>Soal 10: Matriks Augmentasi</h3>
        <p>
          Diketahui sistem persamaan linear berikut:
          <br />
          <strong>x + 2y = 4</strong>
          <br />
          <strong>3x - y = 5</strong>
          <br />
          Tentukan matriks augmentasi dari sistem persamaan ini!
        </p>
      </section>
    </div>
  );
}

export default ContohSoalMatriks;
