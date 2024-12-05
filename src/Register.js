import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import backgroundImage from './components/bg2.jpg';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // State untuk pesan error/success
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ambil daftar pengguna yang sudah terdaftar
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Cek apakah username sudah ada
    if (users.some((user) => user.username === username)) {
      setMessage('Username already exists! Please choose a different username.'); // Set pesan error
      return;
    }

    // Tambahkan pengguna baru ke daftar
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users)); // Simpan ke localStorage

    setMessage('Registration successful! Please login.'); // Set pesan sukses
    setTimeout(() => navigate('/login'), 2000); // Arahkan ke halaman login setelah 2 detik
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparan dengan latar putih
      padding: '20px',
      borderRadius: '8px',
    },
    input: {
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      backgroundColor: 'white', // Hapus background transparan dan ganti jadi putih
    },
    button: {
      padding: '10px',
      backgroundColor: '#8B4513',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    message: {
      marginTop: '10px',
      padding: '10px',
      textAlign: 'center',
      color: message.includes('already exists') ? 'red' : 'green',
      fontWeight: 'bold',
    },
    link: {
      color: '#8B4513', // Warna yang sama dengan tombol untuk konsistensi
    },
  };

  return (
    <div style={styles.container}>
      <h2>Daftar</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Nama Pengguna"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Kata Sandi"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="Kirim" style={styles.button}>
          Daftar
        </button>
      </form>

      {/* Menampilkan pesan di bawah tombol register */}
      {message && <div style={styles.message}>{message}</div>}

      <p className="mt-3 text-center">
        Sudah memiliki akun?{' '}
        <Link to="/login" style={styles.link}>
          Masuk Disini
        </Link>
      </p>
    </div>
  );
}

export default Register;
