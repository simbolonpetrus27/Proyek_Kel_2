import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header'; // Komponen Header dengan avatar dan notifikasi
import Home from './components/Home';
import Register from './Register';
import Login from './Login';
import FormDiskusi from './components/FormDiskusi';
import BigQuiz from './components/BigQuiz';
import Logout from './components/Logout';

import Matriks from './components/Matriks';
import MateriMatriks from './components/MateriMatriks';
import ContohSoalMatriks from './components/ContohSoalMatriks';
import PembahasanMatriks from './components/PembahasanMatriks';

import Transformasi from './components/Transformasi';
import MateriTransformasi from './components/MateriTransformasi';
import ContohSoalTransformasi from './components/ContohSoalTransformasi';
import PembahasanTransformasi from './components/PembahasanTransformasi'; 

import InduksiMatematika from './components/InduksiMatematika';
import MateriInduksiMatematika from './components/MateriInduksiMatematika';
import ContohSoalInduksiMatematika from './components/ContohSoalInduksiMatematika';
import PembahasanInduksiMatematika from './components/PembahasanInduksiMatematika'; 

import ProgramLinear from './components/ProgramLinear';
import MateriProgramLinear from './components/MateriProgramLinear';
import ContohSoalProgramLinear from './components/ContohSoalProgramLinear';
import PembahasanProgramLinear from './components/PembahasanProgramLinear';

import Integral from './components/Integral';
import MateriIntegral from './components/MateriIntegral';
import ContohSoalIntegral from './components/ContohSoalIntegral';
import PembahasanIntegral from './components/PembahasanIntegral';

import Turunan from './components/Turunan';
import MateriTurunan from './components/MateriTurunan';
import ContohSoalTurunan from './components/ContohSoalTurunan';
import PembahasanTurunan from './components/PembahasanTurunan';

import MiniQuiz from './components/MiniQuiz';
import './App.css'; // CSS utama untuk aplikasi
import soal from './components/soal';

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
            {!isAuthenticated && <Link to="/BigQuiz">Big Quiz</Link>}
          </nav>
        </header>

        <Routes>
          {/* Rute utama */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/formdiskusi" element={<FormDiskusi />} />
          <Route path="/bigquiz" element={<BigQuiz />} />
          <Route path="/integral" element={<Integral />} />
          <Route path="/matriks" element={<Matriks />} />
          <Route path="/transformasi" element={<Transformasi />} />
          <Route path="/induksimatematika" element={<InduksiMatematika />} />
          <Route path="/programlinear" element={<ProgramLinear />} />
          <Route path="/turunan" element={<Turunan />} />

          {/* Logout */}
          <Route path="/logout" element={<Logout username={username} />} />

          {/* Turunan */}
          <Route path="/turunan" element={isAuthenticated ? <Turunan /> : <Login onLogin={handleLogin} />} />
          <Route path="/turunan/materi" element={isAuthenticated ? <MateriTurunan /> : <Login onLogin={handleLogin} />} />
          <Route path="/turunan/pembahasan" element={isAuthenticated ? <PembahasanTurunan /> : <Login onLogin={handleLogin} />} />
          <Route path="/turunan/contoh-soal" element={isAuthenticated ? <ContohSoalTurunan /> : <Login onLogin={handleLogin} />} />
          <Route path="/turunan/mini-quiz" element={isAuthenticated ? <MiniQuiz topic="Turunan"/> : <Login onLogin={handleLogin} />} />


          {/* Matrix */}
          <Route path="/matriks" element={isAuthenticated ? <Matriks /> : <Login onLogin={handleLogin} />} />
          <Route path="/matriks/materi" element={isAuthenticated ? <MateriMatriks /> : <Login onLogin={handleLogin} />} />
          <Route path="/matriks/contoh-soal" element={isAuthenticated ? <ContohSoalMatriks /> : <Login onLogin={handleLogin} />} />
          <Route path="/matriks/pembahasan" element={isAuthenticated ? <PembahasanMatriks /> : <Login onLogin={handleLogin} />} />
          <Route path="/matriks/mini-quiz" element={isAuthenticated ? <MiniQuiz topic="Matriks" /> : <Login onLogin={handleLogin} />} />

          {/* Induksi Matematika */}
          <Route path="/induksimatematika" element={isAuthenticated ? <InduksiMatematika /> : <Login onLogin={handleLogin} />} />
          <Route path="/induksimatematika/materi" element={isAuthenticated ? <MateriInduksiMatematika /> : <Login onLogin={handleLogin} />} />
          <Route path="/induksimatematika/contoh-soal" element={isAuthenticated ? <ContohSoalInduksiMatematika /> : <Login onLogin={handleLogin} />} />
          <Route path="/induksimatematika/pembahasan" element={isAuthenticated ? <PembahasanInduksiMatematika /> : <Login onLogin={handleLogin} />} />
          <Route path="/induksimatematika/mini-quiz" element={isAuthenticated ? <MiniQuiz topic="InduksiMatematika" /> : <Login onLogin={handleLogin} />} />

          {/* Linear */}
          <Route path="/Programlinear" element={isAuthenticated ? <ProgramLinear /> : <Login onLogin={handleLogin} />} />
          <Route path="/Programlinear/materi" element={isAuthenticated ? <MateriProgramLinear /> : <Login onLogin={handleLogin} />} />
          <Route path="/programlinear/contoh-soal" element={isAuthenticated ? <ContohSoalProgramLinear /> : <Login onLogin={handleLogin} />} />
          <Route path="/programlinear/pembahasan" element={isAuthenticated ? <PembahasanProgramLinear /> : <Login onLogin={handleLogin} />} />
          <Route path="/programlinear/mini-quiz" element={isAuthenticated ? <MiniQuiz topic="ProgramLinear" /> : <Login onLogin={handleLogin} />} />

          {/* Integral */}
          <Route path="/integral" element={isAuthenticated ? <Integral /> : <Login onLogin={handleLogin} />} />
          <Route path="/integral/materi" element={isAuthenticated ? <MateriIntegral /> : <Login onLogin={handleLogin} />} />
          <Route path="/integral/contoh-soal" element={isAuthenticated ? <ContohSoalIntegral /> : <Login onLogin={handleLogin} />} />
          <Route path="/integral/pembahasan" element={isAuthenticated ? <PembahasanIntegral /> : <Login onLogin={handleLogin} />} />
          <Route path="/integral/mini-quiz" element={isAuthenticated ? <MiniQuiz topic="Integral" /> : <Login onLogin={handleLogin} />} />

          {/* Transformasi */}
          <Route path="/transformasi" element={isAuthenticated ? <Transformasi /> : <Login onLogin={handleLogin} />} />
          <Route path="/transformasi/materi" element={isAuthenticated ? <MateriTransformasi /> : <Login onLogin={handleLogin} />} />
          <Route path="/transformasi/contoh-soal" element={isAuthenticated ? <ContohSoalTransformasi /> : <Login onLogin={handleLogin} />} />
          <Route path="/transformasi/pembahasan" element={isAuthenticated ? <PembahasanTransformasi /> : <Login onLogin={handleLogin} />} />
          <Route path="/transformasi/mini-quiz" element={isAuthenticated ? <MiniQuiz topic="Transformasi" /> : <Login onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
