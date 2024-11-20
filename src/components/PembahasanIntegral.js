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
          Maka pilihan yang sesuai adalah <strong>(D) 4x<sup>3</sup>- 2x<sup>2</sup> + x + C </strong> 
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
          Maka pilihan yang tepat adalah <strong>(A) x<sup>3</sup> - 5/2x<sup>2</sup> + 4x + C</strong>
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
          Untuk f (x) = a+ bx dan F(x) adalah anti turunan f(x) maka berlaku:
          <br />
          <em>F(x) = ∫ f (x) dx</em>
          <br />
          <em>F(x) = ∫ (a + bx) dx</em>
          <br />
          <em>F(x) = ax + ½ bx2 + c</em>
          <hr />
          <em>F(1) = a(1) + 1/2 b(1)2 + c</em>
          <br />
          <em>F(1) = a + 1/2b + c</em>
          <br />
          <em>F(0) = a(0) + 1/2b(0)2 + c</em>
          <br />
          <em>F(0)=c</em>
          <hr />
          <em>F(1) - F(0) = a + ½ b + c - c </em>
          <br />
          <em>3 = a +1/2b</em>
          <br />
          <em>6 = 2a + b</em>
          <br />
          Maka pilihan yang sesuai adalah <strong>(B) 6</strong>
        </p>

        <section className="soal">
      <h3>Soal 04</h3>
        <p>
        <em>Diketahui gradien garis singgung kurva di titik (x, y) adalah 6x + 5. Misalkan kurva tersebut melewati titik (1, 5), carilah persamaan kurvanya.</em>
        </p>

        <h4>Pembahasan:</h4>
        <p>
          <br />
          f'(x) = 6x + 5
          <br />
          <em>f(x) = ʃ (6x +5) dx</em>
          <br />
          <em>f(x) = 3x2 + 5x + c</em>
          <br />
          <em>Karena kurva melalui titik (1, 5), maka f(1) = 5. Dengan mensubstitusikan ke f(x), diperoleh:</em>
          <em>f(x) = 3x2 + 5x + c</em>
          <br />
          <em>f(1) = 3(1)2 + 5(1) + c</em>
          <br />
          <em>5 = 3 + 5 + c</em>
          <br />
          <em>c = -3</em>
          <br />
          <em>Jadi, persamaan kurva tersebut adalah <strong>y = f(x) = 3x2 + 5x - 3.</strong></em>
          <br />
        </p>
      </section>

      <section className="soal">
      <h3>Soal 05</h3>
        <p>
        <em>Diketahui fungsi y = f(x) memiliki f'(x) = 4x + 6. Misal kurva y = f(x) melalui titik (2, 8). Tentukan persamaan kurva tersebut.</em>
        </p>
        <h4>Pembahasan:</h4>
        <p>
        <em>f(x) = ʃ f'(x), dan f'(x) = 4x + 6, maka</em>
        <br />
        <em>f(x) = ʃ (4x + 6) dx</em>
        <br />
        <em>f(x) = 2x2 + 6x + c</em>
        <br />
        <em>Karena kurva melalui titik (2, 8), maka f(2) = 8. Dengan mensubstitusikan ke f(x), diperoleh</em>
        <br />
        <em>f(x) = 2x2 + 6x + c</em>
        <br />
        <em>f(2) = 2(2)2 + 6(2) + c</em>
        <br />
        <em>8 = 8 + 12 + c</em>
        <br />
        <em>c = -12</em>
        <br />
        <em>Jadi, persamaan kurva tersebut adalah <strong>y = f(x) = 2x2 + 6x - 12</strong></em>
        <br />
        <em></em>
        <br />
        </p>
      </section>
      </section>
    </div>
  );
}

export default PembahasanIntegral;
