import React, { useState } from 'react';
import './MateriIntegral.css';

const MateriIntegral = () => {
  const [showExamples, setShowExamples] = useState(true);

  const toggleExamples = () => {
    setShowExamples(!showExamples);
  };

  return (
    <div className="materi-integral-container">
      <h2>Materi Integral - Kelas 11 SMA</h2>

      <div className="content">
        <section>
          <h3>Pengertian Integral</h3>
          <p>
            Integral adalah operasi matematika yang digunakan untuk menghitung luas
            daerah di bawah kurva, volume benda, dan banyak konsep lainnya dalam berbagai
            bidang ilmu. Integral dibagi menjadi dua jenis: <strong>Integral Tak Tentu</strong> dan
            <strong>Integral Tentu</strong>.
          </p>
        </section>

        <section>
          <h3>1. Integral Tak Tentu</h3>
          <p>
            Integral tak tentu adalah integral yang tidak memiliki batasan tertentu pada
            variabel yang diintegralkan. Hasil dari integral tak tentu adalah sebuah
            fungsi baru yang mengandung konstanta integrasi C.
          </p>

          <h4>Rumus Umum:</h4>
          <p>
            <strong>∫ f(x) dx = F(x) + C</strong>
          </p>
          
          <h4>Contoh Integral Tak Tentu:</h4>
          {showExamples && (
            <div className="example">
              <p>Contoh 1: ∫ (3x² + 2x) dx</p>
              <p>Solusi: ∫ (3x² + 2x) dx = x³ + x² + C</p>
            </div>
          )}
          <button onClick={toggleExamples}>
            {showExamples ? 'Sembunyikan Contoh' : 'Tampilkan Contoh'}
          </button>
        </section>

        <section>
          <h3>2. Integral Tentu</h3>
          <p>
            Integral tentu adalah integral yang memiliki batas atas dan bawah. Hasil
            dari integral tentu adalah nilai angka yang menunjukkan luas daerah di bawah
            kurva antara batas tersebut.
          </p>

          <h4>Rumus Umum:</h4>
          <p>
            <strong>∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) - F(a)</strong>
          </p>

          <h4>Contoh Integral Tentu:</h4>
          {showExamples && (
            <div className="example">
              <p>Contoh 2: ∫<sub>0</sub><sup>2</sup> (3x² + 2x) dx</p>
              <p>Solusi: ∫<sub>0</sub><sup>2</sup> (3x² + 2x) dx = [x³ + x²]<sub>0</sub><sup>2</sup> = (8 + 4) - (0 + 0) = 12</p>
            </div>
          )}
          <button onClick={toggleExamples}>
            {showExamples ? 'Sembunyikan Contoh' : 'Tampilkan Contoh'}
          </button>
        </section>

        <section>
          <h3>3. Sifat-sifat Integral</h3>
          <ul>
            <li><strong>Linearitas:</strong> ∫ [a * f(x) + b * g(x)] dx = a ∫ f(x) dx + b ∫ g(x) dx</li>
            <li><strong>Penjumlahan:</strong> ∫ [f(x) + g(x)] dx = ∫ f(x) dx + ∫ g(x) dx</li>
            <li><strong>Perkalian Konstanta:</strong> ∫ c * f(x) dx = c * ∫ f(x) dx</li>
          </ul>
        </section>

        <section>
          <h3>Latihan Soal</h3>
          <ol>
            <li>∫ (5x³ - 2x) dx</li>
            <li>∫<sub>1</sub><sup>3</sup> (4x + 2) dx</li>
            <li>∫ (7x² + 3x + 1) dx</li>
            <li>∫<sub>0</sub><sup>4</sup> (6x + 1) dx</li>
            <li>∫ (x⁴ + 2x³) dx</li>
          </ol>
        </section>

        <section>
          <h3>Pembahasan Latihan Soal</h3>
          <div className="solution">
            <h4>Solusi Soal 1:</h4>
            <p>∫ (5x³ - 2x) dx = (5/4) x⁴ - x² + C</p>

            <h4>Solusi Soal 2:</h4>
            <p>∫<sub>1</sub><sup>3</sup> (4x + 2) dx = [2x² + 2x]<sub>1</sub><sup>3</sup> = (18 + 6) - (2 + 2) = 20</p>

            <h4>Solusi Soal 3:</h4>
            <p>∫ (7x² + 3x + 1) dx = (7/3) x³ + (3/2) x² + x + C</p>

            <h4>Solusi Soal 4:</h4>
            <p>∫<sub>0</sub><sup>4</sup> (6x + 1) dx = [3x² + x]<sub>0</sub><sup>4</sup> = (48 + 4) - (0 + 0) = 52</p>

            <h4>Solusi Soal 5:</h4>
            <p>∫ (x⁴ + 2x³) dx = (1/5) x⁵ + (1/2) x⁴ + C</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MateriIntegral;
