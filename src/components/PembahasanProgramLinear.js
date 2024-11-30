// PembahasanProgramLinear.js
import React from 'react';

const PembahasanProgramLinear = () => {
  return (
    <div>
      <h3>Pembahasan Program Linear</h3>
      <p>Pada bagian ini, kita akan membahas cara menyelesaikan masalah Program Linear dengan menggunakan beberapa metode yang sudah dibahas sebelumnya. Berikut adalah contoh soal yang akan diselesaikan menggunakan metode grafik dan metode simpleks.</p>

      <h4>Contoh Soal Program Linear</h4>
      <p>Misalnya, sebuah perusahaan memiliki dua produk yang ingin diproduksi. Produk pertama memberikan keuntungan Rp 5 per unit, sedangkan produk kedua memberikan keuntungan Rp 4 per unit. Kendala yang ada adalah:</p>
      <ul>
        <li>Produksi produk pertama memerlukan 3 jam mesin, sedangkan produk kedua memerlukan 2 jam mesin. Tersedia 150 jam mesin per minggu.</li>
        <li>Jumlah produk pertama yang diproduksi tidak boleh lebih dari 30 unit, dan jumlah produk kedua tidak boleh lebih dari 40 unit.</li>
      </ul>

      <h4>Langkah-langkah Penyelesaian</h4>
      <p>Untuk menyelesaikan masalah ini, kita dapat menggunakan metode grafik atau metode simpleks. Berikut adalah langkah-langkah yang dapat diikuti:</p>

      <h5>1. Menyusun Fungsi Tujuan dan Kendala</h5>
      <p>Fungsi tujuan untuk masalah ini adalah memaksimalkan keuntungan, yaitu:</p>
      <ul>
        <li>Max Z = 5X + 4Y</li>
      </ul>
      dengan kendala:
      <ul>
        <li>3X + 2Y ≤ 150 (Batasan waktu mesin)</li>
        <li>X ≤ 30 (Batasan produk pertama)</li>
        <li>Y ≤ 40 (Batasan produk kedua)</li>
        <li>X, Y ≥ 0 (Keterbatasan non-negatif)</li>
      </ul>

      <h5>2. Metode Grafik</h5>
      <p>Untuk menyelesaikan masalah dengan metode grafik, pertama-tama kita menggambar grafik dari kendala-kendala yang ada. Setelah itu, kita mencari titik potong dari garis kendala, yang menjadi kandidat solusi.</p>
      <p>Daerah solusi akan berada di bawah semua garis kendala, dan titik optimal akan berada di titik yang memberikan keuntungan maksimum.</p>

      <h5>3. Metode Simpleks</h5>
      <p>Jika jumlah variabel lebih dari dua, kita bisa menggunakan metode simpleks. Pada metode ini, kita menyusun tabel simpleks dan melakukan iterasi untuk mencari solusi optimal.</p>

      <h4>Kesimpulan</h4>
      <p>Dengan menggunakan metode grafik atau simpleks, kita dapat menyelesaikan masalah ini dan menemukan kombinasi produk pertama dan kedua yang akan memberikan keuntungan maksimal.</p>
    </div>
  );
};

export default PembahasanProgramLinear;
