import React from 'react';

function PembahasanMatriks() {
  return (
    <div className="container">
      <h2>Contoh Soal Matrix - Pembahasan Lengkap</h2>

      {/* Soal 1: Penjumlahan dan Pengurangan Matriks */}
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
          <strong>Langkah 1: Penjumlahan Matriks A + B</strong>
          <br />
          Penjumlahan matriks dilakukan dengan cara menjumlahkan elemen-elemen yang memiliki posisi yang sama pada matriks A dan B:
          <br />
          <em>A + B = [ (2+1) (3+4); (4+6) (5+7) ]</em>
          <br />
          <em>A + B = [ 3  7;  10  12 ]</em>
          <br />
          Maka hasil penjumlahan matriks A dan B adalah matriks [ 3  7;  10  12 ].
        </p>

        <p>
          <strong>Langkah 2: Pengurangan Matriks A - B</strong>
          <br />
          Pengurangan matriks dilakukan dengan cara mengurangkan elemen-elemen yang memiliki posisi yang sama pada matriks A dan B:
          <br />
          <em>A - B = [ (2-1) (3-4); (4-6) (5-7) ]</em>
          <br />
          <em>A - B = [ 1  -1;  -2  -2 ]</em>
          <br />
          Maka hasil pengurangan matriks A dan B adalah matriks [ 1  -1;  -2  -2 ].
        </p>
      </section>

      {/* Soal 2: Perkalian Matriks */}
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
          <strong>Langkah 1: Menentukan Perkalian Matriks</strong>
          <br />
          Perkalian matriks A dan B dilakukan dengan cara mengalikan baris pertama matriks A dengan kolom pertama matriks B, kemudian baris pertama matriks A dengan kolom kedua matriks B, dan seterusnya:
          <br />
          <em>A × B = [(1×5 + 2×7)  (1×6 + 2×8); (3×5 + 4×7)  (3×6 + 4×8)]</em>
          <br />
          <em>A × B = [ (5 + 14)  (6 + 16); (15 + 28)  (18 + 32)]</em>
          <br />
          <em>A × B = [ 19  22;  43  50 ]</em>
        </p>
      </section>

      {/* Soal 3: Transpos Matriks */}
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
          <strong>Langkah 1: Menukar Baris dan Kolom</strong>
          <br />
          Matriks transpos diperoleh dengan cara menukar baris menjadi kolom dan kolom menjadi baris.
          <br />
          <em>Transpos(A) = [ 1  4;  2  5;  3  6 ]</em>
        </p>
      </section>

      {/* Soal 4: Determinan Matriks */}
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
          <strong>Langkah 1: Menggunakan Rumus Determinan Matriks 2x2</strong>
          <br />
          Determinan matriks 2x2 dihitung dengan rumus: 
          <em>det(A) = (a × d) - (b × c)</em>, di mana matriks A = [a b; c d].
          <br />
          Diketahui matriks A = [3 4; 5 6], maka:
          <br />
          <em>det(A) = (3 × 6) - (4 × 5) = 18 - 20 = -2</em>
        </p>
      </section>

      {/* Soal 5: Invers Matriks */}
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
          <strong>Langkah 1: Menghitung Determinan Matriks A</strong>
          <br />
          Matriks A adalah matriks 2x2, sehingga inversnya dapat dihitung dengan rumus:
          <br />
          <em>A⁻¹ = (1/det(A)) × [d  -b; -c  a]</em>
          <br />
          Diketahui matriks A = [4 7; 2 6], maka:
          <br />
          <em>det(A) = (4 × 6) - (7 × 2) = 24 - 14 = 10</em>
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

export default PembahasanMatriks;
