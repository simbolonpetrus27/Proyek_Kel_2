import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Register from './Register';
import Login from './Login';
import Matrix from './components/Matrix';
import MateriMatrix from './components/MateriMatrix';
import ContohSoalMatrix from './components/ContohSoalMatrix';
import PembahasanMatrix from './components/PembahasanMatrix';
import InduksiMatematika from './components/InduksiMatematika';
import MateriInduksiMatematika from './components/MateriInduksiMatematika'; 
import ContohSoalInduksiMatematika from './components/ContohSoalInduksiMatematika'; 
import Linear from './components/Linear';
import MateriLinear from './components/MateriLinear';
import ContohSoalLinear from './components/ContohSoalLinear';
import PembahasanLinear from './components/PembahasanLinear';
import Integral from './components/Integral';
import MateriIntegral from './components/MateriIntegral';
import ContohSoalIntegral from './components/ContohSoalIntegral';
import PembahasanIntegral from './components/PembahasanIntegral';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // State untuk autentikasi dan pengguna saat ini
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  // Fungsi login: mengatur status autentikasi dan nama pengguna
  const handleLogin = (username) => {
    setIsAuthenticated(true);
    setUsername(username);
  };

  // Fungsi logout: menghapus autentikasi dan mengosongkan nama pengguna
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    alert('You have been logged out. Please register or login again.');
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>MILI - Kelas 11 Matematika</h1>
          <nav>
            <Link to="/">Home</Link>
            {!isAuthenticated && <Link to="/register">Register</Link>}
            {!isAuthenticated && <Link to="/login">Login</Link>}
            {isAuthenticated && (
              <>
                <Link to="/matrix">Matrix</Link>
                <Link to="/induksi-matematika">Induksi Matematika</Link>
                <Link to="/linear">Linear</Link>
                <Link to="/integral">Integral</Link>
                <span>Welcome, {username}</span> {/* Menampilkan username setelah login */}
                <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
              </>
            )}
            {!isAuthenticated && <span>Welcome, Guest</span>}
          </nav>
        </header>

        <Routes>
          {/* Rute utama */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          {/* Matrix */}
          <Route path="/matrix" element={isAuthenticated ? <Matrix /> : <Navigate to="/login" />} />
          <Route path="/matrix/materi" element={isAuthenticated ? <MateriMatrix /> : <Navigate to="/login" />} />
          <Route path="/matrix/contoh-soal" element={isAuthenticated ? <ContohSoalMatrix /> : <Navigate to="/login" />} />
          <Route path="/matrix/pembahasan" element={isAuthenticated ? <PembahasanMatrix /> : <Navigate to="/login" />} />

          {/* Induksi Matematika */}
          <Route path="/induksi-matematika" element={isAuthenticated ? <InduksiMatematika /> : <Navigate to="/login" />} />
          <Route path="/induksi-matematika/materi" element={isAuthenticated ? <MateriInduksiMatematika /> : <Navigate to="/login" />} />
          <Route path="/induksi-matematika/contoh-soal" element={isAuthenticated ? <ContohSoalInduksiMatematika /> : <Navigate to="/login" />} />

          {/* Linear */}
          <Route path="/linear" element={isAuthenticated ? <Linear /> : <Navigate to="/login" />} />
          <Route path="/linear/materi" element={isAuthenticated ? <MateriLinear /> : <Navigate to="/login" />} />
          <Route path="/linear/contoh-soal" element={isAuthenticated ? <ContohSoalLinear /> : <Navigate to="/login" />} />
          <Route path="/linear/pembahasan" element={isAuthenticated ? <PembahasanLinear /> : <Navigate to="/login" />} />

          {/* Integral */}
          <Route path="/integral" element={isAuthenticated ? <Integral /> : <Navigate to="/login" />} />
          <Route path="/integral/materi" element={isAuthenticated ? <MateriIntegral /> : <Navigate to="/login" />} />
          <Route path="/integral/contoh-soal" element={isAuthenticated ? <ContohSoalIntegral /> : <Navigate to="/login" />} />
          <Route path="/integral/pembahasan" element={isAuthenticated ? <PembahasanIntegral /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
