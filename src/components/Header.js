import React from 'react';
import './Header.css';

const Header = ({ userName, onLogout }) => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="/mm.png" alt="" className="logo-image" />
      </div>
      <nav className="header-nav">
        <ul>
          <li className="user-info">
            <strong><em>Welcome, {userName}</em></strong>
            <div className="user-profile">
              <img
                src="https://api.dicebear.com/6.x/adventurer/svg?seed=User" // Avatar animasi
                alt="User Avatar"
                className="user-avatar"
              />
            </div>
          </li>
          <li>
            <button onClick={onLogout} className="logout-button">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
