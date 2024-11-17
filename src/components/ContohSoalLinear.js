import React from 'react';

function ContohSoalLinear() {
  return (
    <div className="container">
      <h2>Contoh Soal Linear</h2>

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
        
        <h4>Pembahasan:</h4>
        <p>
          1. Penjumlahan Matriks A + B:
          <br />
          <em>A + B = [ 2+1  3+4;  4+6  5+7 ] = [ 3  7;  10  12 ]</em>
        </p>
        <p>
          2. Pengurangan Matriks A - B:
          <br />
          <em>A - B = [ 2-1  3-4;  4-6  5-7 ] = [ 1  -1;  -2  -2 ]</em>
        </p>
      </section>

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
          Hitunglah A × B!
        </p>

        <h4>Pembahasan:</h4>
        <p>
          Perkalian Matriks A × B dilakukan dengan mengalikan baris matriks A dengan kolom matriks B:
          <br />
          <em>A × B = [(1×5 + 2×7)  (1×6 + 2×8);  (3×5 + 4×7)  (3×6 + 4×8)]</em>
          <br />
          <em>A × B = [ 19  22;  43  50 ]</em>
        </p>
      </section>

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

        <h4>Pembahasan:</h4>
        <p>
          Matriks transpos diperoleh dengan menukar baris menjadi kolom:
          <br />
          <em>Transpos(A) = [ 1  4;  2  5;  3  6 ]</em>
        </p>
      </section>

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

        <h4>Pembahasan:</h4>
        <p>
          Determinan matriks 2x2 dapat dihitung dengan rumus:
          <br />
          <em>det(A) = (a × d) - (b × c)</em>
          <br />
          Diketahui matriks A = [a b; c d] = [3 4; 5 6],
          <br />
          Maka:
          <br />
          <em>det(A) = (3 × 6) - (4 × 5) = 18 - 20 = -2</em>
        </p>
      </section>

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

        <h4>Pembahasan:</h4>
        <p>
          Matriks A adalah matriks 2x2, sehingga inversnya dapat dihitung dengan rumus:
          <br />
          <em>A⁻¹ = (1/det(A)) × [d  -b; -c  a]</em>
          <br />
          Diketahui matriks A = [4 7; 2 6], maka:
          <br />
          Determinan A adalah:
          <br />
          <em>det(A) = (4 × 6) - (7 × 2) = 24 - 14 = 10</em>
          <br />
          Invers A:
          <br />
          <em>A⁻¹ = (1/10) × [6  -7; -2  4] = [0.6  -0.7; -0.2  0.4]</em>
        </p>
      </section>
    </div>
  );
}

export default ContohSoalLinear;
