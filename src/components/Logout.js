import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './bg2.jpg';
import profileImage from './profil.jpg';


function Logout({ username }) {
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
      textAlign: 'center',
      padding: '20px',
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
      maxWidth: '400px',
      textAlign: 'center',
    },
    profileImage: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '20px',
    },
    heading: {
      fontSize: '1.5rem',
      color: '#333',
      marginBottom: '10px',
    },
    message: {
      fontSize: '1rem',
      color: '#666',
      marginBottom: '20px',
    },
    button: {
      padding: '12px 24px',
      backgroundColor: '#8B4513',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      textDecoration: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#A0522D',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src={profileImage}
          alt="Profile"
          style={styles.profileImage}
        />
        <h2 style={styles.heading}>Goodbye, {username}!</h2>
        <p style={styles.message}>
          Terima kasih telah mengunjungi MASI. Kami berharap dapat segera bertemu Anda lagi!
        </p>
        <Link to="/" style={styles.button}>
          Kembali Ke Beranda
        </Link>
      </div>
    </div>
  );
}

export default Logout;
