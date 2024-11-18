// src/components/InduksiMatematika.js
import React from 'react';
import { Link } from 'react-router-dom';

function InduksiMatematika() {
  return (
    <div>
      <h2>Induksi Matematika</h2>
      <section>
        <Link to="/induksi-matematika/materi">
          <h3>Materi</h3>
        </Link>
      </section>
      <section>
        <Link to="/induksi-matematika/contoh-soal">
          <h3>Contoh Soal</h3>
        </Link>
      </section>
      <section>
        <Link to="/induksi-matematika/latihan-soal">
          <h3>Latihan Soal</h3>
        </Link>
      </section>
    </div>
  );
}

export default InduksiMatematika;