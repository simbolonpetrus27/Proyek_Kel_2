import React from 'react';
import { useParams } from 'react-router-dom';

function MatrixSection() {
  const { section } = useParams();

  const renderContent = () => {
    switch (section) {
      case 'materi':
        return <p>Ini adalah penjelasan lengkap tentang Materi Matrix...</p>;
      case 'contoh-soal':
        return (
          <div>
            <p>Soal 1: (Pembahasan Soal 1)</p>
            <p>Soal 2: (Pembahasan Soal 2)</p>
          </div>
        );
      case 'pembahasan':
        return <p>Penjelasan pembahasan soal-soal Matrix...</p>;
      default:
        return <p>Halaman tidak ditemukan!</p>;
    }
  };

  return (
    <div>
      <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
      {renderContent()}
    </div>
  );
}

export default MatrixSection;
