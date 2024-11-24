import React from 'react';
import { Link } from 'react-router-dom';


const InduksiMatematika = () => {
  const styles = {
    container: {
      display: 'flex',
      padding: '50px 0',
    },
    linkContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '200px',
      marginRight: '20px', // Memberi jarak antara link dan teks penjelasan
      backgroundColor: '#ffffff',
      border: '1px solid #ced4da',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    linkBox: {
      padding: '20px',
      textAlign: 'center',
      transition: 'transform 0.3s, box-shadow 0.3s',
      cursor: 'pointer',
      width: '100%',
    },
    linkBoxHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
    linkText: {
      color: '#007bff',
      textDecoration: 'none',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    separator: {
      height: '1px',
      backgroundColor: '#ced4da',
      margin: '0',
    },
    section: {
      backgroundColor: '#e0f7e0', // Warna hijau muda
      padding: '20px',
      borderRadius: '10px',
      margin: '10px 0', // Menambahkan margin atas dan bawah
      flex: 1, // Membiarkan bagian ini mengambil sisa ruang
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.linkContainer}>
        {[
          { text: 'Materi', path: '/induksi-matematika/materi' },
          { text: 'Contoh Soal', path: '/induksi-matematika/contoh-soal' },
          { text: 'Pembahasan', path: '/induksi-matematika/latihan-soal' },
          { text: 'Mini Quiz', path: '/induksi-matematika/miniquiz' },
        ].map((item, index) => (
          <React.Fragment key={index}>
            <section
              style={styles.linkBox}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = styles.linkBoxHover.transform;
                e.currentTarget.style.boxShadow = styles.linkBoxHover.boxShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Link to={item.path} style={styles.linkText}>
                <h3>{item.text}</h3>
              </Link>
            </section>
            {index < 3 && <div style={styles.separator}></div>}
          </React.Fragment>
        ))}
      </div>

      <section style={styles.section}>
        <h3>Definisi Induksi Matematika</h3>
        <p>
          Induksi matematika adalah suatu metode bukti matematika yang digunakan untuk membuktikan kebenaran pernyataan matematika untuk semua bilangan bulat non-negatif atau sebagian besar bilangan bulat. Pendekatan ini terdiri dari dua langkah utama: basis induksi dan langkah induksi.
        </p>
        <p>
          Pertama, kita membuktikan bahwa pernyataan tersebut benar untuk nilai awal tertentu (basis induksi), biasanya untuk n=0 atau n=1. Kedua, kita membuktikan bahwa jika pernyataan tersebut benar untuk suatu nilai k (langkah induksi), maka itu juga benar untuk nilai berikutnya, yaitu k+1.
        </p>
        <p>
          Dengan demikian, melalui proses berulang, kita dapat menyimpulkan bahwa pernyataan tersebut benar untuk semua bilangan bulat yang relevan.
        </p>
        <p>
          Rumus induksi matematika sering ditulis dalam bentuk umum, seperti P(n) untuk menyatakan pernyataan yang ingin dibuktikan, dan di ilustrasikan dengan basis induksi dan langkah induksi.
        </p>
        <p>
          P(n) = u1 + u2 + u3 + ... + un<br />
          Sn = n(n + 1) / 2
        </p>
        <h3>Prinsip Induksi Matematika</h3>
        <p>
          Prinsip Induksi Matematika merujuk pada suatu konsep yang mirip dengan efek domino, di mana membuktikan kebenaran untuk satu langkah awal secara otomatis membuktikan kebenaran untuk langkah-langkah berikutnya. Konsep ini dapat diibaratkan seperti efek berantai dari satu pernyataan ke pertanyaan berikutnya.
        </p>
        <p>
          Prinsip Induksi Matematika dapat digunakan untuk membuktikan rumus kebenaran pernyataan matematika dalam suatu rangkaian bilangan bulat. Langkah pertama, atau basis induksi, melibatkan pembuktian untuk nilai awal tertentu. Langkah kedua, atau langkah induksi, menunjukkan bahwa jika pernyataan benar untuk suatu nilai, maka itu juga benar untuk nilai berikutnya.
        </p>
        <p>
          Prinsip ini juga sering digunakan untuk membuktikan rumus matematika dengan mengonfirmasi kebenaran untuk nilai awal dan menunjukkan kelangsungan kebenaran pada nilai berikutnya. Dengan cara ini, Prinsip Induksi Matematika memberikan alat yang efektif untuk membuktikan kebenaran secara universal dalam konteks matematika.
        </p>
        <h3>Pembuktian Melalui Induksi</h3>
        <p>
          Pembuktian dengan induksi matematika menunjukkan bahwa jika suatu pernyataan matematika benar untuk suatu nilai awal tertentu, dan kita dapat membuktikan bahwa jika pernyataan itu benar untuk suatu nilai k, maka itu juga benar untuk nilai k+1, maka pernyataan tersebut benar untuk semua nilai yang lebih besar atau sama dengan nilai awal tersebut.
        </p>
        <p>
          Dengan kata lain, pembuktian menggunakan induksi matematika membuktikan kebenaran pernyataan untuk sejumlah tak terbatas bilangan bulat yang sesuai. Proses ini memberikan metode sistematis untuk membuktikan sifat atau rumus matematika pada kasus umum, dengan memanfaatkan dasar dan langkah-langkah induksi.
        </p>
        <h3>Pembuktian Induksi Secara Langsung</h3>
        <p>
          Dalam pembuktian induksi secara langsung, kita membuktikan bahwa suatu pernyataan matematika benar untuk nilai awal tertentu, biasanya dengan mengonfirmasi kebenaran untuk n=1 atau nilai awal lainnya.
        </p>
        <p>
          Selanjutnya, kita membuktikan bahwa jika pernyataan itu benar untuk suatu nilai k, maka itu juga benar untuk k+1. Dengan kata lain, kita membuktikan langkah induksi. Dengan melakukan kedua langkah ini, kita dapat menyimpulkan bahwa pernyataan tersebut benar untuk semua nilai yang relevan.
        </p>
        <h3>Pembuktian Induksi Secara Tidak Langsung</h3>
        <p>
          Sebaliknya, dalam pembuktian induksi secara tidak langsung (atau kontra-positif), kita membuktikan bahwa jika pernyataan tersebut salah untuk suatu nilai, maka itu juga salah untuk nilai berikutnya. Proses ini sering melibatkan konstruksi suatu asumsi yang bertentangan dengan kebenaran pernyataan tersebut.
        </p>
        <p>
          Jika asumsi tersebut bertentangan dengan kebenaran pernyataan pada langkah awal atau langkah k, maka kita dapat menyimpulkan bahwa pernyataan tersebut benar untuk semua nilai. Pemilihan antara pembuktian secara langsung atau tidak langsung tergantung pada sifat pernyataan dan kondisi masalah.
        </p>
        <p>
          Pembuktian secara langsung lebih umum digunakan dan lebih langsung terkait dengan ide dasar induksi matematika, sementara pembuktian secara tidak langsung seringkali memberikan sudut pandang alternatif dalam menyelesaikan permasalahan matematika.
        </p>
      </section>
    </div>
  );
}

export default InduksiMatematika;