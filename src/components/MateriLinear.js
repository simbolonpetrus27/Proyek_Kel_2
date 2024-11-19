import React from 'react';
import './MateriLinear.css';

function MateriLinear() {
  return (
    <div className="container">
      <section className="materi">
        <h2>Materi Linear</h2>
        <p>
          <strong>Matrix</strong> adalah susunan bilangan atau simbol yang ditulis dalam baris dan kolom tertentu, sehingga membentuk suatu tabel berbentuk persegi panjang. Matrix biasanya digunakan untuk menyelesaikan masalah yang melibatkan data dalam bentuk array dua dimensi.
        </p>
      </section>

      <section className="jenis-matriks">
        <h3>Jenis-Jenis Matriks</h3>
        <ol>
          <li><strong>Matriks Baris:</strong> Matriks yang hanya memiliki satu baris.</li>
          <li><strong>Matriks Kolom:</strong> Matriks yang hanya memiliki satu kolom.</li>
          <li><strong>Matriks Persegi:</strong> Matriks yang jumlah barisnya sama dengan jumlah kolomnya.</li>
          <li><strong>Matriks Nol:</strong> Matriks yang semua elemennya bernilai nol.</li>
          <li><strong>Matriks Identitas:</strong> Matriks persegi yang elemen diagonal utamanya bernilai 1, sedangkan elemen lainnya 0.</li>
          <li><strong>Matriks Diagonal:</strong> Matriks persegi yang elemen-elemen di luar diagonal utamanya bernilai nol.</li>
          <li><strong>Matriks Skalar:</strong> Matriks diagonal di mana semua elemen diagonal utamanya bernilai sama.</li>
        </ol>
      </section>

      <section className="operasi-matriks">
        <h3>Operasi Matriks</h3>
        <h4>1. Penjumlahan dan Pengurangan Matriks</h4>
        <p>
          Dua matriks dapat dijumlahkan atau dikurangkan jika memiliki ordo yang sama. Operasi dilakukan dengan menjumlahkan atau mengurangkan elemen-elemen yang sesuai.
        </p>

        <h4>2. Perkalian Matriks</h4>
        <p>
          Dua matriks dapat dikalikan jika jumlah kolom matriks pertama sama dengan jumlah baris matriks kedua. Operasi ini dilakukan dengan mengalikan elemen-elemen baris matriks pertama dengan elemen-elemen kolom matriks kedua, kemudian menjumlahkannya.
        </p>

        <h4>3. Transpos Matriks</h4>
        <p>Transpos dari matriks diperoleh dengan menukar baris menjadi kolom dan kolom menjadi baris.</p>

        <h4>4. Determinan Matriks</h4>
        <p>Determinant matriks hanya didefinisikan untuk matriks persegi. Determinan digunakan untuk memeriksa apakah matriks memiliki invers.</p>

        <h4>5. Invers Matriks</h4>
        <p>Invers dari matriks persegi <em>A</em> didefinisikan sebagai matriks <em>A⁻¹</em> yang memenuhi <em>A × A⁻¹ = I</em>.</p>
      </section>

      <section className="manfaat-matriks">
        <h3>Manfaat Matriks</h3>
        <ul>
          <li>Matematika (aljabar linier, transformasi geometris).</li>
          <li>Fisika (simulasi mekanik, analisis struktur).</li>
          <li>Komputer (grafik komputer, algoritma pencarian).</li>
          <li>Ekonomi (analisis input-output, model linier).</li>
        </ul>
      </section>
    </div>
  );
}

export default MateriLinear;
