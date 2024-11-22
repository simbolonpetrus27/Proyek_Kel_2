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
          /* Background Putih untuk seluruh halaman */
          body {
            background-color: #ffff;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
          }

          .container {
            padding: 20px;
            background-color: #fff;
            max-width: 800px;
            margin: 0 auto;
            border-radius: 8px;
            text-align: center; /* Menyusun teks di tengah */
          }

          h2 {
            font-style: italic; /* Untuk efek italic pada judul */
          }

          .form {
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
            max-width: 100%;
            margin: 0 auto;
            align-items: center; /* Menyusun form di tengah */
          }

          .input {
            margin-bottom: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            width: 100%;
          }

          .button {
            padding: 10px;
            background-color: #c19a6b;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
          }

          .messageList {
            max-width: 100%;
            margin: 0 auto;
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
          }

          .messageItem {
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid #ddd;
          }

          /* Responsiveness untuk perangkat lebih kecil */
          @media (max-width: 600px) {
            .container {
              padding: 10px;
            }

            .form {
              width: 100%;
            }

            .input, .button {
              padding: 8px;
            }
          }
        `}
      </style>

      <div className="container">
        <h2><em>Form Diskusi</em></h2>
        <br />
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            required
          />
          <textarea
            placeholder="What Do You Want To Discuss"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="input"
            rows="4"
            required
          />
          <button type="submit" className="button">
            Send !
          </button>
        </form>

        <div className="messageList">
          <h3>Pesan Diskusi</h3>
          {messages.map((msg, index) => (
            <div key={index} className="messageItem">
              <strong>{msg.username}</strong> ({msg.timestamp}):<br />
              {msg.message}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FormDiskusii;
