import React from 'react';
import './PembahasanSoalTurunan.css';

const PembahasanSoalTurunan = () => {
  return (
    <div className="pembahasan-container">
      <h1>Pembahasan Soal Turunan</h1>

      {/* Pembahasan Soal 1 */}
      <div className="pembahasan-soal">
        <h2>Soal 1: Tentukan turunan dari fungsi f(x) = 3 * x^2 + 5 * x + 7.</h2>
        <p>
          Untuk menghitung turunan dari fungsi f(x) = 3 * x^2 + 5 * x + 7, kita dapat menggunakan rumus dasar turunan:
        </p>
        <ul>
          <li>Turunan dari x^n adalah n * x^(n-1).</li>
        </ul>
        <p>
          Jadi, untuk f(x) = 3 * x^2 + 5 * x + 7, kita turunkan masing-masing suku:
        </p>
        <ul>
          <li>Turunan dari 3 * x^2 adalah 6 * x.</li>
          <li>Turunan dari 5 * x adalah 5.</li>
          <li>Turunan dari 7 (konstanta) adalah 0.</li>
        </ul>
        <p>
          Maka, f'(x) = 6 * x + 5.
        </p>
      </div>

      {/* Pembahasan Soal 2 */}
      <div className="pembahasan-soal">
        <h2>Soal 2: Tentukan turunan dari fungsi f(x) = 4 * x^3 - 2 * x^2 + x - 1.</h2>
        <p>
          Untuk menghitung turunan dari f(x) = 4 * x^3 - 2 * x^2 + x - 1, kita turunkan setiap suku:
        </p>
        <ul>
          <li>Turunan dari 4 * x^3 adalah 12 * x^2.</li>
          <li>Turunan dari -2 * x^2 adalah -4 * x.</li>
          <li>Turunan dari x adalah 1.</li>
          <li>Turunan dari -1 (konstanta) adalah 0.</li>
        </ul>
        <p>
          Maka, f'(x) = 12 * x^2 - 4 * x + 1.
        </p>
      </div>

      {/* Pembahasan Soal 3 */}
      <div className="pembahasan-soal">
        <h2>Soal 3: Tentukan turunan dari fungsi f(x) = 2 * x^2 - 4 * x + 3.</h2>
        <p>
          Untuk menghitung turunan dari f(x) = 2 * x^2 - 4 * x + 3, kita turunkan setiap suku:
        </p>
        <ul>
          <li>Turunan dari 2 * x^2 adalah 4 * x.</li>
          <li>Turunan dari -4 * x adalah -4.</li>
          <li>Turunan dari 3 (konstanta) adalah 0.</li>
        </ul>
        <p>
          Maka, f'(x) = 4 * x - 4.
        </p>
      </div>

      {/* Pembahasan Soal 4 */}
      <div className="pembahasan-soal">
        <h2>Soal 4: Tentukan turunan dari fungsi f(x) = 5 * x^3 + 7 * x^2 - 3 * x + 2.</h2>
        <p>
          Untuk menghitung turunan dari f(x) = 5 * x^3 + 7 * x^2 - 3 * x + 2, kita turunkan setiap suku:
        </p>
        <ul>
          <li>Turunan dari 5 * x^3 adalah 15 * x^2.</li>
          <li>Turunan dari 7 * x^2 adalah 14 * x.</li>
          <li>Turunan dari -3 * x adalah -3.</li>
          <li>Turunan dari 2 (konstanta) adalah 0.</li>
        </ul>
        <p>
          Maka, f'(x) = 15 * x^2 + 14 * x - 3.
        </p>
      </div>

      {/* Pembahasan Soal 5 */}
      <div className="pembahasan-soal">
        <h2>Soal 5: Tentukan turunan dari fungsi f(x) = x^4 - 3 * x^3 + 2 * x^2 - x + 5.</h2>
        <p>
          Untuk menghitung turunan dari f(x) = x^4 - 3 * x^3 + 2 * x^2 - x + 5, kita turunkan setiap suku:
        </p>
        <ul>
          <li>Turunan dari x^4 adalah 4 * x^3.</li>
          <li>Turunan dari -3 * x^3 adalah -9 * x^2.</li>
          <li>Turunan dari 2 * x^2 adalah 4 * x.</li>
          <li>Turunan dari -x adalah -1.</li>
          <li>Turunan dari 5 (konstanta) adalah 0.</li>
        </ul>
        <p>
          Maka, f'(x) = 4 * x^3 - 9 * x^2 + 4 * x - 1.
        </p>
      </div>
    </div>
  );
};

export default PembahasanSoalTurunan;
