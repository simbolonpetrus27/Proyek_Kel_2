import React from 'react';
import './MateriProgramLinear.css';


function MateriProgramLinear() {
  return (
    <div className="container">
      <section className="materi">
        <h2>Materi Program Linear</h2>
        <p>
          <strong>Linear</strong> adalah istilah yang digunakan untuk menggambarkan suatu hubungan atau pola yang dapat diwakili oleh garis lurus.
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

        <h3>Jenis-Jenis Metode Penyelesaian Persamaan dan Pertidaksamaan Linear</h3>
        <h4>A. Metode Substitusi</h4>
        <p>
               Metode substitusi adalah metode yang dilakukan dengan cara mengganti atau menukarkan posisi suatu variabel, koefisien, konstanta dan suku. 
               Contoh:

               <br />
               2x + 3y = 5
               <br />
               2x + 4y = 6
               <br />

               Jawab:

              
        </p>       
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

export default MateriProgramLinear;
