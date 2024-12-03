import React from 'react';
import './MateriProgramLinear.css';

const MateriProgramLinear = () => {
  return (
    <div className="materi-container">
      <h2>Materi Sistem Persamaan Linear dan Matriks</h2>
      
      <section className="materi-section">
        <h3>1. Pengertian Sistem Persamaan Linear (SPL)</h3>
        <p>
          Sistem Persamaan Linear (SPL) adalah sekumpulan persamaan linear yang memiliki dua variabel atau lebih yang diselesaikan secara bersamaan. 
          Suatu sistem persamaan linear dapat memiliki satu solusi, tidak ada solusi, atau banyak solusi, tergantung pada sifat matriks yang terkait dengan sistem tersebut.
        </p>
        <p>
          Sistem persamaan linear umumnya ditulis dalam bentuk:
          <br />
          <code>
            a₁x₁ + a₂x₂ + ... + aₙxₙ = b
          </code>
        </p>
      </section>

      <section className="materi-section">
        <h3>2. Jenis-jenis Sistem Persamaan Linear</h3>
        <ul>
          <li><strong>Sistem yang konsisten:</strong> Sistem persamaan yang memiliki solusi atau lebih.</li>
          <li><strong>Sistem yang tidak konsisten:</strong> Sistem persamaan yang tidak memiliki solusi.</li>
          <li><strong>Sistem yang tergantung:</strong> Sistem yang memiliki solusi tak terhingga.</li>
        </ul>
      </section>

      <section className="materi-section">
        <h3>3. Metode Penyelesaian Sistem Persamaan Linear</h3>
        <p>Beberapa metode yang sering digunakan untuk menyelesaikan SPL antara lain:</p>
        <ol>
          <li><strong>Metode Substitusi:</strong> Digunakan jika salah satu persamaan dapat diselesaikan untuk salah satu variabel, kemudian substitusi nilai tersebut ke persamaan lain.</li>
          <li><strong>Metode Eliminasi:</strong> Dengan menambahkan atau mengurangi persamaan untuk mengeliminasi salah satu variabel, sehingga menghasilkan persamaan yang lebih sederhana.</li>
          <li><strong>Metode Matriks:</strong> Menggunakan matriks untuk menyelesaikan sistem persamaan linear. Metode ini sering dipakai untuk sistem persamaan yang lebih besar.</li>
        </ol>
      </section>

      <section className="materi-section">
        <h3>4. Sistem Persamaan Linear dalam Bentuk Matriks</h3>
        <p>
          Sistem persamaan linear dapat ditulis dalam bentuk matriks, sehingga lebih mudah diselesaikan menggunakan operasi matriks. Sebagai contoh:
          <br />
          Misalkan sistem persamaan linear berikut:
          <code>
            2x + 3y = 5
            <br />
            4x - y = 6
          </code>
          dapat ditulis dalam bentuk matriks sebagai:
          <br />
          <code>
            | 2  3 |   | x | = | 5 | <br />
            | 4 -1 |   | y | = | 6 |
          </code>
        </p>
        <p>
          Matriks ini dapat diselesaikan menggunakan invers matriks, jika matriks koefisiennya memiliki determinan yang tidak sama dengan nol.
        </p>
      </section>

      <section className="materi-section">
        <h3>5. Contoh Soal</h3>
        <p><strong>Soal:</strong> Tentukan solusi dari sistem persamaan berikut:</p>
        <code>
          3x + 2y = 12 <br />
          4x - y = 7
        </code>
        <p><strong>Solusi:</strong></p>
        <p>Gunakan metode eliminasi atau substitusi untuk menyelesaikan soal di atas. Salah satu cara adalah dengan menyelesaikan y dari persamaan kedua dan menggantinya ke dalam persamaan pertama untuk mencari x.</p>
        <p>Setelah diselesaikan, didapatkan nilai x = 3 dan y = 2.</p>
      </section>
    </div>
  );
};

export default MateriProgramLinear;
