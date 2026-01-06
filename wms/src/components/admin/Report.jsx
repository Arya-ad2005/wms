import React, { useState } from 'react';
import './Report.css';

function Report() {
  // Dummy data for report records
  const [records] = useState([
    { id: 'TRX-001', date: '2024-03-01', collector: 'John Doe', user: 'Alice Johnson', amount: '$50.00', status: 'Completed' },
    { id: 'TRX-002', date: '2024-03-01', collector: 'Sarah Smith', user: 'Bob Martin', amount: '$30.00', status: 'Pending' },
    { id: 'TRX-003', date: '2024-03-02', collector: 'Mike Johnson', user: 'Charlie Davis', amount: '$45.00', status: 'Completed' },
    { id: 'TRX-004', date: '2024-03-02', collector: 'John Doe', user: 'Diana Prince', amount: '$100.00', status: 'Failed' },
    { id: 'TRX-005', date: '2024-03-03', collector: 'Emma Wilson', user: 'Edward Norton', amount: '$25.00', status: 'Completed' },
  ]);

  return (
    <div className="report-container">
      <div className="report-header">
        <h1>Detailed Reports</h1>
        <button className="download-btn">📥 Download CSV</button>
      </div>

      {/* Summary Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Collections</h3>
          <p className="stat-number">1,250</p>
          <span className="stat-label blue">Overall</span>
        </div>
        <div className="stat-card">
          <h3>Successful</h3>
          <p className="stat-number">1,180</p>
          <span className="stat-label green">+94% Success</span>
        </div>
        <div className="stat-card">
          <h3>Total Revenue</h3>
          <p className="stat-number">$15,400</p>
          <span className="stat-label gold">This Month</span>
        </div>
      </div>

      {/* Records Table */}
      <div className="report-card">
        <div className="card-header">
          <h2>All Transaction Records</h2>
        </div>
        <div className="table-responsive">
          <table className="report-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Date</th>
                <th>Collector</th>
                <th>User</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id}>
                  <td><strong>{record.id}</strong></td>
                  <td>{record.date}</td>
                  <td>{record.collector}</td>
                  <td>{record.user}</td>
                  <td>{record.amount}</td>
                  <td>
                    <span className={`status-tag ${record.status.toLowerCase()}`}>
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Report;