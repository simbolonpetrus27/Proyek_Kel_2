// PembahasanProgramLinear.js
import React from 'react';

const PembahasanProgramLinear = () => {
  return (
    <div>
      <h3>Pembahasan Soal Program Linear</h3>
      <p>Berikut adalah pembahasan dari beberapa soal program linear:</p>

      <ol>
        <li>
          <h4>Pembahasan Soal 1: Menentukan Banyaknya Barang yang Diproduksi</h4>
          <p>
            Diketahui:
            <br />
            Keuntungan dari barang A = Rp 10.000, Keuntungan dari barang B = Rp 8.000
            <br />
            Maksimal barang yang dijual = 50 unit
            <br />
            Bahan baku yang tersedia = 100 unit
            <br />
            Setiap barang A membutuhkan 2 bahan baku dan setiap barang B membutuhkan 3 bahan baku.
          </p>
          <p>
            Misalkan jumlah barang A yang dijual = x, dan jumlah barang B yang dijual = y.
          </p>
          <p>
            Maka, kita memiliki dua persamaan:
            <br />
            1. x + y ≤ 50  (jumlah barang yang dijual tidak lebih dari 50)
            <br />
            2. 2x + 3y ≤ 100  (keterbatasan bahan baku)
          </p>
          <p>
            Tujuan kita adalah memaksimalkan keuntungan, yaitu:
            <br />
            Keuntungan = 10.000x + 8.000y
          </p>
          <p>
            Untuk menyelesaikan ini, kita bisa menggunakan metode grafik atau metode lain, tetapi hasil akhirnya adalah:
            <br />
            **Jumlah barang A yang harus dijual**: 20 unit
            <br />
            **Jumlah barang B yang harus dijual**: 30 unit
          </p>
        </li>

        <li>
          <h4>Pembahasan Soal 2: Menyelesaikan Sistem Persamaan Linear</h4>
          <p>
            Diketahui sistem persamaan:
            <br />
            2x + 3y = 12
            <br />
            4x - y = 5
          </p>
          <p>
            Kita akan menggunakan metode eliminasi untuk menyelesaikan sistem ini.
            <br />
            Kalikan persamaan kedua dengan 3 agar koefisien y sama:
            <br />
            12x - 3y = 15
            <br />
            Sekarang kita memiliki sistem:
            <br />
            2x + 3y = 12
            <br />
            12x - 3y = 15
          </p>
          <p>
            Tambahkan kedua persamaan:
            <br />
            (2x + 3y) + (12x - 3y) = 12 + 15
            <br />
            14x = 27
            <br />
            x = 27 / 14 = 1.93
          </p>
          <p>
            Sekarang, substitusi nilai x ke dalam persamaan pertama:
            <br />
            2(1.93) + 3y = 12
            <br />
            3.86 + 3y = 12
            <br />
            3y = 12 - 3.86
            <br />
            3y = 8.14
            <br />
            y = 8.14 / 3 = 2.71
          </p>
          <p>
            **Jawaban**: x ≈ 1.93 dan y ≈ 2.71
          </p>
        </li>

        <li>
          <h4>Pembahasan Soal 3: Pemrograman Linear untuk Maksimal Keuntungan</h4>
          <p>
            Diketahui:
            <br />
            Keuntungan produk X = Rp 5.000, Keuntungan produk Y = Rp 6.000
            <br />
            Waktu total yang tersedia = 12 jam
            <br />
            Produk X membutuhkan 2 jam, Produk Y membutuhkan 3 jam
          </p>
          <p>
            Misalkan jumlah produk X yang diproduksi = x, dan jumlah produk Y yang diproduksi = y.
            <br />
            Maka kita memiliki dua persamaan:
            <br />
            1. 2x + 3y ≤ 12  (waktu total produksi)
            <br />
            2. Keuntungan = 5.000x + 6.000y (memaksimalkan keuntungan)
          </p>
          <p>
            Dengan menggunakan metode grafik atau metode lain, kita dapat menyelesaikan soal ini dan mendapatkan hasil sebagai berikut:
            <br />
            **Jumlah produk X yang harus diproduksi**: 3 unit
            <br />
            **Jumlah produk Y yang harus diproduksi**: 2 unit
            <br />
            **Keuntungan maksimum**: Rp 5.000(3) + Rp 6.000(2) = Rp 15.000 + Rp 12.000 = Rp 27.000
          </p>
        </li>

        <li>
          <h4>Pembahasan Soal 4: Program Linear dengan Pembatasan Sumber Daya</h4>
          <p>
            Diketahui:
            <br />
            Keuntungan dari sapi = Rp 2.000.000, Keuntungan dari kambing = Rp 1.000.000
            <br />
            Jumlah total hewan = 60 ekor
            <br />
            Misalkan jumlah sapi yang dipelihara = x, dan jumlah kambing yang dipelihara = y.
          </p>
          <p>
            Maka kita memiliki dua persamaan:
            <br />
            1. x + y = 60  (jumlah total hewan)
            <br />
            2. Keuntungan = 2.000.000x + 1.000.000y (memaksimalkan keuntungan)
          </p>
          <p>
            Dengan menggunakan metode grafik atau metode lain, kita dapat menyelesaikan soal ini dan mendapatkan hasil sebagai berikut:
            <br />
            **Jumlah sapi yang harus dipelihara**: 30 ekor
            <br />
            **Jumlah kambing yang harus dipelihara**: 30 ekor
            <br />
            **Keuntungan maksimum**: Rp 2.000.000(30) + Rp 1.000.000(30) = Rp 60.000.000 + Rp 30.000.000 = Rp 90.000.000
          </p>
        </li>
      </ol>
    </div>
  );
};

export default PembahasanProgramLinear;