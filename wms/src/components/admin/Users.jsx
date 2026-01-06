import React, { useState } from 'react';
import './Users.css';

function Users() {
  const [users, setUsers] = useState([
    { id: 101, name: "Alice Johnson", email: "alice@gmail.com", plan: "Premium", status: "Active", joined: "2023-10-12" },
    { id: 102, name: "Bob Martin", email: "bob.m@yahoo.com", plan: "Basic", status: "Inactive", joined: "2023-11-05" },
    { id: 103, name: "Charlie Davis", email: "charlie@outlook.com", plan: "Free", status: "Active", joined: "2023-12-01" },
    { id: 104, name: "Diana Prince", email: "diana@amazon.com", plan: "Premium", status: "Active", joined: "2024-01-15" },
  ]);

  const handleRemoveUser = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user? This action cannot be undone.");
    if (confirmDelete) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  return (
    <div className="users-container">
      <div className="users-header">
        <div>
          <h1>User Management</h1>
          <p>Manage registered customers and their subscription status</p>
        </div>
        <div className="user-stats">
          Total Users: <strong>{users.length}</strong>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Full Name</th>
              <th>Email Address</th>
              <th>Plan</th>
              <th>Status</th>
              <th>Joined Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td>#{user.id}</td>
                  <td className="user-name-cell">{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.plan}</td>
                  <td>
                    <span className={`status-pill ${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>{user.joined}</td>
                  <td>
                    <button 
                      className="delete-btn"
                      onClick={() => handleRemoveUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="empty-row">No users found in the database.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;