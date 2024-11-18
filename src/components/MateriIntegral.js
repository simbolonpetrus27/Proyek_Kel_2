import React from 'react';
import './MateriMatrix.css';

function MateriIntegral() {
  return (
    <div className="container">
      <section className="materi">
        <h2>Materi Integral</h2>
        <p>
          <strong>Apa itu Integral?</strong> Jadi, Integral adalah Kalkulus sebagai salah satu cabang ilmu matematika mencakup beberapa konsep utama, seperti limit, turunan, dan integral. Ketiga konsep ini saling berhubungan dalam penghitungan matematis. Integral, pada dasarnya, adalah kebalikan dari proses turunan, yang disebut sebagai anti-turunan. Apabila Anda merasa perlu mengingat kembali konsep turunan, sebaiknya pelajari terlebih dahulu topik tersebut. Pemahaman tentang turunan akan sangat membantu dalam mempelajari integral.
        </p>
      </section>

      <section className="jenis-matriks">
        <h3>Jenis-Jenis Integral</h3>
        <ol>
          <li><strong>Integral tak tentu:</strong> Integral tak tentu adalah bentuk integral yang hasilnya berupa fungsi dalam variabel tertentu dan masih memuat konstanta integrasi.</li>
          <li><strong>Integral tentu:</strong>Pada bahasan sebelumnya, telah dijelaskan tentang integral tak tentu di mana hasil dari integrasinya masih berupa fungsi. Jika hasil integrasinya berupa nilai tertentu, integralnya disebut integral tentu. </li>
        </ol>
      </section>

      <section className="operasi-matriks">
        <h3>Rumus Integral tak tentu</h3>
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

export default MateriIntegral;
