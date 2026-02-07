import React, { useEffect, useState } from 'react';
import './Collectorhistory.css';
import axios from 'axios';

function Collectorhistory() {
  const [pickups, setPickups] = useState([]);
  const [filteredPickups, setFilteredPickups] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [loading, setLoading] = useState(true);

  const fetchAllPickups = () => {
    setLoading(true);
    axios
      .post('http://localhost:3888/viewallpickup')
      .then((res) => {
        if (res.data && res.data.data) {
          setPickups(res.data.data);
          setFilteredPickups(res.data.data);
        } else {
          setPickups([]);
          setFilteredPickups([]);
        }
      })
      .catch((err) => {
        console.error(err);
        alert('Error fetching pickup history!');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAllPickups();
  }, []);

  const handleFilterChange = (status) => {
    setSelectedStatus(status);
    if (status === 'all') {
      setFilteredPickups(pickups);
    } else if (status === 'requested') {
      setFilteredPickups(
        pickups.filter((p) => p.collectorStatus === 'pending' || p.collectorStatus === 'Not Informed')
      );
    } else if (status === 'completed') {
      setFilteredPickups(
        pickups.filter((p) => p.paymentStatus === 'completed' && p.collectorStatus === 'Accepted')
      );
    } else if (status === 'pending') {
      setFilteredPickups(
        pickups.filter((p) => p.paymentStatus === 'Pending' || p.collectorStatus === 'Accepted')
      );
    }
  };

  const getStatusBadgeClass = (item) => {
    if (item.paymentStatus === 'completed' && item.collectorStatus === 'Accepted') {
      return 'status-badge status-completed';
    } else if (item.collectorStatus === 'Accepted' || item.paymentStatus === 'Pending') {
      return 'status-badge status-pending';
    } else {
      return 'status-badge status-requested';
    }
  };

  const getStatusText = (item) => {
    if (item.paymentStatus === 'completed' && item.collectorStatus === 'Accepted') {
      return 'Completed';
    } else if (item.collectorStatus === 'Accepted' || item.paymentStatus === 'Pending') {
      return 'Pending';
    } else {
      return 'Requested';
    }
  };

  return (
    <div className="history-container">
      <h2>Field History</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button
          className={`filter-btn ${selectedStatus === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterChange('all')}
        >
          All
        </button>
        <button
          className={`filter-btn ${selectedStatus === 'requested' ? 'active' : ''}`}
          onClick={() => handleFilterChange('requested')}
        >
          Requested
        </button>
        <button
          className={`filter-btn ${selectedStatus === 'pending' ? 'active' : ''}`}
          onClick={() => handleFilterChange('pending')}
        >
          Pending
        </button>
        <button
          className={`filter-btn ${selectedStatus === 'completed' ? 'active' : ''}`}
          onClick={() => handleFilterChange('completed')}
        >
          Completed
        </button>
      </div>

      {/* Summary Stats */}
      <div className="history-stats">
        <div className="stat-card">
          <h4>Total Requests</h4>
          <p className="stat-number">{pickups.length}</p>
        </div>
        <div className="stat-card">
          <h4>Completed</h4>
          <p className="stat-number completed">
            {pickups.filter((p) => p.paymentStatus === 'completed').length}
          </p>
        </div>
        <div className="stat-card">
          <h4>Pending</h4>
          <p className="stat-number pending">
            {pickups.filter((p) => p.paymentStatus === 'Pending' || p.collectorStatus === 'Accepted').length}
          </p>
        </div>
        <div className="stat-card">
          <h4>Requested</h4>
          <p className="stat-number requested">
            {pickups.filter((p) => p.collectorStatus === 'pending' || p.collectorStatus === 'Not Informed').length}
          </p>
        </div>
      </div>

      {/* History List */}
      {loading ? (
        <div className="loading">Loading history...</div>
      ) : filteredPickups.length > 0 ? (
        <div className="history-list">
          {filteredPickups.map((item) => (
            <div className="history-card" key={item._id}>
              <div className="card-header">
                <h3>{item.userId?.name || 'Unknown User'}</h3>
                <span className={getStatusBadgeClass(item)}>
                  {getStatusText(item)}
                </span>
              </div>

              <div className="card-details">
                <div className="detail-row">
                  <span className="label">Waste Type:</span>
                  <span className="value">{item.wasteType}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Description:</span>
                  <span className="value">{item.description}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Pickup Date:</span>
                  <span className="value">
                    {new Date(item.pickupDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="label">Location:</span>
                  <span className="value">{item.location || 'Not specified'}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Collector Status:</span>
                  <span className="value">{item.collectorStatus || 'Not Informed'}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Payment Status:</span>
                  <span className="value">{item.paymentStatus}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Request Date:</span>
                  <span className="value">
                    {new Date(item.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-data">No pickups found for the selected filter.</div>
      )}
    </div>
  );
}

export default Collectorhistory;
