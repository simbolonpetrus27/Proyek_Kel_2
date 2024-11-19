import React from 'react';
import { Link } from 'react-router-dom';


function Linear() {
  return (
    <div>
      <section>
        <Link to="/integral/materi">
          <h3>Materi</h3>
        </Link>
      </section>
      <section>
        <Link to="/integral/contoh-soal">
          <h3>Soal</h3>
        </Link>
      </section>
      <section>
        <Link to="/integral/pembahasan">
          <h3>Pembahasan</h3>
        </Link>
      </section>
    </div>
  );
}

export default Linear;
