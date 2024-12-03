import React from 'react';
import './MateriTurunan.css';

const MateriTurunan = () => {
  return (
    <div className="materi-container">
      <h1 className="title">Materi Turunan Kelas 11 SMA</h1>

      <section className="section">
        <h2>Pengertian Turunan</h2>
        <p>
          Turunan adalah konsep dalam kalkulus yang digunakan untuk mengukur laju perubahan suatu fungsi terhadap variabelnya.
          Dalam bentuk grafik, turunan menggambarkan kemiringan garis singgung pada titik tertentu dari fungsi tersebut.
          Secara matematis, turunan dari fungsi f(x) pada titik x = a didefinisikan sebagai:
        </p>
        <p>
          f'(a) = limit(h menuju 0) [f(a+h) - f(a)] / h
        </p>
        <p>
          Turunan ini mengukur bagaimana suatu fungsi berubah ketika nilai inputnya berubah.
        </p>
      </section>

      <section className="section">
        <h2>Rumus Turunan Dasar</h2>
        <p>Berikut adalah rumus dasar turunan yang perlu diketahui:</p>
        <ul>
          <li><strong>Turunan Konstanta:</strong> <br />
            Jika f(x) = c (dimana c adalah konstanta), maka f'(x) = 0.
          </li>
          <li><strong>Turunan dari x pangkat n:</strong> <br />
            Jika f(x) = x pangkat n, maka f'(x) = n * x pangkat (n-1), dimana n adalah bilangan real.
          </li>
          <li><strong>Turunan Penjumlahan:</strong> <br />
            Jika f(x) = g(x) + h(x), maka f'(x) = g'(x) + h'(x).
          </li>
          <li><strong>Turunan Perkalian:</strong> <br />
            Jika f(x) = g(x) * h(x), maka f'(x) = g'(x) * h(x) + g(x) * h'(x).
          </li>
          <li><strong>Turunan Pembagian:</strong> <br />
            Jika f(x) = g(x) / h(x), maka f'(x) = [g'(x) * h(x) - g(x) * h'(x)] / (h(x) pangkat 2).
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Contoh Soal Turunan</h2>
        <h3>Contoh 1:</h3>
        <p>
          Tentukan turunan dari fungsi f(x) = 3 * x pangkat 2 + 5 * x + 7.
        </p>
        <p>
          Penyelesaian: <br />
          f'(x) = 6 * x + 5
        </p>

        <h3>Contoh 2:</h3>
        <p>
          Tentukan turunan dari fungsi f(x) = 4 * x pangkat 3 - 2 * x pangkat 2 + x - 1.
        </p>
        <p>
          Penyelesaian: <br />
          f'(x) = 12 * x pangkat 2 - 4 * x + 1
        </p>
      </section>

      <section className="section">
        <h2>Kasus Khusus Turunan</h2>
        <p>
          Beberapa fungsi memiliki rumus turunan khusus yang perlu dipahami:
        </p>
        <ul>
          <li>
            <strong>Turunan Fungsi Trigonometri:</strong>
            <ul>
              <li>d/dx(sin(x)) = cos(x)</li>
              <li>d/dx(cos(x)) = -sin(x)</li>
              <li>d/dx(tan(x)) = sec^2(x)</li>
            </ul>
          </li>
          <li>
            <strong>Turunan Fungsi Eksponensial:</strong>
            <ul>
              <li>d/dx(e^x) = e^x</li>
              <li>d/dx(a^x) = a^x * ln(a) (untuk a lebih besar dari 0)</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Kesimpulan</h2>
        <p>
          Turunan adalah konsep fundamental dalam kalkulus yang digunakan untuk menganalisis perubahan suatu fungsi.
          Dengan menggunakan rumus dasar turunan dan kasus khusus, kita bisa memecahkan berbagai masalah matematika yang berhubungan dengan laju perubahan dan optimasi.
        </p>
      </section>
    </div>
  );
};

export default MateriTurunan;
