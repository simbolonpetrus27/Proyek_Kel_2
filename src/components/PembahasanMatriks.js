import React from 'react';
import './MatrixDiscussion.css';

const MatrixDiscussion = () => {
  const discussions = [
    {
      id: 1,
      question: 'Jika A = [[1, 2], [3, 4]], hitung determinan A.',
      explanation: (
        <div>
          <p>
            Determinan matriks 2x2 dihitung dengan rumus:
            <br />
            det(A) = (a * d) - (b * c), di mana matriks A adalah:
            <br />
            A = [[a, b], [c, d]].
            <br />
            Substitusikan nilai-nilai yang ada:
            <br />
            A = [[1, 2], [3, 4]]
            <br />
            Maka, det(A) = (1 * 4) - (2 * 3) = 4 - 6 = -2.
            <br />
            Jadi, determinan dari matriks A adalah -2.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      question: 'Tentukan hasil perkalian matriks A dan B jika A = [[1, 2], [3, 4]] dan B = [[5, 6], [7, 8]].',
      explanation: (
        <div>
          <p>
            Perkalian dua matriks A dan B dilakukan dengan cara mengalikan baris pertama A dengan kolom pertama B, dan seterusnya.
            <br />
            A = [[1, 2], [3, 4]], B = [[5, 6], [7, 8]]
            <br />
            Hasil perkaliannya adalah:
            <br />
            A * B = [[(1 * 5 + 2 * 7), (1 * 6 + 2 * 8)], [(3 * 5 + 4 * 7), (3 * 6 + 4 * 8)]]
            <br />
            A * B = [[19, 22], [43, 50]]
            <br />
            Jadi, hasil perkalian matriks A dan B adalah:
            <br />
            [[19, 22], [43, 50]].
          </p>
        </div>
      ),
    },
    {
      id: 3,
      question: 'Jika matriks A adalah matriks identitas 2x2, apa hasil dari A + A?',
      explanation: (
        <div>
          <p>
            Matriks identitas 2x2 adalah matriks yang memiliki 1 pada diagonal utama dan 0 di luar diagonal utama, yaitu:
            <br />
            A = [[1, 0], [0, 1]]
            <br />
            Jika A ditambahkan dengan A, maka:
            <br />
            A + A = [[(1 + 1), (0 + 0)], [(0 + 0), (1 + 1)]]
            <br />
            A + A = [[2, 0], [0, 2]]
            <br />
            Jadi, hasil dari A + A adalah matriks [[2, 0], [0, 2]].
          </p>
        </div>
      ),
    },
    {
      id: 4,
      question: 'Hitung hasil invers dari matriks A = [[1, 2], [3, 4]].',
      explanation: (
        <div>
          <p>
            Untuk menghitung invers matriks 2x2, kita menggunakan rumus:
            <br />
            A^-1 = 1/det(A) * adj(A)
            <br />
            Pertama, kita hitung determinan A:
            <br />
            det(A) = (1 * 4) - (2 * 3) = 4 - 6 = -2
            <br />
            Selanjutnya, kita hitung adjugasi (adj) dari A. Matriks adjugasi diperoleh dengan menukar elemen-elemen diagonal utama dan memberi tanda negatif pada elemen-elemen yang berada di luar diagonal utama:
            <br />
            adj(A) = [[4, -2], [-3, 1]]
            <br />
            Jadi, invers dari matriks A adalah:
            <br />
            A^-1 = 1/(-2) * [[4, -2], [-3, 1]] = [[-2, 1], [1.5, -0.5]]
            <br />
            Jadi, invers dari matriks A adalah matriks [[-2, 1], [1.5, -0.5]].
          </p>
        </div>
      ),
    },
    {
      id: 5,
      question: 'Berapa banyak elemen di dalam matriks A = [[1, 2, 3], [4, 5, 6]]?',
      explanation: (
        <div>
          <p>
            Matriks A memiliki 2 baris dan 3 kolom, sehingga jumlah elemen di dalam matriks A adalah:
            <br />
            Jumlah elemen = 2 x 3 = 6
            <br />
            Jadi, matriks A memiliki 6 elemen.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="matrix-discussion">
      <h2>Pembahasan Soal Matriks</h2>
      {discussions.map((discussion) => (
        <div key={discussion.id} className="discussion-card">
          <p className="question-text">{discussion.question}</p>
          <div className="explanation">{discussion.explanation}</div>
        </div>
      ))}
    </div>
  );
};

export default MatrixDiscussion;
