import React from 'react';
import './Collecterdash.css'; // Link to the dashboard CSS
import Collecterside from './Collecterside'; // Assuming this is your sidebar component

function Collecterdash() {
  // You might fetch these numbers from an API in a real application
  const totalRequests = 125;
  const totalPickups = 80;

  return (
    <div className="collecter-dashboard-layout">
      {/* The sidebar will be fixed on the left */}
      <Collecterside />

      {/* Main content area */}
      <div className="collecter-main-content">
        <h1 className="dashboard-title">Collector Dashboard</h1>

        <div className="dashboard-summary-cards">
          {/* Card for Total Requests */}
          <div className="summary-card">
            <h3>Total Requests</h3>
            <p className="card-value">{totalRequests}</p>
          </div>

          {/* Card for Total Pickups */}
          <div className="summary-card">
            <h3>Total Pickups</h3>
            <p className="card-value">{totalPickups}</p>
          </div>
        </div>

        {/* You can add more dashboard content here later */}
        <div className="dashboard-section">
          <h3>Recent Activity</h3>
          <p>Display recent collection logs or notifications here.</p>
          {/* Example: A table or list of recent activities */}
        </div>

      </div>
    </div>
  );
}

export default Collecterdash;