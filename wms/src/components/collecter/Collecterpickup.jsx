import React from 'react';
import './Collecterpickup.css';
import Collecterside from './Collecterside';

function Collecterpickup() {
  const data = [
    { name: 'John Doe', pickupRequest: 'Request A', completed: true, missed: false },
    { name: 'Jane Smith', pickupRequest: 'Request B', completed: false, missed: true },
    { name: 'Peter Jones', pickupRequest: 'Request C', completed: true, missed: false },
    { name: 'Alice Brown', pickupRequest: 'Request D', completed: false, missed: false },
  ];

  return (
    <div className="collecter-pickup">
      <Collecterside />
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Pickup Request</th>
              <th>Completed</th>
              <th>Missed</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.pickupRequest}</td>
                <td>{row.completed ? 'Yes' : 'No'}</td>
                <td>{row.missed ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Collecterpickup;