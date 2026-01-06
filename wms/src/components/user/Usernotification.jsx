import React, { useState } from 'react';
import './Usernotification.css';
import Userside from './Userside';

export default function Usernotification() {
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'Your waste pickup is scheduled for tomorrow.', read: false },
    { id: 2, text: 'New message from admin regarding pickup times.', read: false },
    { id: 3, text: 'Reminder: update your profile to receive alerts.', read: true },
  ]);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const deleteRead = () => {
    setNotifications((prev) => prev.filter((n) => !n.read));
  };

  const toggleRead = (id) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: !n.read } : n)));
  };

  const deleteOne = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="notification-container">
      <Userside />
      <div className="notification-header">
        <h2>Notifications</h2>
      </div>

      <div className="notification-list">
        {notifications.length === 0 ? (
          <p className="no-notifications">No new notifications.</p>
        ) : (
          notifications.map((note) => (
            <div
              key={note.id}
              className={`notification-item ${note.read ? 'read' : 'unread'}`}>
              <div className="notification-text">{note.text}</div>
              <div className="notification-item-actions">
                <button
                  className="notification-button small-button"
                  onClick={() => toggleRead(note.id)}>
                  {note.read ? 'Mark Unread' : 'Mark Read'}
                </button>
                <button
                  className="notification-button small-button delete-button"
                  onClick={() => deleteOne(note.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="notification-actions">
        <button className="notification-button read-button" onClick={markAllRead}>
          Mark all read
        </button>
        <button className="notification-button clear-button" onClick={clearAll}>
          Clear all
        </button>
        <button className="notification-button delete-button" onClick={deleteRead}>
          Delete read
        </button>
      </div>
    </div>
  );
}