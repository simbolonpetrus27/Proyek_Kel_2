import React from 'react';
import './PembahasanInduksiMatematika.css';

const PembahasanInduksiMatematika = () => {
  return (
    <div className="pembahasan-container">
      <h2>Pembahasan Soal Induksi Matematika</h2>
      <div className="pembahasan-card">
        <p className="question-text">
          1. Buktikan bahwa untuk setiap bilangan bulat positif n, berlaku: 1 + 2 + 3 + ... + n = n(n + 1) / 2
        </p>
        <p className="explanation">
          Jawaban: Kita dapat membuktikan hal ini dengan menggunakan induksi matematika:
          <br />
          - Basis: Untuk n = 1, 1 = 1(1+1)/2, yang benar.
          <br />
          - Langkah induksi: Misalkan rumus ini benar untuk n = k, yaitu 1 + 2 + ... + k = k(k + 1)/2.
          <br />
          Selanjutnya, buktikan untuk n = k + 1:
          <br />
          1 + 2 + ... + k + (k + 1) = k(k + 1)/2 + (k + 1)
          <br />
          = (k + 1)(k + 2)/2, yang sesuai dengan rumus yang harus dibuktikan.
          <br />
          Dengan demikian, rumus ini terbukti untuk semua bilangan bulat positif n.
        </p>
      </div>

      <div className="pembahasan-card">
        <p className="question-text">
          2. Buktikan bahwa 2^n - 1 = (2 - 1)(2 + 2)(2 + 2^2)...(2 + 2^(n-1))
        </p>
        <p className="explanation">
          Jawaban: Kita akan membuktikan hal ini dengan induksi matematika:
          <br />
          - Basis: Untuk n = 1, 2^1 - 1 = 1, dan (2-1) = 1. Jadi, rumus ini benar untuk n = 1.
          <br />
          - Langkah induksi: Misalkan rumus ini benar untuk n = k, yaitu 2^k - 1 = (2 - 1)(2 + 2)(2 + 2^2)...(2 + 2^(k-1)).
          <br />
          Buktikan untuk n = k + 1:
          <br />
          2^(k+1) - 1 = 2 * (2^k - 1) + 1 = (2 - 1)(2 + 2)(2 + 2^2)...(2 + 2^k).
          <br />
          Dengan demikian, rumus ini terbukti untuk semua n.
        </p>
      </div>

      <div className="pembahasan-card">
        <p className="question-text">
          3. Buktikan bahwa n^2 + n adalah hasil perkalian dua bilangan berturut-turut.
        </p>
        <p className="explanation">
          Jawaban: Kita dapat memfaktorkan n^2 + n sebagai:
          <br />
          n^2 + n = n(n + 1).
          <br />
          Dengan demikian, n^2 + n adalah hasil perkalian dua bilangan berturut-turut, yaitu n dan n+1.
        </p>
      </div>

      <div className="pembahasan-card">
        <p className="question-text">
          4. Buktikan bahwa jumlah deret 1 + 3 + 5 + ... + (2n-1) = n^2
        </p>
        <p className="explanation">
          Jawaban: Kita buktikan dengan induksi matematika:
          <br />
          - Basis: Untuk n = 1, deret ini adalah 1, dan 1^2 = 1, jadi benar.
          <br />
          - Langkah induksi: Misalkan rumus ini benar untuk n = k, yaitu 1 + 3 + 5 + ... + (2k-1) = k^2.
          <br />
          Buktikan untuk n = k + 1:
          <br />
          1 + 3 + 5 + ... + (2k-1) + (2(k+1) - 1) = k^2 + (2k + 1) = (k + 1)^2.
          <br />
          Dengan demikian, rumus ini terbukti untuk semua bilangan bulat positif n.
        </p>
      </div>

      <div className="pembahasan-card">
        <p className="question-text">
          5. Buktikan bahwa untuk setiap bilangan bulat positif n, berlaku: 3^n - 1 = (3 - 1)(3 + 3)(3 + 3^2)...(3 + 3^(n-1))
        </p>
        <p className="explanation">
          Jawaban: Kita buktikan dengan induksi matematika:
          <br />
          - Basis: Untuk n = 1, 3^1 - 1 = 2, dan (3 - 1) = 2. Jadi rumus ini benar untuk n = 1.
          <br />
          - Langkah induksi: Misalkan rumus ini benar untuk n = k, yaitu 3^k - 1 = (3 - 1)(3 + 3)(3 + 3^2)...(3 + 3^(k-1)).
          <br />
          Buktikan untuk n = k + 1:
          <br />
          3^(k+1) - 1 = 3 * (3^k - 1) + 1 = (3 - 1)(3 + 3)(3 + 3^2)...(3 + 3^k).
          <br />
          Dengan demikian, rumus ini terbukti untuk semua n.
        </p>
      </div>
    </div>
  );
};

export default PembahasanInduksiMatematika;
