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
import MiniQuizMatriks from './components/MiniQuizMatriks.js';

import Transformasi from './components/Transformasi';
import MateriTransformasi from './components/MateriTransformasi';
import ContohSoalTransformasi from './components/ContohSoalTransformasi';
import PembahasanTransformasi from './components/PembahasanTransformasi';
import MiniQuizTransformasi from './components/MiniQuizTransformasi.js';

import InduksiMatematika from './components/InduksiMatematika';
import MateriInduksiMatematika from './components/MateriInduksiMatematika';
import ContohSoalInduksiMatematika from './components/ContohSoalInduksiMatematika';
import PembahasanInduksiMatematika from './components/PembahasanInduksiMatematika';
import MiniQuizInduksiMatematika from './components/MateriInduksiMatematika.js';

import ProgramLinear from './components/ProgramLinear';
import MateriProgramLinear from './components/MateriProgramLinear';
import ContohSoalProgramLinear from './components/ContohSoalProgramLinear';
import PembahasanProgramLinear from './components/PembahasanProgramLinear';
import MiniQuizProgramLinear from './components/MiniQuizProgramLinear.js';

import Integral from './components/Integral';
import MateriIntegral from './components/MateriIntegral';
import ContohSoalIntegral from './components/ContohSoalIntegral';
import PembahasanIntegral from './components/PembahasanIntegral';
import MiniQuizIntegral from './components/MiniQuizIntegral.js';

import Turunan from './components/Turunan';
import MateriTurunan from './components/MateriTurunan';
import ContohSoalTurunan from './components/ContohSoalTurunan';
import PembahasanTurunan from './components/PembahasanTurunan';
import MiniQuizTurunan from './components/MiniQuizTurunan.js';

import './App.css'; // CSS utama untuk aplikasi

import './components/MatrixQuestions.css';
import './components/MatrixDiscussion.css';
import './components/MiniQuizMatriks.css';

import './components/MateriIntegral.css';
import './components/ContohSoalIntegral.css';
import './components/PembahasanSoalIntegral.css';
import './components/MiniQuizIntegral.css';

import './components/MateriTransformasi.css';
import './components/ContohSoalTransformasi.css';

