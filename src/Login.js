import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './components/regist.jpg'; 

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      onLogin();
      navigate('/');
    } else {
      setError('Username atau password Anda salah.');
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
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    header: {
      fontSize: '2rem',
      marginBottom: '20px',
      color: '#fff',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
      padding: '20px',
      borderRadius: '8px',
    },
    label: {
      marginBottom: '5px',
      fontWeight: 'bold',
      color: '#555',
    },
    input: {
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '1rem',
    },
    button: {
      padding: '10px',
      backgroundColor: '#ff69b4',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'background-color 0.3s',
    },
    error: {
      color: 'red',
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={{
        color: '#000',
        fontFamily: 'Quicksand',
        }}>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <div>
          <label style={styles.label}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;