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
    </div>
  );
}

export default ContohSoalMatriks;
