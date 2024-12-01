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
        <br />
        <strong>1. Deret Bilangan</strong>
        <br />
        Sebagai ilustrasi dibuktikan secara induksi matematika bahwa
        <br />
        <img
        src="https://s0.wp.com/latex.php?latex=1+%2B+2+%2B+3+%2B+%5Ccdots+%2B+n+%3D+%5Cfrac%7B1%7D%7B2%7Dn%28n+%2B+1%29&bg=f9f9f9&fg=000000&s=0&c=20201002" alt="" className="image" />
        <br />
        <strong>Langkah 1</strong>
          <br />
          untuk n = 1, maka :
          <br />
          <img
        src="https://s0.wp.com/latex.php?latex=1+%3D+%5Cfrac%7B1%7D%7B2%7Dn%28n+%2B+1%29&bg=f9f9f9&fg=000000&s=0&c=20201002" alt="" className="image" />
          <br />
          <img
        src="https://s0.wp.com/latex.php?latex=1+%3D+%5Cfrac%7B1%7D%7B2%7D%281%29%281+%2B+1%29&bg=f9f9f9&fg=000000&s=0&c=20201002" alt="" className="image" />
          <br />
          1 = 1
          <br />
          <strong>Langkah 2 (n = k)</strong>
          <br />
          Misal rumus benar untuk n = k, maka:
          <br />
          <img
        src="https://s0.wp.com/latex.php?latex=1+%2B+2+%2B+3+%2B+%5Ccdots+%2B+k+%3D+%5Cfrac%7B1%7D%7B2%7Dk%28k+%2B+1%29&bg=f9f9f9&fg=000000&s=0&c=20201002" alt="" className="image" />
          <br />
          <strong>Langkah 3 (n = k + 1)</strong>
          <br />
          Akan dibuktikan bahwa rumus benar untuk n = k + 1. Sehingga:
          <br />
          <img
        src="https://s0.wp.com/latex.php?latex=1+%2B+2+%2B+3+%2B+%5Ccdots+%2B+k+%2B+%28k+%2B+1%29+%3D+%5Cfrac%7B1%7D%7B2%7D+%28k+%2B+1%29%28%28k+%2B+1%29+%2B+1%29&bg=f9f9f9&fg=000000&s=0&c=20201002" alt="" className="image" />
          <br />    
          Pembuktiannya:
          <br />
          <img
        src="https://s0.wp.com/latex.php?latex=1+%2B+2+%2B+3+%2B+%5Ccdots+%2B+k+%2B+%28k+%2B+1%29+%3D+%5Cfrac%7B1%7D%7B2%7D+k%28k+%2B+1%29+%2B+%28k+%2B+1%29&bg=f9f9f9&fg=000000&s=0&c=20201002" alt="" className="image" />
        <br />
        (dalam langkah 2, kedua ruas ditambah k + 1)
          <br />
          <img
        src="https://s0.wp.com/latex.php?latex=%3D+%5Cfrac%7B1%7D%7B2%7Dk+%28k+%2B+1%29+%2B%5Cfrac%7B1%7D%7B2%7D+%5B2%28k+%2B+1%29%5D+&bg=f9f9f9&fg=000000&s=0&c=20201002" alt="" className="image" />
        <br />
        (k + 1) dimodifikasi menyerupai
        <br />
          <img
        src="https://s0.wp.com/latex.php?latex=%5Cfrac%7B1%7D%7B2%7D+k+%28k+%2B+1%29&bg=f9f9f9&fg=000000&s=0&c=20201002" alt="" className="image" />
          <br /> 
          <img
        src="https://s0.wp.com/latex.php?latex=%3D+%5Cfrac%7B1%7D%7B2%7D%5Bk%28k+%2B+1%29+%2B+2%28k+%2B+1%29%5D&bg=f9f9f9&fg=000000&s=0&c=20201002" alt="" className="image" />
         <br />
         (penyederhanaan)
         <br />
          <img
        src="https://s0.wp.com/latex.php?latex=%3D+%5Cfrac%7B1%7D%7B2%7D%28k%5E2+%2B+k+%2B+2k+%2B+2%29&bg=f9f9f9&fg=000000&s=0&c=20201002" alt="" className="image" />
          <br />
          <img
        src="https://s0.wp.com/latex.php?latex=%3D+%5Cfrac%7B1%7D%7B2%7D%28k%5E2+%2B+3k+%2B+2%29&bg=f9f9f9&fg=000000&s=0&c=20201002" alt="" className="image" />
          <br />
          <img
        src="https://s0.wp.com/latex.php?latex=1+%2B+2+%2B+3+%2B+%5Ccdots+%2B+k+%2B+%28k+%2B+1%29+%3D+%5Cfrac%7B1%7D%7B2%7D+%28k+%2B+1%29%28k+%2B+2%29&bg=f9f9f9&fg=000000&s=0&c=20201002" alt="" className="image" />
          <br />
        <strong>(terbukti).</strong>
        <br />
        <br />

        <strong>2. Bilangan bulat hasil pembagian</strong>
        <br />
        Suatu bilangan dikatakan habis dibagi jika hasil pembagian tersebut adalah bilangan bulat. Sebagai ilustrasi, dibuktikan secara induksi matematika bahwa <em>5<sup>2n</sup> + 3n - 1 </em>habis dibagi 9.
        <br />
        <img
        src="https://s0.wp.com/latex.php?latex=1+%2B+2+%2B+3+%2B+%5Ccdots+%2B+n+%3D+%5Cfrac%7B1%7D%7B2%7Dn%28n+%2B+1%29&bg=f9f9f9&fg=000000&s=0&c=20201002" alt="" className="image" />
        <br />
        <strong>Langkah 1</strong>
          <br />
          untuk n = 1, maka :
          <br />
          <img
        src="https://s0.wp.com/latex.php?latex=5%5E%7B2n%7D+%2B+3n+-+1+%3D+5%5E%7B2%281%29%7D+%2B+3%281%29+-+1&bg=f9f9f9&fg=000000&s=0&c=20201002" alt="" className="image" />
          <br />
          <img
        src="https://s0.wp.com/latex.php?latex=%3D5%5E2+%2B+3+-+1&bg=f9f9f9&fg=000000&s=0&c=20201002" alt="" className="image" />
          <br />
          = 27
          <br />
          27 habis dibagi 9, maka n = 1 benar.
          <br />
          <strong>Langkah 2 (n = k)</strong>
          <br />
          Misal rumus benar untuk n = k, maka:
          <br />
          <img
        src="https://s0.wp.com/latex.php?latex=1+%2B+2+%2B+3+%2B+%5Ccdots+%2B+k+%3D+%5Cfrac%7B1%7D%7B2%7Dk%28k+%2B+1%29&bg=f9f9f9&fg=000000&s=0&c=20201002" alt="" className="image" />
          <br />
          <img
        src="https://s0.wp.com/latex.php?latex=5%5E%7B2n%7D+%2B+3n+-1+%5Coverset+%7Bmenjadi%7D%7B%5Crightarrow%7D+5%5E%7B2k%7D+%2B+3k+-+1+&bg=f9f9f9&fg=000000&s=0&c=20201002" alt="" className="image" /> (habis dibagi 9)
          <br />    
          <img
        src="https://s0.wp.com/latex.php?latex=5%5E%7B2k%7D+%2B+3k+-+1+%3D9b&bg=f9f9f9&fg=000000&s=0&c=20201002" alt="" className="image" />  (b merupakah hasil bagi <em>5<sup>2k</sup> + 3k - 1</em> oleh 9)
        <br />
          <strong>Langkah 3 (n = k + 1)</strong>
          <br />
          Akan dibuktikan bahwa rumus benar untuk n = k + 1. Pembuktian:
          <br />
          <img
        src="https://s0.wp.com/latex.php?latex=5%5E%7B2%28k+%2B+1%29%7D+%2B+3%28k+%2B+1%29+-+1&bg=f9f9f9&fg=000000&s=0&c=20201002" alt="" className="image" /> (habis dibagi 9)
          <br />    
          <img
        src="https://s0.wp.com/latex.php?latex=%3D+5%5E%7B2k+%2B+2%7D+%2B+3k+%2B+3+-+1+&bg=f9f9f9&fg=000000&s=0&c=20201002" alt="" className="image" />  (b merupakah hasil bagi <em>5<sup>2k</sup> + 3k - 1</em> oleh 9)
        <br />
        <img
        src="https://s0.wp.com/latex.php?latex=%3D+5%5E2+%285%5E2k%29+%2B+3k+%2B+3+-1&bg=f9f9f9&fg=000000&s=0&c=20201002" alt="" className="image" /> (habis dibagi 9)
          <br /> 
          kemudian (5<sup>2k</sup>) dimodifikasi dengan memasukan 5<sup>2k</sup> + 3k - 1.
          <br />
          <img
        src="https://s0.wp.com/latex.php?latex=%3D+25+%285%5E%7B2k%7D+%2B+3k+-+1%29+-+75k+%2B+25+%2B+3k+%2B+3+-1&bg=f9f9f9&fg=000000&s=0&c=20201002" alt="" className="image" />
        <br />
          <img
        src="https://s0.wp.com/latex.php?latex=%3D+25%285%5E%7B2k%7D+%2B+3k+-1%29+-+72k+%2B+27&bg=f9f9f9&fg=000000&s=0&c=20201002" alt="" className="image" />
          <br /> 
          <img
        src="https://s0.wp.com/latex.php?latex=%3D+25+%289b%29+-+72k+%2B+27&bg=f9f9f9&fg=000000&s=0&c=20201002" alt="" className="image" />
      </section>
    </div>
  );
}

export default MateriInduksiMatematika;
