import React, { useState, useEffect } from "react";

function FormDiskusii() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Ambil data dari localStorage saat komponen dimuat
    const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(savedMessages);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tambahkan pesan baru ke daftar
    const newMessage = { username, message, timestamp: new Date().toLocaleString() };
    const updatedMessages = [...messages, newMessage];

    // Simpan ke localStorage
    localStorage.setItem("messages", JSON.stringify(updatedMessages));
    setMessages(updatedMessages);

    // Reset input form
    setUsername("");
    setMessage("");
  };

  return (
    <>
      <style>
        {`
          body {
            background-color: #c19a6b; /* Warna coklat */
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
          }

          .container {
            padding: 50px; /* Mengurangi padding agar tidak terlalu besar */
            background-image: url('https://i.pinimg.com/736x/4d/1a/1a/4d1a1ad0f578f3f78bc24006a58ec1f6.jpg'); /* Menambahkan gambar latar */
            background-size: cover; /* Agar gambar memenuhi seluruh elemen */
            background-position: center; /* Pusatkan gambar */
            background-repeat: no-repeat; /* Hindari pengulangan gambar */
            width: calc(100% - 40px); /* Mengisi hampir seluruh lebar layar, dengan jarak 20px di setiap sisi */
            margin: 30px auto;
            border-radius: 20px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            text-align: center;
          }

          h2 {
            color: #5a3c2d;
            font-style: italic;
            margin-bottom: 20px;
          }

          .form {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .input {
            margin-bottom: 15px;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            width: 100%;
            max-width: 400px;
            font-size: 16px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .button {
            padding: 12px 20px;
            background-color: #5a3c2d; /* Warna coklat gelap */
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
          }

          .button:hover {
            background-color: #4a3224; /* Warna hover lebih gelap */
          }

          .messageList {
            margin-top: 20px;
            background-color: #fefefe;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            text-align: left;
            max-width: 100%;
          }

          .messageItem {
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #ddd;
          }

          .messageItem:last-child {
            border-bottom: none;
          }

          .messageItem strong {
            color: #5a3c2d;
            font-size: 16px;
          }

          .messageItem span {
            color: #999;
            font-size: 12px;
          }

          @media (max-width: 600px) {
            .container {
              padding: 15px;
            }

            .input, .button {
              width: 100%;
              font-size: 14px;
            }
          }
        `}
      </style>

      <div className="container">
        <h2><em>Form Diskusi</em></h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Nama"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            required
          />
          <textarea
            placeholder="Apa yang ingin kamu diskusikan?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="input"
            rows="4"
            required
          />
          <button type="submit" className="button">
            Kirim !
          </button>
        </form>

        <div className="messageList">
          <h3>Pesan Diskusi</h3>
          {messages.map((msg, index) => (
            <div key={index} className="messageItem">
              <strong>{msg.username}</strong> 
              <span> ({msg.timestamp})</span><br />
              {msg.message}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FormDiskusii;
