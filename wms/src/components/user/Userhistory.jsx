import React from 'react';
import './Userhistory.css';
import Userside from './Userside';

function Userhistory() {
  return (
    <div className="user-history-container">
        <Userside />
      <h1>History</h1>
      <div className="history-grid">
        <div className="history-box">
          <h3>Total Requests</h3>
          <p>150</p> {/* Replace with dynamic data */}
        </div>
        <div className="history-box">
          <h3>Total Pick Ups</h3>
          <p>120</p> {/* Replace with dynamic data */}
        </div>
        <div className="history-box">
          <h3>Missed</h3>
          <p>30</p> {/* Replace with dynamic data */}
        </div>
      </div>
    </div>
  );
}

export default Userhistory;