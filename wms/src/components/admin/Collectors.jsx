import React, { useState } from 'react';
import './Collectors.css';

function Collectors() {
  // Dummy data for collectors
  const [collectors, setCollectors] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", area: "North Zone", phone: "+1 234-567-890" },
    { id: 2, name: "Sarah Smith", email: "sarah@example.com", area: "South Zone", phone: "+1 234-567-891" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", area: "East Zone", phone: "+1 234-567-892" },
    { id: 4, name: "Emma Wilson", email: "emma@example.com", area: "West Zone", phone: "+1 234-567-893" },
  ]);

  const handleRemove = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to remove this collector?");
    if (confirmDelete) {
      setCollectors(collectors.filter(collector => collector.id !== id));
    }
  };

  return (
    <div className="collectors-container">
      <div className="collectors-header">
        <h1>Collectors Management</h1>
        <p>View and manage all active collection agents</p>
      </div>

      <div className="table-responsive">
        <table className="collectors-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Assigned Area</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {collectors.length > 0 ? (
              collectors.map((collector) => (
                <tr key={collector.id}>
                  <td>{collector.id}</td>
                  <td>{collector.name}</td>
                  <td>{collector.email}</td>
                  <td><span className="area-badge">{collector.area}</span></td>
                  <td>{collector.phone}</td>
                  <td>
                    <button 
                      className="remove-btn"
                      onClick={() => handleRemove(collector.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-data">No collectors found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Collectors;