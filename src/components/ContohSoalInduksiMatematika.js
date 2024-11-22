import React from 'react';
import './ContohSoalInduksiMatematika.css'; // Pastikan untuk membuat file CSS ini jika diperlukan

function ContohSoalInduksiMatematika() {
  return (
    <div className="container">
      <h2>Contoh Soal Induksi Matematika</h2>

      {/* Box Soal 1 */}
      <div className="box soal1">
        <h3>Soal 1</h3>
        <p>
          Buktikan dengan menggunakan metode induksi matematika bahwa S<sub>n</sub> = n(n + 1) / 2 untuk setiap n bilangan bulat positif, di mana S<sub>n</sub> adalah jumlah dari n bilangan pertama.
        </p>

        <h4>Langkah 1 (Basis Induksi)</h4>
        <p>
          Buktikan rumus tersebut benar untuk n = 1.
        </p>
        <p>
          Untuk n = 1, kita memiliki S<sub>1</sub> = 1 dan rumus memberikan 1(1 + 1) / 2 = 1, yang sesuai dengan S<sub>1</sub>.
        </p>

        <h4>Langkah 2 (Langkah Induksi)</h4>
        <p>
          Asumsikan bahwa rumus tersebut benar untuk n = k, yaitu S<sub>k</sub> = k(k + 1) / 2. Kemudian buktikan bahwa rumus tersebut juga benar untuk n = k + 1.
        </p>
        <p>
          S<sub>k + 1</sub> = S<sub>k</sub> + (k + 1)
        </p>
        <p>
          S<sub>k + 1</sub> = k(k + 1) / 2 + (k + 1)
        </p>
        <p>
          S<sub>k + 1</sub> = k(k + 1) / 2 + 2(k + 1) / 2
        </p>
        <p>
          S<sub>k + 1</sub> = (k + 1)(k + 2) / 2
        </p>
        <p>
          Dengan langkah induksi ini, kita membuktikan bahwa jika rumus berlaku untuk n = k, maka rumus tersebut juga berlaku untuk n = k + 1.
        </p>

        <h4>Penerapan untuk n = 20</h4>
        <p>
          Untuk n = 20, kita dapat menggunakan rumus S<sub>n</sub> = n(n + 1) / 2.
        </p>
        <p>
          S<sub>20</sub> = 20(20 + 1) / 2 = 20 x 21 / 2 = 210.
        </p>
        <p>
          Sehingga dengan basis induksi dan langkah induksi, kita membuktikan bahwa S<sub>n</sub> = n(n + 1) / 2 untuk setiap n bilangan bulat positif, termasuk untuk n = 20.
        </p>
      </div>

      {/* Box Soal 2 */}
      <div className="box soal2">
        <h3>Soal 2</h3>
        <p>
          Buktikan dengan induksi matematika bahwa 3<sup>n</sup> - 1 habis dibagi 2 untuk setiap n bilangan bulat positif.
        </p>

        <h4>Langkah 1 (Basis Induksi)</h4>
        <p>
          Buktikan untuk n = 1.
        </p>
        <p>
          Ketika n = 1: 3<sup>1</sup> - 1 = 3 - 1 = 2.
        </p>
        <p>
          Karena 2 habis dibagi 2, maka basis induksi terbukti.
        </p>

        <h4>Langkah 2 (Langkah Induksi)</h4>
        <p>
          Asumsikan bahwa 3<sup>k</sup> - 1 habis dibagi 2 untuk n = k, yaitu: 3<sup>k</sup> - 1 = 2m, untuk suatu bilangan bulat m.
        </p>
        <p>
          Kita perlu membuktikan bahwa 3<sup>k + 1</sup> - 1 juga habis dibagi 2.
        </p>
        <p>
          Bukti:
        </p>
        <p>
          3<sup>k + 1</sup> - 1 = 3 * 3<sup>k</sup> - 1 = 3(3<sup>k</sup> - 1) + 2.
        </p>
        <p>
          Berdasarkan asumsi induksi, 3<sup>k</sup> - 1 = 2m, sehingga:
        </p>
        <p>
          3<sup>k + 1</sup> - 1 = 3(2m) + 2 = 6m + 2.
        </p>
        <p>
          Karena 6m + 2 jelas habis dibagi 2, maka 3<sup>k + 1</sup> - 1 juga habis dibagi 2.
        </p>

        <h4>Kesimpulan</h4>
        <p>
          Dengan basis induksi dan langkah induksi, terbukti bahwa 3<sup>n</sup> - 1 habis dibagi 2 untuk setiap n bilangan bulat positif.
        </p>

        <h4>Penerapan untuk n = 5</h4>
        <p>
          Ketika n = 5: 3<sup>5</sup> - 1 = 243 - 1 = 242.
        </p>
        <p>
          Karena 242 habis dibagi 2, maka pernyataan tersebut benar untuk n = 5.
        </p>
      </div>
    </div>
  );
}

export default ContohSoalInduksiMatematika;