import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Register from './Register';
import Login from './Login';
import Matrix from './components/Matrix';
import MateriMatrix from './components/MateriMatrix';
import ContohSoalMatrix from './components/ContohSoalMatrix';
import PembahasanMatrix from './components/PembahasanMatrix';
import InduksiMatematika from './components/InduksiMatematika';
import Linear from './components/Linear';
import MateriLinear from './components/MateriLinear';
import ContohSoalLinear from './components/ContohSoalLinear';
import PembahasanLinear from './components/PembahasanLinear';
import Integral from './components/Integral';
import MateriIntegral from './components/materi_integral';
import './App.css';``
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('isAuthenticated');
    if (loggedInUser === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>MILI - Matematika Kelas 11</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            {isAuthenticated && (
              <>
                <Link to="/matrix">Matrix</Link>
                <Link to="/induksi-matematika">Induksi Matematika</Link>
                <Link to="/linear">Linear</Link>
                <Link to="/integral">Integral</Link>
                <Link to="/materi_integral">Materi Integral</Link>
                <button onClick={handleLogout}>Logout</button>
              </>
            )}
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/matrix" element={isAuthenticated ? <Matrix /> : <Navigate to="/login" />} />
          {/* Rute baru untuk halaman Materi, Contoh Soal, dan Pembahasan */}
          <Route path="/matrix/materi" element={isAuthenticated ? <MateriMatrix /> : <Navigate to="/login" />} />
          <Route path="/matrix/contoh-soal" element={isAuthenticated ? <ContohSoalMatrix /> : <Navigate to="/login" />} />
          <Route path="/matrix/pembahasan" element={isAuthenticated ? <PembahasanMatrix /> : <Navigate to="/login" />} />
          <Route path="/induksi-matematika" element={isAuthenticated ? <InduksiMatematika /> : <Navigate to="/login" />} />
          <Route path="/linear" element={isAuthenticated ? <Linear /> : <Navigate to="/login" /> } />
          <Route path="/linear/materi" element={isAuthenticated ? <MateriLinear /> : <Navigate to="/login" />} />
          <Route path="/linear/contoh-soal" element={isAuthenticated ? <ContohSoalLinear /> : <Navigate to="/login" />} />
          <Route path="/linear/pembahasan" element={isAuthenticated ? <PembahasanLinear /> : <Navigate to="/login" />} />
          <Route path="/integral" element={isAuthenticated ? <Integral /> : <Navigate to="/login" />} />
          <Route path="/materi_integral" element={isAuthenticated ? <MateriIntegral /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
