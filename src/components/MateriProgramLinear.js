import React from 'react';
import './MateriMatrix.css';

function MateriProgramLinear() {
  return (
    <div className="container">
      <section className="materi">
        <h2>Materi Program Linear Kelas 11</h2>
        <p>
          <strong>Program Linear</strong> adalah cabang dari aljabar linier yang mempelajari cara menyelesaikan masalah optimisasi (maksimisasi atau minimisasi) dengan menggunakan variabel yang terikat pada persamaan atau pertidaksamaan linear. Program linear sering digunakan dalam berbagai bidang seperti ekonomi, manajemen, dan rekayasa untuk menemukan solusi terbaik dari suatu masalah yang melibatkan beberapa kendala.
        </p>
      </section>

      <section className="definisi-program-linear">
        <h3>Definisi Program Linear</h3>
        <p>
          Program linear melibatkan pemecahan masalah optimisasi yang memiliki tujuan untuk memaksimalkan atau meminimalkan suatu fungsi objektif. Fungsi objektif tersebut dipengaruhi oleh sejumlah variabel yang harus memenuhi sejumlah kendala dalam bentuk pertidaksamaan atau persamaan linear. 
        </p>
        <p>
          Misalnya, kita memiliki masalah untuk memaksimalkan keuntungan dari dua produk yang diproduksi di sebuah pabrik. Fungsi objektif yang digunakan adalah keuntungan total, yang bergantung pada jumlah produk yang diproduksi. Sementara itu, kendala-kendala yang ada bisa berupa jumlah bahan baku yang terbatas atau kapasitas mesin yang terbatas.
        </p>
      </section>

      <section className="bentuk-standar-program-linear">
        <h3>Bentuk Standar Program Linear</h3>
        <p>
          Sebuah masalah program linear dapat disusun dalam bentuk standar sebagai berikut:
        </p>
        <ul>
          <li>
            <strong>Fungsi Objektif:</strong> Fungsi yang ingin dimaksimalkan atau diminimalkan, misalnya:
            <br />
            Maksimalkan atau minimalkan Z = c₁x₁ + c₂x₂ + ... + cₙxₙ, di mana c₁, c₂, ..., cₙ adalah koefisien dari variabel keputusan x₁, x₂, ..., xₙ.
          </li>
          <li>
            <strong>Kendala:</strong> Serangkaian pertidaksamaan yang membatasi nilai-nilai dari variabel keputusan. Setiap kendala berbentuk linear, seperti:
            <br />
            a₁₁x₁ + a₁₂x₂ + ... + a₁ₙxₙ ≤ b₁
            <br />
            a₂₁x₁ + a₂₂x₂ + ... + a₂ₙxₙ ≤ b₂
            <br />
            ...
          </li>
          <li>
            <strong>Kendala Non-Negatif:</strong> Semua variabel keputusan tidak boleh bernilai negatif, sehingga:
            <br />
            x₁ ≥ 0, x₂ ≥ 0, ..., xₙ ≥ 0
          </li>
        </ul>
      </section>

      <section className="metode-pemecahan">
        <h3>Metode Pemecahan Program Linear</h3>
        <h4>1. Metode Grafik</h4>
        <p>
          Metode grafik adalah metode yang digunakan untuk menyelesaikan masalah program linear dengan dua variabel. Metode ini melibatkan pembuatan grafik dari semua kendala dalam bentuk pertidaksamaan linear, kemudian mencari titik potong antara garis-garis kendala untuk menemukan area solusi yang memungkinkan. Titik potong yang memberikan nilai terbaik untuk fungsi objektif adalah solusi optimal.
        </p>
        <h5>Langkah-langkah metode grafik:</h5>
        <ul>
          <li>Menentukan fungsi objektif dan kendala dalam bentuk pertidaksamaan.</li>
          <li>Gambarkan setiap kendala pada grafik.</li>
          <li>Identifikasi daerah yang memenuhi semua kendala (daerah feasible).</li>
          <li>Cari titik sudut (corner points) dari daerah feasible.</li>
          <li>Evaluasi fungsi objektif di setiap titik sudut untuk menemukan nilai maksimum atau minimum.</li>
        </ul>

        <h4>2. Metode Simplex</h4>
        <p>
          Metode Simplex adalah metode yang lebih lanjut yang digunakan untuk menyelesaikan masalah program linear dengan lebih dari dua variabel. Metode ini bekerja dengan memindahkan solusi dari satu titik ke titik lainnya yang lebih baik, dengan tujuan untuk mencapai solusi optimal yang terletak pada salah satu titik sudut dari daerah feasible.
        </p>

        <h4>3. Metode Dua Fase</h4>
        <p>
          Metode dua fase digunakan untuk menyelesaikan masalah program linear yang tidak memiliki solusi feasible awal. Dalam metode ini, fase pertama bertujuan untuk mencari solusi feasible dengan menambahkan variabel buatan, sedangkan fase kedua bertujuan untuk menyelesaikan masalah menggunakan metode Simplex setelah solusi feasible ditemukan.
        </p>
      </section>

      <section className="aplikasi-program-linear">
        <h3>Aplikasi Program Linear</h3>
        <h4>1. Aplikasi dalam Ekonomi</h4>
        <p>
          Dalam ekonomi, program linear digunakan untuk mengoptimalkan penggunaan sumber daya yang terbatas. Misalnya, menentukan alokasi dana yang paling efisien untuk berbagai sektor ekonomi atau merencanakan produksi barang dengan memaksimalkan keuntungan dan meminimalkan biaya produksi.
        </p>

        <h4>2. Aplikasi dalam Manajemen</h4>
        <p>
          Program linear digunakan untuk merencanakan alokasi sumber daya dalam manajemen operasional, seperti penjadwalan produksi, distribusi barang, dan pengelolaan persediaan. Tujuan utamanya adalah untuk memaksimalkan efisiensi atau keuntungan.
        </p>

        <h4>3. Aplikasi dalam Industri</h4>
        <p>
          Di bidang industri, program linear digunakan untuk merencanakan proses produksi, alokasi mesin, atau pengelolaan bahan baku dalam pabrik. Dengan menggunakan program linear, perusahaan dapat mengoptimalkan produksi dengan mempertimbangkan kendala yang ada, seperti waktu kerja, kapasitas mesin, dan bahan baku yang tersedia.
        </p>

        <h4>4. Aplikasi dalam Transportasi dan Logistik</h4>
        <p>
          Program linear juga digunakan dalam bidang transportasi dan logistik untuk mengoptimalkan jalur pengiriman barang, pemilihan kendaraan, dan alokasi sumber daya transportasi dengan tujuan meminimalkan biaya atau waktu perjalanan.
        </p>
      </section>

      <section className="contoh-soal">
        <h3>Contoh Soal Program Linear</h3>
        <p>
          Diberikan masalah berikut: Seorang pengusaha memiliki dua produk yang diproduksi dengan biaya dan keuntungan tertentu. Dia ingin memaksimalkan keuntungan dengan cara menentukan jumlah produk yang harus diproduksi, dengan mempertimbangkan kapasitas mesin dan jumlah bahan baku yang tersedia.
        </p>
        <p>
          Fungsi objektif: Maksimalkan Z = 5x₁ + 4x₂
          <br />
          Dengan kendala:
          <br />
          3x₁ + 2x₂ ≤ 12 (bahan baku)
          <br />
          2x₁ + 3x₂ ≤ 12 (kapasitas mesin)
          <br />
          x₁ ≥ 0, x₂ ≥ 0
        </p>
        <p>
          Penyelesaian masalah ini dapat dilakukan menggunakan metode grafik atau metode Simplex untuk mencari titik optimal.
        </p>
      </section>

    </div>
  );
}

export default MateriProgramLinear;
