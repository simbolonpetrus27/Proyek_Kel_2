import React, { useState } from 'react';

// Soal untuk setiap materi
const soal = {
  matriks: [
    {
      id: 1,
      tipe: 'pilihan_ganda',
      soal: 'Apa hasil dari perkalian matriks A dan B?',
      pilihan: ['A', 'B', 'C', 'D'],
      jawaban_benar: 'C',
      pembahasan: 'Hasil perkalian matriks A dan B menghasilkan pilihan C.',
    },
    {
      id: 2,
      tipe: 'essay',
      soal: 'Jelaskan apa itu matriks transpose.',
      jawaban_benar: 'Matriks transpose adalah matriks yang dibentuk dengan cara membalikkan baris menjadi kolom.',
      pembahasan: 'Matriks transpose dapat diperoleh dengan mengganti baris menjadi kolom.',
    },
    {
      id: 3,
      tipe: 'benar_salah',
      soal: 'Matriks persegi selalu dapat diinverskan.',
      jawaban_benar: 'Salah',
      pembahasan: 'Matriks persegi hanya dapat diinverskan jika determinannya tidak sama dengan nol.',
    },
  ],
  induksimatematika: [
    {
      id: 1,
      tipe: 'pilihan_ganda',
      soal: 'Apa itu induksi matematika?',
      pilihan: ['Proses pembuktian', 'Metode menghitung', 'Algoritma', 'Teorema'],
      jawaban_benar: 'Proses pembuktian',
      pembahasan: 'Induksi matematika adalah teknik pembuktian yang digunakan untuk membuktikan pernyataan matematika.',
    },
    {
      id: 2,
      tipe: 'essay',
      soal: 'Tuliskan langkah-langkah dalam pembuktian induksi matematika.',
      jawaban_benar: 'Langkah pertama adalah membuktikan dasar induksi, kemudian langkah kedua adalah membuktikan hipotesis induksi.',
      pembahasan: 'Dalam induksi matematika, langkah pertama adalah membuktikan dasar induksi, dan langkah kedua adalah membuktikan hipotesis induksi untuk n = k + 1.',
    },
    {
      id: 3,
      tipe: 'benar_salah',
      soal: 'Induksi matematika selalu dapat diterapkan pada semua jenis teorema.',
      jawaban_benar: 'Salah',
      pembahasan: 'Induksi matematika hanya dapat digunakan pada pernyataan yang berbentuk urutan atau rangkaian bilangan.',
    },
  ],
  integral: [
    {
      id: 1,
      tipe: 'pilihan_ganda',
      soal: 'Apa hasil dari integral ∫x dx?',
      pilihan: ['x²', 'x³', '1/x', 'x'],
      jawaban_benar: 'x²',
      pembahasan: 'Integral dari x adalah x²/2, tetapi dalam soal ini kita mengabaikan konstanta 1/2, jadi jawabannya adalah x².',
    },
    {
      id: 2,
      tipe: 'essay',
      soal: 'Jelaskan bagaimana cara mengintegralkan fungsi f(x) = 2x + 3.',
      jawaban_benar: 'Fungsi ini dapat diintegralkan dengan menambahkan satu pada pangkat x dan membagi koefisiennya. Hasilnya adalah x² + 3x.',
      pembahasan: 'Integralkan fungsi dengan menambah pangkat pada x dan membagi koefisiennya. Jadi, hasilnya adalah x² + 3x.',
    },
    {
      id: 3,
      tipe: 'benar_salah',
      soal: 'Integral dari sebuah fungsi selalu menghasilkan nilai positif.',
      jawaban_benar: 'Salah',
      pembahasan: 'Integral dapat menghasilkan nilai positif, negatif, atau nol tergantung pada bentuk fungsi dan batas integrasinya.',
    },
  ],
  programlinear: [
    {
      id: 1,
      tipe: 'pilihan_ganda',
      soal: 'Apa yang dimaksud dengan solusi dari sistem persamaan linear?',
      pilihan: ['Penyelesaian dari persamaan', 'Titik potong antara dua garis', 'Nilai dari x dan y', 'Semua jawaban benar'],
      jawaban_benar: 'Semua jawaban benar',
      pembahasan: 'Solusi dari sistem persamaan linear adalah nilai-nilai yang memenuhi persamaan tersebut, bisa berupa titik potong garis atau nilai variabel x dan y.',
    },
    {
      id: 2,
      tipe: 'essay',
      soal: 'Tuliskan metode yang digunakan untuk menyelesaikan sistem persamaan linear dua variabel.',
      jawaban_benar: 'Metode yang biasa digunakan adalah metode substitusi, eliminasi, dan grafis.',
      pembahasan: 'Metode substitusi, eliminasi, dan grafis adalah cara yang umum digunakan untuk menyelesaikan sistem persamaan linear dua variabel.',
    },
    {
      id: 3,
      tipe: 'benar_salah',
      soal: 'Sistem persamaan linear selalu memiliki satu solusi.',
      jawaban_benar: 'Salah',
      pembahasan: 'Sistem persamaan linear bisa memiliki satu solusi, banyak solusi, atau tidak ada solusi, tergantung dari kondisi persamaan tersebut.',
    },
  ],
  transformasi: [
    {
      id: 1,
      tipe: 'pilihan_ganda',
      soal: 'Apa itu transformasi geometri?',
      pilihan: ['Perubahan posisi objek', 'Perubahan warna objek', 'Perubahan ukuran objek', 'Semua jawaban benar'],
      jawaban_benar: 'Semua jawaban benar',
      pembahasan: 'Transformasi geometri mencakup translasi, rotasi, refleksi, dan dilatasi yang dapat mempengaruhi posisi, ukuran, dan bentuk objek.',
    },
    {
      id: 2,
      tipe: 'essay',
      soal: 'Jelaskan tentang transformasi refleksi.',
      jawaban_benar: 'Transformasi refleksi adalah pemantulan objek terhadap suatu garis atau bidang.',
      pembahasan: 'Refleksi adalah transformasi yang menghasilkan citra objek melalui pantulan terhadap suatu garis atau bidang.',
    },
    {
      id: 3,
      tipe: 'benar_salah',
      soal: 'Transformasi dilatasi selalu mengubah ukuran objek.',
      jawaban_benar: 'Benar',
      pembahasan: 'Transformasi dilatasi memang mengubah ukuran objek dengan cara memperbesar atau memperkecilnya berdasarkan faktor skala.',
    },
  ],
  turunan: [
    {
      id: 1,
      tipe: 'pilihan_ganda',
      soal: 'Apa hasil turunan dari f(x) = x²?',
      pilihan: ['2x', 'x', '2', 'x²'],
      jawaban_benar: '2x',
      pembahasan: 'Turunan dari x² adalah 2x, karena menggunakan aturan turunan untuk pangkat bilangan.',
    },
    {
      id: 2,
      tipe: 'essay',
      soal: 'Jelaskan konsep dasar turunan dalam kalkulus.',
      jawaban_benar: 'Turunan adalah laju perubahan suatu fungsi terhadap variabel independennya, biasanya digunakan untuk mencari kemiringan garis singgung pada suatu titik.',
      pembahasan: 'Turunan mengukur laju perubahan fungsi pada titik tertentu dan sering digunakan untuk menggambarkan kemiringan garis singgung.',
    },
    {
      id: 3,
      tipe: 'benar_salah',
      soal: 'Turunan dari konstanta selalu sama dengan nol.',
      jawaban_benar: 'Benar',
      pembahasan: 'Turunan dari fungsi konstanta selalu nol karena konstanta tidak berubah seiring dengan perubahan variabel.',
    },
  ],
};

