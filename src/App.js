import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header'; // Komponen Header dengan avatar dan notifikasi
import Home from './components/Home';
import Register from './Register';
import Login from './Login';
import FormDiskusi from './components/FormDiskusi';
import Logout from './components/Logout';
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

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  // Fungsi login
  const handleLogin = (username) => {
    setIsAuthenticated(true);
    setUsername(username);
  };

  // Fungsi logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setShowNotification(true); // Tampilkan notifikasi
    setTimeout(() => setShowNotification(false), 3000); // Sembunyikan setelah 3 detik
  };

  return (
    <Router>
      <div className="App">
        {/* Header */}
        <Header userName={isAuthenticated ? username : 'Guest'} onLogout={handleLogout} />

        <header>
          <nav>
            <Link to="/">Home</Link>
            {!isAuthenticated && <Link to="/register">Register</Link>}
            {!isAuthenticated && <Link to="/login">Login</Link>}
            {!isAuthenticated && <Link to="/FormDiskusi">Diskusi</Link>}
            {isAuthenticated && (
              <div className="logout-container">
                <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
                {/* Notifikasi Logout */}
                {showNotification && (
                  <div className="notification-card">
                    <p>Goodbye, {username}!</p>
                  </div>
                )}
              </div>
            )}
          </nav>
        </header>

        <Routes>
          {/* Rute utama */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/formdiskusi" element={<FormDiskusi />} />


          {/* Logout */}
          <Route path="/logout" element={<Logout username={username} />} />

          {/* Matrix */}
          <Route path="/matrix" element={isAuthenticated ? <Matrix /> : <Login onLogin={handleLogin} />} />
          <Route path="/matrix/materi" element={isAuthenticated ? <MateriMatrix /> : <Login onLogin={handleLogin} />} />
          <Route path="/matrix/contoh-soal" element={isAuthenticated ? <ContohSoalMatrix /> : <Login onLogin={handleLogin} />} />
          <Route path="/matrix/pembahasan" element={isAuthenticated ? <PembahasanMatrix /> : <Login onLogin={handleLogin} />} />

          {/* Induksi Matematika */}
          <Route path="/induksi-matematika" element={isAuthenticated ? <InduksiMatematika /> : <Login onLogin={handleLogin} />} />
          <Route path="/induksi-matematika/materi" element={isAuthenticated ? <MateriInduksiMatematika /> : <Login onLogin={handleLogin} />} />
          <Route path="/induksi-matematika/contoh-soal" element={isAuthenticated ? <ContohSoalInduksiMatematika /> : <Login onLogin={handleLogin} />} />

          {/* Linear */}
          <Route path="/linear" element={isAuthenticated ? <Linear /> : <Login onLogin={handleLogin} />} />
          <Route path="/linear/materi" element={isAuthenticated ? <MateriLinear /> : <Login onLogin={handleLogin} />} />
          <Route path="/linear/contoh-soal" element={isAuthenticated ? <ContohSoalLinear /> : <Login onLogin={handleLogin} />} />
          <Route path="/linear/pembahasan" element={isAuthenticated ? <PembahasanLinear /> : <Login onLogin={handleLogin} />} />

          {/* Integral */}
          <Route path="/integral" element={isAuthenticated ? <Integral /> : <Login onLogin={handleLogin} />} />
          <Route path="/integral/materi" element={isAuthenticated ? <MateriIntegral /> : <Login onLogin={handleLogin} />} />
          <Route path="/integral/contoh-soal" element={isAuthenticated ? <ContohSoalIntegral /> : <Login onLogin={handleLogin} />} />
          <Route path="/integral/pembahasan" element={isAuthenticated ? <PembahasanIntegral /> : <Login onLogin={handleLogin} />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;