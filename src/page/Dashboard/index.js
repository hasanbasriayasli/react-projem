import React, { useState } from "react";
import "./index.css";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Başlık:", title);
    console.log("Açıklama:", description);
  };

  return (
    <div className="app">
      <header className="header">
        <img src="https://ucretsizkesif.vaillant.com.tr/img/vaillant-logo.png" />
      </header>
      <div className="dashboard">
        <h2>Veri Girişi</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Başlık:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div>
            <label htmlFor="description">Açıklama:</label>
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <button type="submit">Gönder</button>
        </form>
      </div>
      <footer className="footer">
        <p>Telif Hakkı &copy; 2023. Örnek Şirketi. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
