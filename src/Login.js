import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './components/bg2.jpg';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State untuk menampilkan pesan error/success
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Ambil daftar pengguna dari localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Validasi username dan password
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      onLogin(username); // Set pengguna sebagai terautentikasi
      setErrorMessage('Masuk berhasil!'); // Set pesan sukses
      setTimeout(() => navigate('/'), 1000); // Arahkan ke halaman Home setelah 1 detik
    } else {
      setErrorMessage('Nama pengguna atau kata sandi tidak valid'); // Set pesan error
    }
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
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: '20px',
      borderRadius: '8px',
    },
    input: {
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '4px',
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
      color: errorMessage.includes('Invalid') ? 'red' : 'green',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Masuk</h2>
      <form onSubmit={handleLogin} style={styles.form}>
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
          Masuk
        </button>
      </form>

      {/* Menampilkan pesan di bawah tombol login */}
      {errorMessage && <div style={styles.message}>{errorMessage}</div>}
    </div>
  );
}

export default Login;
