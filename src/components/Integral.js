import React from 'react';
import { Link } from 'react-router-dom';


function Integral() {
  return (
    <div>
      <section>
        <Link to="/Integral/materi">
          <h3>Materi</h3>
        </Link>
      </section>
      <section>
        <Link to="/matrix/contoh-soal">
          <h3>Contoh Soal</h3>
        </Link>
      </section>
      <section>
        <Link to="/matrix/pembahasan">
          <h3>Pembahasan</h3>
        </Link>
      </section>
    </div>
  );
}

export default Integral;
