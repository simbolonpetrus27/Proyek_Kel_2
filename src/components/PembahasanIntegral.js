import React from 'react';

function PembahasanIntegral() {
  return (
    <div className="container">
      <h2>Soal Integral - Pembahasan Lengkap</h2>
      <section className="soal">
      <h3>Soal 01</h3>
        <p>
        <em>∫ (12x<sup>2</sup> - 4x + 1) dx = . . . </em>
        <br />
        (A) 6x<sup>3</sup> - 4x<sup>2</sup> + x + C
        <br />
        (B) 6x<sup>3</sup> - 4x<sup>2</sup> + C 
        <br />
        (C) 4x<sup>3</sup> + 2x<sup>2</sup> + x + C
        <br />
        (D) 4x<sup>3</sup>- 2x<sup>2</sup> + x + C
        <br />
        (E) 4x<sup>3</sup> + 2x<sup>2</sup> + x + C
        </p>

        <h4>Pembahasan:</h4>
        <p>
          <br />
          Dengan menerapkan aturan dasar integral ∫x<sup>n</sup> dx = 1/n+1 x<sup>n</sup> + c, n ≠ - 1 dan manipulasi aljabar, maka kita akan peroleh:
          <br />
          <em>∫ (12x<sup>2</sup> - 4x + 1) dx </em>
          <br />
          <em>= 12/2+1 x<sup>2+1</sup> - 4/1+1 x<sup>1+1</sup> + 1x + C</em>
          <br />
          <em>= 4x<sup>3</sup> - 2x<sup>2</sup> + x + C</em>
          Maka pilihan yang sesuai adalah (D) 4x<sup>3</sup>- 2x<sup>2</sup> + x + C 
        </p>
      </section>

      <section className="soal">
      <h3>Soal 02</h3>
        <p>
        <em>Hasil dari ∫ (3x<sup>2</sup> - 5x + 4) dx = . . .</em>
        <br />
        (A) x<sup>3</sup> - 5/2x<sup>2</sup> + 4x + C
        <br />
        (B) x<sup>3</sup>- 5x<sup>2</sup> + 4x + C
        <br />
        (C) 3x<sup>3</sup> - 5x<sup>2</sup> + 4x + C
        <br />
        (D) 6x<sup>3</sup> - 5x<sup>2</sup> + 4x + C
        <br />
        (E) 6x<sup>3</sup> - 5/2x<sup>2</sup> + 4x + C
        </p>

        <h4>Pembahasan:</h4>
        <p>
          <br />
          Dengan menerapkan aturan dasar integral ∫ x<sup>n</sup> dx = 1/n+1 x<sup>n</sup> + c, n≠ -1 dan manipulasi aljabar, maka kita akan peroleh:
          <br />
          <em>∫ (3x<sup>2</sup> - 5x + 4) dx </em>
          <br />
          <em>= 3/2+1 x<sup>2+1</sup> - 5/1+1 x<sup>1+1</sup> + 4x + C </em>
          <br />
          <em>= x<sup>3</sup> - 5/2 x<sup>2</sup> + 4x + C </em>
          <br />
          <em></em>
          Maka pilihan yang tepat adalah (A) x<sup>3</sup> - 5/2x<sup>2</sup> + 4x + C
        </p>
      </section>

      <section className="soal">
      <h3>Soal 03</h3>
        <p>
        <em>Diberikan f(x) = a + bx dan F(x) adalah anti turunan f(x). Jika F(1) - F(0) = 3(1) maka 2a + b adalah . . .</em>
        <br />
        (A) 10
        <br />
        (B) 6
        <br />
        (C) 5 
        <br />
        (D) 4
        <br />
        (E) 3
        </p>

        <h4>Pembahasan:</h4>
        <p>
          <br />
          Dengan menerapkan aturan dasar integral ∫x<sup>n</sup> dx = 1/n+1 x<sup>n</sup> + c, n ≠ - 1 dan manipulasi aljabar, maka kita akan peroleh:
          <br />
          <em>∫ (12x<sup>2</sup> - 4x + 1) dx </em>
          <br />
          <em>= 12/2+1 x<sup>2+1</sup> - 4/1+1 x<sup>1+1</sup> + 1x + C</em>
          <br />
          <em>= 4x<sup>3</sup> - 2x<sup>2</sup> + x + C</em>
          Maka pilihan yang sesuai adalah (D) 4x<sup>3</sup>- 2x<sup>2</sup> + x + C 
        </p>
      </section>
    </div>
  );
}

export default PembahasanIntegral;
