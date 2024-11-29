import React from 'react';

function PembahasanTurunan() {
  return (
    <div className="container">
      <h2>Soal Integral - Pembahasan Lengkap</h2>
      <section className="soal">
      <h3>Soal 01</h3>
        <p>
        <em>Tentukan turunan dari fungsi berikut.</em>
        <br />
        (A) f(x) = 8
        <br />
        (B) g(x) = 3x + 5
        <br />
        (C) h(x) = 6x<sup>3</sup>
        <br />
        (D) k(x) = 3x<sup>5/3</sup>
        <br />
        (E) m(x) = (3x<sup>2</sup> + 3)<sup>4</sup>
        </p>

        <h4>Pembahasan:</h4>
        <p>
          <em>(A) f'(x) = 0</em>
          <br />
          <em>(B) g'(x) = 3</em>
          <br />
          <em>(C) h'(x) = 6 (3) x<sup>3-1</sup> = 18x<sup>2</sup></em>
          <br />
          <em>(D) k'(x) = 3 (5/3) x<sup>(5/3) - 1</sup> = 5x<sup>2/3</sup></em>
          <br />
          <em>(E) m'(x) = 4 . (3x<sup>2</sup> + 3)<sup>4 - 1</sup> . 6x = 24x . (3x<sup>2</sup> + 3)<sup>3</sup></em>
          <br />
          <em>= 4x<sup>3</sup> - 2x<sup>2</sup> + x + C</em>
          Maka pilihan yang sesuai adalah <strong>(D) 4x<sup>3</sup>- 2x<sup>2</sup> + x + C </strong> 
        </p>
      </section>

      <section className="soal">
      <h3>Soal 02</h3>
        <p>
        <em>Tentukan turunan dari fungsi dari f(x) = (3x + 2) . (2x<sup>2</sup> - 1)</em>
        </p>

        <h4>Pembahasan:</h4>
        <p>
          <em>Misal: u(x) = 3x + 2 dan v(x) = 2x<sup>2</sup> - 1</em>
          <br />
          <em>f'(x) = u'(x) . v(x) + u(x) . v'(x)</em>
          <br />
          <em>f'(x) = 3 . (2x2 - 1) + (3x + 2) . (4x)</em>
          <br />
          <em>f'(x) = 6x2 - 3 + 12x2 + 8x = 18x2 + 8x - 3</em>
        </p>
      </section>

      <section className="soal">
      <h3>Soal 03</h3>
        <p>
        <em>Tentukan hasil turunan f(x) = (x<sup>2</sup> + 2x + 3)(3x + 2)</em>
        </p>

        <h4>Pembahasan:</h4>
        <p>
          <br />
          Sama seperti soal sebelumnya, Untuk mengerjakan soal turunan dalam bentuk perkalian, kita dapat menggunakan rumus sifat turunan serta menggunakan pemisalan dalam fungsi tersebut seperti di bawah ini.
          <br />
          <em>F'(x) = u'v + uv'</em>
          <br />
          <em>U = x<sup>2</sup> + 2x + 3 ; U' = 2x + 3</em>
          <br />
          <em>V = 3x + 2 ; V' = 3</em>
          <hr />
          <em>F'(x) = u'v + uv'</em>
          <br />
          <em>F'(x) = (2x+3)(3x + 2) + (x<sup>2</sup> + 2x + 3)(3)</em>
          <br />
          <em>F'(x) = 6x<sup>2</sup> + 13x + 6 + 3x<sup>2</sup> + 6x + 9</em>
          <br />
          <em>F'(x) = 9x<sup>2</sup> + 19x + 15</em>         
          <br />
          Sehingga bentuk akhir <strong>F'(x) adalah 9x<sup>2</sup> + 19x + 15</strong>
        </p>

        <section className="soal">
        <h3>Soal 04</h3>
        <p>
        <em>Jika terdapat f(x) = (2x-1)<sup>2</sup>(x+2). Berapakah nilai f'x(2)</em>
        </p>

        <h4>Pembahasan:</h4>
        <p>
          <br />
          Untuk mengerjakan soal ini, kita bisa menggunakan sifat turunan fungsi f'(x) = u'v + v'u untuk mendapatkan hasil akhir. Sehingga kita dapat melakukan pemisalan kembali.
          <br />
          <em>F'(x) = u'v + uv'</em>
          <br />
          <em>U= (2x-1)<sup>2</sup> = 4x<sup>2</sup> - 4x + 1 ; U' = 8x - 4</em>
          <br />
          <em>V = x + 2 ; V' = 1</em>
          <br />
          <em>F'(x) = u'v + uv'</em>
          <br />
          <em>F'(x) = (8x - 4)(x + 2) + (4x<sup>2</sup> - 4x + 1)(1) ; kita dapat memasukkan nilai 2 seperti di soal</em>
          <br />
          <em>F'(2) = ((8(2) - 4)(2 + 2)) + ((4(2)<sup>2</sup> - 4(2) + 1)(1))</em>
          <br />
          <em>F'(2) = ((16-4)(4)) + ((16-8+1)(1))</em>
          <br />
          <em>F'(2) = 96 + 9 = 105</em>
          <br />
          <em>Sehingga nilai akhir F'(2) adalah 105</em>
        </p>
      </section>

      <section className="soal">
      <h3>Soal 05</h3>
        <p>
        <em>Tentukan sebuah garis singgung pada kurva y= -2x<sup>2</sup> + 6x + 7 yang tegak lurus dengan garis x - 2y + 13 = 0</em>
        </p>

        <h4>Pembahasan:</h4>
        <p>
        Disebutkan di dalam soal bahwa terdapat 2 garis yang saling tegak lurus, sehingga kita dapat mengasumsikan bahwa kedua garis memiliki kemiringan tertentu. Kita dapat menentukan nilai m1 dan m2 dari kedua garis.
        <br />
        m1 merupakan slope dari garis y= -2x<sup>2</sup> + 6x + 7. Untuk mencari nilai m1, dapat dilakukan dengan cara menurunkan fungsi y= -2x<sup>2</sup> + 6x + 7.
        <br />
        <em>f(x) = 2x2 + 6x + c</em>
        <br />
        <em>Karena kurva melalui titik (2, 8), maka f(2) = 8. Dengan mensubstitusikan ke f(x), diperoleh</em>
        <br />
        <em>m1 = y'(x) = -4x + 6</em>
        <br />
        <em>m2 merupakan slope dari x - 2y +13. Untuk mencari nilai m2, kita harus mengubah fungsi tersebut menjadi fungsi y.</em>
        <br />
        <em>x - 2y +13 = 0</em>
        <br />
        <em>x + 13 = 2y</em>
        <br />
        <em>y = 0,5x + 6.5</em>
        <br />
        <em>m2 = y'(x) = 0,5</em>
        <br />
        <em>Dikarenakan kedua garis saling tegak lurus, maka nilai m1 x m2 = -1.</em>
        <br />
        <em>m1 x m2 = -1</em>
        <br />
        <em>(-4x + 6)0,5 = -1</em>
        <br />
        <em>-2x + 3 = -1</em>
        <br />
        <em>-2x =  -4</em>
        <br />
        <em>X = 2</em>
        <br />
        Kita masukkan ke dalam persamaan m1 sehingga di dapatkan nilai m1 = -2. Setelah menemukan nilai x, kita masukkan nilai tersebut ke fungsi y sehingga di dapatkan nilai y = 11.
        <br />
        <em>Untuk membuat sebuah garis singgung, rumus yang digunakan adalah (y-y1) = m1(x - x1).</em>
        <br />
        <em>(y - 11) = -2 (x - 2)</em>
        <br />
        <em>Y - 11 = -2x +4</em>
        <br />
        <em>Y = -2x + 15</em>
        <br />
        <em>Garis singgung adalah y + 2x - 15 = 0</em>
        </p>
      </section>
      </section>
    </div>
  );
}

export default PembahasanTurunan;
