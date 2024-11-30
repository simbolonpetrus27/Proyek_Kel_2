import React, { useState } from 'react';
import soal from './soal';

const MiniQuiz = ({ materi }) => {
  const [jawaban, setJawaban] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (id, answer) => {
    setJawaban((prevJawaban) => {
      const updatedJawaban = [...prevJawaban];
      updatedJawaban[id] = answer;
      return updatedJawaban;
    });
  };
  
  const handleSubmit = () => {
    setSubmitted(true);
  };
  
  const renderSoal = (soal) => {
    return soal.map((item) => {
      if (item.tipe === 'pilihan_ganda') {
        return (
          <div key={item.id}>
            <p>{item.soal}</p>
            {item.pilihan.map((option, idx) => (
              <label key={idx}>
                <input
                  type="radio"
                  name={`soal${item.id}`}
                  value={option}
                  onChange={() => handleChange (item.id, option)}
                  checked={jawaban[item.id] === option}
                />
                {option}
              </label>
            ))}
            {submitted && (
              <div>
                {jawaban[item.id] === item.jawaban_benar ? 'Jawaban Benar' : 'Jawaban Salah'}
                <p>{item.pembahasan}</p>
              </div>
            )}
          </div>
        );
      }
      
      if (item.tipe === 'essay') {
        return (
          <div key={item.id}>
            <p>{item.soal}</p>
            <textarea
              onChange={(e) => handleChange (item.id, e.target.value)} 
              value={jawaban[item.id] || ''}
            />
            {submitted && (
              <div>
                <p>{jawaban[item.id] === item.jawaban_benar? 'Jawaban Benar' : 'Jawaban Salah'}</p>
                <p>{item.pembahasan}</p>
              </div>
            )}
          </div>
        );
      }
      
      if (item.tipe === 'benar_salah') {
        return (
          <div key={item.id}>
            <p>{item.soal}</p>
            <label>
              <input
                type="radio"
                name={`soal${item.id}`}
                value="Benar"
                onChange={() => handleChange(item.id, "Benar")}
                checked={jawaban[item.id] === "Benar"}
              />
              Benar
            </label>
            <label>
              <input
                type="radio"
                name={`soal${item.id}`}
                value="Salah"
                onChange={() => handleChange (item.id, "Salah")}
                checked={jawaban[item.id] === "Salah"}
              />
              Salah
            </label>
            {submitted && (
              <div>
                {jawaban [item.id] === item.jawaban_benar? 'Jawaban Benar' : 'Jawaban Salah'}
                <p>{item.pembahasan}</p>
              </div>
            )}
          </div>
        );
      }

      return null;
    });
  };

  return (
    <div>
      <h2>Mini Quiz: {materi}</h2>
      <form>
        {renderSoal(soal[materi])}
      </form>
      <button type="button" onClick={handleSubmit}>Kirim Jawaban</button>
      {submitted && (
        <div>
          <h3>Terima kasih telah mengerjakan quiz!</h3>
        </div>
      )}
    </div>
  );
};

export default MiniQuiz;