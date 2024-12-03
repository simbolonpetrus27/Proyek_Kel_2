import React from 'react';
import './PembahasanSoalIntegral.css';

const PembahasanIntegral = () => {
  return (
    <div className="pembahasan-container">
      <h2>Pembahasan Soal Integral</h2>

      <div className="soal">
        <h3>Soal 1: Tentukan hasil integral dari ∫(3x² + 2x) dx!</h3>
        <p><strong>Jawaban: </strong>Integrasi dilakukan per bagian:</p>
        <pre>
          ∫(3x² + 2x) dx = ∫3x² dx + ∫2x dx
          = (3/3)x³ + (2/2)x²
          = x³ + x² + C
        </pre>
        <p><strong>Jawaban Benar: </strong>x³ + x² + C</p>
      </div>

      <div className="soal">
        <h3>Soal 2: Tentukan hasil integral dari ∫(4x³ - x) dx!</h3>
        <p><strong>Jawaban: </strong>Integrasi dilakukan per bagian:</p>
        <pre>
          ∫(4x³ - x) dx = ∫4x³ dx - ∫x dx
          = (4/4)x⁴ - (1/2)x²
          = x⁴ - (1/2)x² + C
        </pre>
        <p><strong>Jawaban Benar: </strong>x⁴ - (1/2)x² + C</p>
      </div>

      <div className="soal">
        <h3>Soal 3: Tentukan hasil integral dari ∫(5x⁴ + 3x² - x + 7) dx!</h3>
        <p><strong>Jawaban: </strong>Integrasi dilakukan per bagian:</p>
        <pre>
          ∫(5x⁴ + 3x² - x + 7) dx = ∫5x⁴ dx + ∫3x² dx - ∫x dx + ∫7 dx
          = (5/5)x⁵ + (3/3)x³ - (1/2)x² + 7x + C
        </pre>
        <p><strong>Jawaban Benar: </strong>x⁵ + x³ - (1/2)x² + 7x + C</p>
      </div>

      <div className="soal">
        <h3>Soal 4: Tentukan hasil integral dari ∫(6x² - 4x + 5) dx!</h3>
        <p><strong>Jawaban: </strong>Integrasi dilakukan per bagian:</p>
        <pre>
          ∫(6x² - 4x + 5) dx = ∫6x² dx - ∫4x dx + ∫5 dx
          = (6/3)x³ - (4/2)x² + 5x + C
        </pre>
        <p><strong>Jawaban Benar: </strong>2x³ - 2x² + 5x + C</p>
      </div>

      <div className="soal">
        <h3>Soal 5: Tentukan hasil integral dari ∫(x³ + 2x² - 4x + 3) dx!</h3>
        <p><strong>Jawaban: </strong>Integrasi dilakukan per bagian:</p>
        <pre>
          ∫(x³ + 2x² - 4x + 3) dx = ∫x³ dx + ∫2x² dx - ∫4x dx + ∫3 dx
          = (1/4)x⁴ + (2/3)x³ - (4/2)x² + 3x + C
        </pre>
        <p><strong>Jawaban Benar: </strong>(1/4)x⁴ + (2/3)x³ - 2x² + 3x + C</p>
      </div>
    </div>
  );
};

export default PembahasanIntegral;
