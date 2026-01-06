import React from 'react';
import './Usertrack.css';
import Userside from './Userside';

export default function Usertrack() {
  // You would typically fetch this data from an API or manage it with state
  const trackingData = [
    { id: 1, request: 'User registration confirmation', missed: 'No', completed: 'Yes' },
    { id: 2, request: 'Password reset email', missed: 'No', completed: 'Yes' },
    { id: 3, request: 'Feature XYZ usage data', missed: 'Yes', completed: 'No' },
    { id: 4, request: 'Login attempt from new device', missed: 'No', completed: 'Yes' },
    { id: 5, request: 'Subscription renewal reminder', missed: 'Yes', completed: 'No' },
  ];

  return (
    <div className="usertrack-container">
      <Userside />
      <h2>User Tracking Overview</h2>
      <table className="usertrack-table">
        <thead>
          <tr>
            <th>Request</th>
            <th>Missed</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {trackingData.map((item) => (
            <tr key={item.id}>
              <td>{item.request}</td>
              <td>{item.missed}</td>
              <td>{item.completed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}