const MiniQuiz = ({ materi }) => {
  const [jawaban, setJawaban] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (id, answer) => {
    setJawaban((prevJawaban) => {
      const updatedJawaban = { ...prevJawaban };
      updatedJawaban[id] = answer;
      return updatedJawaban;
    });
  };
  
  const handleSubmit = () => {
    setSubmitted(true);
  };
  
  const renderSoal = (soal) => {
    return soal.map((item) => {
      if (item.tipe === 'pilihan_ganda') {
        return (
          <div key={item.id}>
            <p>{item.soal}</p>
            {item.pilihan.map((option, idx) => (
              <label key={idx}>
                <input
                  type="radio"
                  name={`soal${item.id}`}
                  value={option}
                  onChange={() => handleChange(item.id, option)}
                  checked={jawaban[item.id] === option}
                />
                {option}
              </label>
            ))}
            {submitted && (
              <div>
                {jawaban[item.id] === item.jawaban_benar ? 'Jawaban Benar' : 'Jawaban Salah'}
                <p>{item.pembahasan}</p>
              </div>
            )}
          </div>
        );
      }
      
      if (item.tipe === 'essay') {
        return (
          <div key={item.id}>
            <p>{item.soal}</p>
            <textarea
              onChange={(e) => handleChange(item.id, e.target.value)} 
              value={jawaban[item.id] || ''}
            />
            {submitted && (
              <div>
                <p>{jawaban[item.id] === item.jawaban_benar ? 'Jawaban Benar' : 'Jawaban Salah'}</p>
                <p>{item.pembahasan}</p>
              </div>
            )}
          </div>
        );
      }
      
      if (item.tipe === 'benar_salah') {
        return (
          <div key={item.id}>
            <p>{item.soal}</p>
            <label>
              <input
                type="radio"
                name={`soal${item.id}`}
                value="Benar"
                onChange={() => handleChange(item.id, "Benar")}
                checked={jawaban[item.id] === "Benar"}
              />
              Benar
            </label>
            <label>
              <input
                type="radio"
                name={`soal${item.id}`}
                value="Salah"
                onChange={() => handleChange(item.id, "Salah")}
                checked={jawaban[item.id] === "Salah"}
              />
              Salah
            </label>
            {submitted && (
              <div>
                {jawaban[item.id] === item.jawaban_benar ? 'Jawaban Benar' : 'Jawaban Salah'}
                <p>{item.pembahasan}</p>
              </div>
            )}
          </div>
        );
      }

      return null;
    });
  };

  return (
    <div>
      <h2>Mini Quiz: {materi}</h2>
      <form>
        {renderSoal(soal[materi])}
      </form>
      <button type="button" onClick={handleSubmit}>Kirim Jawaban</button>
      {submitted && (
        <div>
          <h3>Terima kasih telah mengerjakan quiz!</h3>
        </div>
      )}
    </div>
  );
};

export default MiniQuiz;