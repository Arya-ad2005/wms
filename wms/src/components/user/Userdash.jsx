import React from 'react';
import './Userdash.css'; // Import the external CSS file
import Userside from './Userside'; // Assuming Userside component is in the same directory

function Userdash() {
  return (
    <div>

    <div className="user-dash-container">
      <Userside />
      <div className="main-content">
        <div className="stats-container">
          <div className="stat-card">
            <h3>Total Sells</h3>
            <p className="amount">$1,250.00</p>
          </div>
          <div className="stat-card">
            <h3>Total Earnings</h3>
            <p className="amount">$875.50</p>
          </div>
        </div>
        {/* You can add more dashboard content here */}
      </div>
    </div>
    </div>
  );
}

export default Userdash