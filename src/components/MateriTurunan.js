import React from 'react';


function MateriTurunan() {
  return (
    <div className="container">
      <section className="materi">
        <h2>Materi Turunan</h2>
        <p>
          <strong>Turunan</strong> merupakan suatu perhitungan terhadap perubahan nilai fungsi karena perubahan nilai input (variabel).
          <br />
          Turunan dapat disebut juga sebagai diferensial dan proses dalam menentukan turunan suatu fungsi disebut sebagai diferensiasi.
        </p>
      </section>

      <section className="jenis-matriks">
        <h3>Penerapan Turunan</h3>
        <ol>
          <li>Berikut merupakan beberapa penerapan turunan.</li>
          <br />
          <li><strong>1. </strong> Turunan dapat diterapkan untuk menghitung gradien dari garis singgung suatu kurva.</li>
          <li><strong>2. </strong> Turunan dapat digunakan untuk menentukan interval dimana suatu fungsi naik atau turun. </li>
          <li><strong>3. </strong> Turunan dapat diterapkan untuk menentukan nilai stasioner suatu fungsi.</li>
          <li><strong>4. </strong> Turunan dapat diterapkan dalam menyelesaikan permasalahan yang berkaitan dengan persamaaan gerak.</li>
          <li><strong>5. </strong> Turunan dapat digunakan untuk menyelesaikan permasalahan maksimum-minimum.</li>
        </ol>
      </section>

      <section className="operasi-matriks">
        <h3>Rumus Turunan</h3>
        <h4>A. f(x) = c, dengan c merupakan konstanta</h4>
        <p>
        Turunan dari fungsi tersebut adalah f'(x) = 0.
        </p>

        <h4>B. f(x) = x</h4>
        <p>
        Turunan dari fungsi tersebut adalah f'(x) = 1.
        </p>

        <h4>C. f(x) = ax<sup>n</sup></h4>
        <p>
        Turunan dari fungsi tersebut adalah f'(x) = anx<sup>n-1</sup>
        </p>

        <h4>D. Penjumlahan fungsi:  h(x) = f(x) + g(x)</h4>
        <p>
        Turunan fungsi tersebut yaitu h'(x) = f'(x) + g'(x).
        </p>

        <h4>E. Pengurangan fungsi: h(x) = f(x) - g(x)</h4>
        <p>
        Turunan fungsi tersebut adalah h'(x) = f'(x) - g'(x)
        </p>

        <h4>F. Perkalian konstanta dengan suatu fungsi (kf)(x).</h4>
        <p>
        Turunan fungsi tersebut adalah k . f'(x).
        </p>     
        </section>
    </div>
  );
}

export default MateriTurunan;