import './components/MateriInduksiMatematika.css';
import './components/ContohSoalInduksiMatematika.css';
import './components/PembahasanInduksiMatematika.css';
import './components/MiniQuizInduksiMatematika.css';

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

            {/* Tampilkan link Register dan Login hanya jika pengguna belum login */}
            {!isAuthenticated && (
              <>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
              </>
            )}

            {/* Tampilkan link Diskusi dan Big Quiz jika sudah login */}
            {isAuthenticated && (
              <>
                <Link to="/formdiskusi">Diskusi</Link>
                <Link to="/bigquiz">Big Quiz</Link>
                <Link to="/logout">Logout</Link>
              </>
            )}
          </nav>
        </header>

        <Routes>
          {/* Rute utama */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/formdiskusi" element={isAuthenticated ? <FormDiskusi /> : <Login onLogin={handleLogin} />} />
          <Route path="/bigquiz" element={isAuthenticated ? <BigQuiz /> : <Login onLogin={handleLogin} />} />

          {/* Logout */}
          <Route path="/logout" element={<Logout username={username} />} />

          {/* Turunan */}
          <Route path="/turunan" element={isAuthenticated ? <Turunan /> : <Login onLogin={handleLogin} />} />
          <Route path="/turunan/materi" element={isAuthenticated ? <MateriTurunan /> : <Login onLogin={handleLogin} />} />
          <Route path="/turunan/pembahasan" element={isAuthenticated ? <PembahasanTurunan /> : <Login onLogin={handleLogin} />} />
          <Route path="/turunan/contoh-soal" element={isAuthenticated ? <ContohSoalTurunan /> : <Login onLogin={handleLogin} />} />
          <Route path="/turunan/mini-quiz" element={isAuthenticated ? <MiniQuizTurunan topic="Turunan" /> : <Login onLogin={handleLogin} />} />

          {/* Matrix */}
          <Route path="/matriks" element={isAuthenticated ? <Matriks /> : <Login onLogin={handleLogin} />} />
          <Route path="/matriks/materi" element={isAuthenticated ? <MateriMatriks /> : <Login onLogin={handleLogin} />} />
          <Route path="/matriks/contoh-soal" element={isAuthenticated ? <ContohSoalMatriks /> : <Login onLogin={handleLogin} />} />
          <Route path="/matriks/pembahasan" element={isAuthenticated ? <PembahasanMatriks /> : <Login onLogin={handleLogin} />} />
          <Route path="/matriks/mini-quiz" element={isAuthenticated ? <MiniQuizMatriks topic="Matriks" /> : <Login onLogin={handleLogin} />} />

          {/* Induksi Matematika */}
          <Route path="/induksimatematika" element={isAuthenticated ? <InduksiMatematika /> : <Login onLogin={handleLogin} />} />
          <Route path="/induksimatematika/materi" element={isAuthenticated ? <MateriInduksiMatematika /> : <Login onLogin={handleLogin} />} />
          <Route path="/induksimatematika/contoh-soal" element={isAuthenticated ? <ContohSoalInduksiMatematika /> : <Login onLogin={handleLogin} />} />
          <Route path="/induksimatematika/pembahasan" element={isAuthenticated ? <PembahasanInduksiMatematika /> : <Login onLogin={handleLogin} />} />
          <Route path="/induksimatematika/mini-quiz" element={isAuthenticated ? <MiniQuizInduksiMatematika topic="InduksiMatematika" /> : <Login onLogin={handleLogin} />} />

          {/* Linear */}
          <Route path="/Programlinear" element={isAuthenticated ? <ProgramLinear /> : <Login onLogin={handleLogin} />} />
          <Route path="/Programlinear/materi" element={isAuthenticated ? <MateriProgramLinear /> : <Login onLogin={handleLogin} />} />
          <Route path="/programlinear/contoh-soal" element={isAuthenticated ? <ContohSoalProgramLinear /> : <Login onLogin={handleLogin} />} />
          <Route path="/programlinear/pembahasan" element={isAuthenticated ? <PembahasanProgramLinear /> : <Login onLogin={handleLogin} />} />
          <Route path="/programlinear/mini-quiz" element={isAuthenticated ? <MiniQuizProgramLinear topic="ProgramLinear" /> : <Login onLogin={handleLogin} />} />

          {/* Integral */}
          <Route path="/integral" element={isAuthenticated ? <Integral /> : <Login onLogin={handleLogin} />} />
          <Route path="/MateriIntegral/materi" element={isAuthenticated ? <MateriIntegral /> : <Login onLogin={handleLogin} />} />
          <Route path="/MateriIntegral/contoh-soal" element={isAuthenticated ? <ContohSoalIntegral /> : <Login onLogin={handleLogin} />} />
          <Route path="/MateriIntegral/pembahasan" element={isAuthenticated ? <PembahasanIntegral /> : <Login onLogin={handleLogin} />} />
          <Route path="/MateriIntegral/mini-quiz" element={isAuthenticated ? <MiniQuizIntegral topic="Integral" /> : <Login onLogin={handleLogin} />} />

          {/* Transformasi */}
          <Route path="/transformasi" element={isAuthenticated ? <Transformasi /> : <Login onLogin={handleLogin} />} />
          <Route path="/transformasi/materi" element={isAuthenticated ? <MateriTransformasi /> : <Login onLogin={handleLogin} />} />
          <Route path="/transformasi/contoh-soal" element={isAuthenticated ? <ContohSoalTransformasi /> : <Login onLogin={handleLogin} />} />
          <Route path="/transformasi/pembahasan" element={isAuthenticated ? <PembahasanTransformasi /> : <Login onLogin={handleLogin} />} />
          <Route path="/transformasi/mini-quiz" element={isAuthenticated ? <MiniQuizTransformasi topic="Transformasi" /> : <Login onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
