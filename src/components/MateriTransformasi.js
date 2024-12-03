import React from 'react';
import './MateriTransformasi.css';

const MateriTransformasi = () => {
  return (
    <div className="materi-container">
      <h1>Materi Transformasi Geometri</h1>

      <section className="section">
        <h2>1. Transformasi Translasi</h2>
        <p>Transformasi dalam matematika sangat berguna untuk menggambarkan perubahan posisi suatu objek tanpa merubah bentuk atau ukuran objek tersebut. Salah satu jenis transformasi yang sering digunakan adalah <b>translasi</b>. Transformasi translasi adalah suatu perpindahan posisi objek pada bidang datar yang dilakukan dengan menggeser seluruh titik objek sejauh jarak tertentu. Pada transformasi ini, objek akan tetap memiliki bentuk yang sama, hanya saja posisinya berubah.</p>
        <p>Contohnya, jika kita memiliki titik A dengan koordinat (x, y), dan titik tersebut ditranslasi sejauh vektor (a, b), maka posisi baru titik A akan menjadi (x+a, y+b).</p>
        <h3>Contoh:</h3>
        <p>Misalnya, kita memiliki titik A(3, 4) dan kita mentranslasi titik A sejauh vektor (2, -1). Maka titik A' yang baru akan berada di (3+2, 4-1) = A'(5, 3).</p>
      </section>

      <section className="section">
        <h2>2. Transformasi Refleksi</h2>
        <p>Selain translasi, ada juga transformasi yang menghasilkan gambar cermin dari suatu objek, yaitu <b>refleksi</b>. Refleksi adalah transformasi yang memantulkan objek terhadap suatu garis tertentu. Setiap titik pada objek akan dipantulkan sehingga menghasilkan gambar yang bersifat simetris terhadap garis pantul.</p>
        <p>Contohnya, jika suatu titik A(x, y) direfleksikan terhadap sumbu x, maka posisi baru titik A' akan menjadi A'(x, -y), yang berarti hanya koordinat y yang berubah tanda, sedangkan x tetap.</p>
        <h3>Contoh:</h3>
        <p>Misalnya, titik A(3, 4) direfleksikan terhadap sumbu x, maka posisi baru titik A' akan menjadi A'(3, -4).</p>
      </section>

      <section className="section">
        <h2>3. Transformasi Rotasi</h2>
        <p>Rotasi adalah transformasi yang memutar objek sekitar titik tertentu, yang biasa disebut sebagai pusat rotasi. Transformasi ini menjaga bentuk dan ukuran objek tetap sama, namun objek akan berpindah ke posisi baru akibat rotasi dengan sudut tertentu. Rotasi ini umumnya dilakukan dengan merotasi objek terhadap titik asal (0, 0), meskipun bisa juga dilakukan terhadap titik lain.</p>
        <p>Untuk merotasi titik A(x, y) dengan sudut θ terhadap titik asal, kita dapat menggunakan rumus rotasi berikut:</p>
        <pre>
          A'(x', y') = (x * cos(θ) - y * sin(θ), x * sin(θ) + y * cos(θ))
        </pre>
        <h3>Contoh:</h3>
        <p>Misalnya, titik A(3, 4) diputar sebesar 90 derajat terhadap titik asal. Maka posisi titik A' dapat dihitung dengan rumus rotasi di atas.</p>
      </section>

      <section className="section">
        <h2>4. Transformasi Dilatasi</h2>
        <p>Transformasi dilatasi adalah transformasi yang merubah ukuran suatu objek tanpa merubah bentuk dan orientasinya. Dilatasi dilakukan dengan faktor skala (k) yang mengubah jarak setiap titik pada objek dari titik asal. Jika faktor skala lebih besar dari 1, objek akan membesar, sedangkan jika faktor skala lebih kecil dari 1, objek akan mengecil.</p>
        <p>Jika suatu titik A(x, y) didilatasi dengan faktor skala k, maka posisi baru titik A' adalah A'(k * x, k * y).</p>
        <h3>Contoh:</h3>
        <p>Misalnya, titik A(2, 3) didilatasi dengan faktor skala 2. Maka titik A' setelah dilatasi adalah A'(2 * 2, 3 * 2) = A'(4, 6).</p>
      </section>

      <section className="section">
        <h2>5. Gabungan Transformasi</h2>
        <p>Selain melakukan satu jenis transformasi, kita juga bisa menggabungkan beberapa transformasi dalam urutan tertentu. Gabungan transformasi ini akan menghasilkan objek yang telah melalui beberapa perubahan, misalnya pertama dilakukan translasi, lalu dilatasi, dan seterusnya. Gabungan transformasi ini sering digunakan dalam pemodelan geometri lebih kompleks, misalnya dalam desain grafis atau animasi komputer.</p>
        <p>Perlu dicatat bahwa urutan dalam gabungan transformasi sangat penting, karena hasilnya bisa berbeda-beda tergantung pada urutan yang digunakan.</p>
      </section>
    </div>
  );
};

export default MateriTransformasi;
