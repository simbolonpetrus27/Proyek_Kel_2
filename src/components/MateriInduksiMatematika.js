import React from 'react';
import './MateriMatrix.css';

function MateriInduksiMatematika() {
  return (
    <div className="container">
      <section className="materi">
        <h2>Materi Induksi Matematika</h2>
        <p>
          <strong>Induksi matematika</strong>merupakan materi yang menjadi perluasan dari logika matematika. Logika matematika sendiri mempelajari pernyataan yang bisa bernilai benar atau salah, ekivalen atau ingkaran sebuah pernyataan, dan juga berisi penarikan kesimpulan.
          <br />
          Induksi matematika menjadi sebuah metode pembuktian secara deduktif yang digunakan untuk membuktikan suatu pernyataan benar atau salah. Dimana merupakan suatu proses atau aktivitas berpikir untuk menarik kesimpulan berdasarkan pada kebenaran pernyataan yang berlaku secara umum sehingga pada pernyataan khusus atau tertentu juga bisa berlaku benar. Dalam induksi matematika ini, variabel dari suatu perumusan dibuktikan sebagai anggota dari himpunan bilangan asli.
        </p>
      </section>

      <section className="jenis-matriks">
        <h3>Pembuktian suatu rumus</h3>
        <ol>
          <li>Ada tiga langkah dalam induksi matematika yang diperlukan untuk membuktikan suatu rumus atau pernyataan. Langkah-langkah tersebut adalah :</li>
          <br /> 
          <li>1. Membuktikan bahwa rumus atau pernyataan tersebut benar untuk n = 1.</li>
          <li>2. Mengasumsikan bahwa rumus atau pernyataan tersebut benar untuk n = k.</li>
          <li>3. Membuktikan bahwa rumus atau pernyataan tersebut benar untuk n = k + 1.</li>
          <li>Untuk menerapkan induksi matematika, kita harus bisa menyatakan pernyataan P (k + 1) ke dalam pernyataan P(k) yang diberikan. Untuk meyatakan persamaan P (k + 1), substitusikan kuantitas k + 1  kedalam pernyataan P(k).</li>
        </ol>
      </section>

      <section className="operasi-matriks">
        <h3>Jenis Induksi Matematika</h3>
        <img
        src="https://www.quipper.com/id/blog/wp-content/uploads/2019/07/integral-5-2-300x106.png" alt="" className="image" />
      </section>

      <section className="manfaat-matriks">
        <h3>Rumus Integral tentu</h3>
        <img
        src="https://www.quipper.com/id/blog/wp-content/uploads/2019/07/integral-7-1-300x190.png" alt="" className="image" />
        <p>Oleh karena itu, rumus umum integral dinyatakan sebagai berikut :</p>
        <img
        src="https://www.quipper.com/id/blog/wp-content/uploads/2019/07/integral-6-1-300x61.png" alt="" className="image" />
        <p>, dengan c adalah konstanta integrasi.</p>
      </section>
    </div>
  );
}

export default MateriInduksiMatematika;
