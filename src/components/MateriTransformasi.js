import React from 'react';
import './MateriTransformasi.css';

const MateriTransformasi = () => {
  return (
    <div className="container">
      <section className="materi">
        <h2>Materi Transformasi</h2>
        <p>
          <strong>Transformasi berarti perubahan dan geometri berkaitan dengan suatu bangun, garis, titik, dan pengukurannya.</strong> Transformasi geometri adalah perubahan posisi dan ukuran suatu benda atau objek pada bidang geometri seperti garis, titik, maupun kurva.
          <br />
          Oleh karena berkaitan dengan garis dan titik, maka transformasi geometri ini bisa dituliskan dalam bentuk koordinat Cartesius maupun matriks.
          <br />
          Contoh transformasi geometri dalam kehidupan sehari-hari adalah saat kamu bercermin dan bayanganmu terlihat jelas pada cermin tersebut.
        </p>
      </section>

      <section className="jenis-matriks">
        <h3>Jenis-Jenis Transformasi Geometri</h3>
        <ol>
          <li>
            <strong>Translasi</strong> Translasi adalah perpindahan posisi suatu objek. Jika dinyatakan dalam koordinat Cartesius, translasi merupakan perpindahan titik-titik koordinat suatu objek ke arah dan jarak tertentu. Pada peristiwa translasi ini, ukuran objek tidak mengalami perubahan ya.
          </li>
          <li>
            <strong>Refleksi</strong> Refleksi atau pencerminan adalah perpindahan titik suatu objek pada bidang sesuai dengan sifat pembentukan bayangan pada cermin datar.
            <br />
            Pada prinsipnya, refleksi hampir sama dengan translasi, yaitu pergeseran. Hanya saja, pada refleksi memiliki sifat-sifat tertentu sedemikian sehingga posisi akhir objeknya merupakan hasil pencerminan objek awalnya.
          </li>
        </ol>
      </section>

      <section className="operasi-matriks">
        <h3>Contoh Transformasi Geometri</h3>
        <img
          src="https://mathcyber1997.com/wp-content/uploads/2019/04/Tabel-Transformasi-Geometri.png"
          alt="Tabel Transformasi Geometri"
          className="image"
        />
      </section>
    </div>
  );
};

export default MateriTransformasi;
