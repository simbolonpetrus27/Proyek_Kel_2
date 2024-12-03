import React from 'react';
import './MateriInduksiMatematika.css';

const MateriInduksiMatematika = () => {
  return (
    <div className="materi-container">
      <h2>Materi Induksi Matematika - Kelas 11 SMA</h2>

      <div className="penjelasan">
        <h3>Pengenalan Induksi Matematika</h3>
        <p>
          Induksi Matematika adalah salah satu metode pembuktian dalam matematika
          yang digunakan untuk membuktikan bahwa suatu pernyataan berlaku untuk
          semua bilangan natural (bilangan bulat positif). Metode ini terdiri dari
          dua langkah utama:
        </p>
        <ol>
          <li>
            <strong>Langkah dasar:</strong> Menunjukkan bahwa pernyataan berlaku
            untuk nilai terkecil, biasanya untuk n = 1.
          </li>
          <li>
            <strong>Langkah induksi:</strong> Menunjukkan bahwa jika pernyataan
            berlaku untuk suatu bilangan k, maka pernyataan tersebut juga berlaku
            untuk k+1.
          </li>
        </ol>
      </div>

      <div className="contoh-soal">
        <h3>Contoh Soal 1</h3>
        <p>
          Buktikan bahwa untuk setiap bilangan bulat positif n, berlaku:
          <strong> 1 + 2 + 3 + ... + n = n(n + 1) / 2</strong>
        </p>
        <p>
          <strong>Langkah 1: Basis Induksi (n = 1)</strong>
        </p>
        <p>
          Untuk n = 1, sisi kiri rumus adalah: 1. Sisi kanan rumus adalah:
          <strong> 1(1 + 1) / 2 = 1</strong>. Jadi, pernyataan ini benar untuk n = 1.
        </p>
        <p>
          <strong>Langkah 2: Hipotesis Induksi</strong>
        </p>
        <p>
          Asumsikan bahwa pernyataan ini benar untuk n = k, yaitu:
          <strong> 1 + 2 + 3 + ... + k = k(k + 1) / 2</strong>
        </p>
        <p>
          <strong>Langkah 3: Langkah Induksi</strong>
        </p>
        <p>
          Kita harus membuktikan bahwa pernyataan ini benar untuk n = k + 1, yaitu:
          <strong> 1 + 2 + 3 + ... + k + (k + 1) = (k + 1)(k + 2) / 2</strong>
        </p>
        <p>
          Berdasarkan hipotesis induksi, kita punya:
          <strong> 1 + 2 + 3 + ... + k = k(k + 1) / 2</strong>. Maka, sisi kiri dari
          pernyataan untuk n = k + 1 adalah:
          <strong> k(k + 1) / 2 + (k + 1) = (k + 1)(k + 2) / 2</strong>.
        </p>
        <p>
          Dengan demikian, pernyataan ini benar untuk semua bilangan bulat positif n.
        </p>
      </div>

      <div className="contoh-soal">
        <h3>Contoh Soal 2</h3>
        <p>
          Buktikan bahwa untuk setiap bilangan bulat positif n, berlaku:
          <strong> 2^n - 1 = (2 - 1)(2 + 2)(2 + 2^2)...(2 + 2^(n-1))</strong>
        </p>
        <p>
          <strong>Langkah 1: Basis Induksi (n = 1)</strong>
        </p>
        <p>
          Untuk n = 1, sisi kiri rumus adalah: 2^1 - 1 = 1. Sisi kanan rumus adalah:
          <strong> (2 - 1) = 1</strong>. Jadi, pernyataan ini benar untuk n = 1.
        </p>
        <p>
          <strong>Langkah 2: Hipotesis Induksi</strong>
        </p>
        <p>
          Asumsikan bahwa pernyataan ini benar untuk n = k, yaitu:
          <strong> 2^k - 1 = (2 - 1)(2 + 2)(2 + 2^2)...(2 + 2^(k-1))</strong>
        </p>
        <p>
          <strong>Langkah 3: Langkah Induksi</strong>
        </p>
        <p>
          Kita harus membuktikan bahwa pernyataan ini benar untuk n = k + 1, yaitu:
          <strong> 2^(k + 1) - 1 = (2 - 1)(2 + 2)(2 + 2^2)...(2 + 2^k)</strong>
        </p>
        <p>
          Berdasarkan hipotesis induksi, kita punya:
          <strong> 2^k - 1 = (2 - 1)(2 + 2)(2 + 2^2)...(2 + 2^(k-1))</strong>.
          Kita tinggal menunjukkan bahwa hasil ini berlaku juga untuk n = k + 1.
        </p>
      </div>

      <div className="kesimpulan">
        <h3>Kesimpulan</h3>
        <p>
          Induksi Matematika adalah metode pembuktian yang kuat dalam matematika,
          dan sangat berguna untuk membuktikan pernyataan yang berlaku untuk semua
          bilangan bulat positif. Metode ini melibatkan dua langkah utama: dasar
          induksi dan induksi langkah.
        </p>
      </div>
    </div>
  );
};

export default MateriInduksiMatematika;
