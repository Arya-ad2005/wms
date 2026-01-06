import React from 'react';
import './Adminside.css';

function Adminside() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="brand">Admin Panel</h2>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li className="nav-item">
            <a href="#collectors">
              <span className="icon">🚚</span> Collectors
            </a>
          </li>
          <li className="nav-item">
            <a href="#users">
              <span className="icon">👥</span> Users
            </a>
          </li>
          <li className="nav-item">
            <a href="#reports">
              <span className="icon">📊</span> Reports
            </a>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
}

export default Adminside;