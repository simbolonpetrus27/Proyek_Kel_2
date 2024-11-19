import React from 'react';
import './MateriLinear.css';

function MateriLinear() {
  return (
    <div className="container">
      <section className="materi">
        <h2>Materi Linear</h2>
        <p>
          <strong>Linear</strong> adalah adalah istilah yang digunakan untuk menggambarkan suatu hubungan atau pola yang dapat diwakili oleh garis lurus.
        </p>
      </section>

      <section className="jenis-matriks">
        <h3>Unsur-Unsur Linear</h3>
        <ol>
          <li><strong>Variabel:</strong> Huruf pengganti suatu bilangan atau pernyataan yang belum diketahui nilainya.</li>
          <li><strong>Koefisien:</strong> Bilangan yang menjelaskan jumlah dari suatu variabel. </li>
          <li><strong>Konstanta:</strong> Nilai yang tidak diikuti variabel.</li>
          <li><strong>Suku:</strong> Bentuk persamaan (gabungan konstanta dan variabel, variabel dan konstanta). </li>
        </ol>
      </section>

      <section className="operasi-matriks">
        <h3>Jenis-Jenis Linear</h3>
        <h4>A. Persamaan Linear Satu Variabel</h4>
        <p>
               Persamaaan linear satu variabel adalah persamaan yang memiliki satu variabel dengan pangkat 1 dan dapat dihubungkan dengan tanda “=”.
        </p>

        <h4>B. Persamaan Linear Dua Variabel</h4>
        <p>
               Persamaan linear dua variabel adalah persamaan yang memiliki dua variabel dengan pangkat 1 dan dapat dihubungkan dengan tanda “=”.
        </p>

        <h4>C. Persamaan Linear Tiga Variabel</h4>
        <p>
               Persamaan linear tiga variabel adalah persamaan yang memiliki tiga variabel dengan pangkat 1 dan dapat dihubungkan dengan tanda “=”.
        </p>

        <h4>D. Pertidaksamaan Linear Dua Variabel</h4>
        <p>
               Pertidaksamaan linear dua variabel adalah bentuk pertidaksaaman yang memuat dua variabel dengan pangkat tertinggi variabel tersebut adalah satu dan dapat dihubungkan dengan tanda.
        </p>

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
