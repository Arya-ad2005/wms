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
        const data = res?.data?.data || [];
        console.log("All Data:", data); 
        setPickups(data);
        setFilteredPickups(data);
      })
      .catch((err) => {
        console.error(err);
        alert('Error fetching pickup history!');
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchAllPickups();
  }, []);

  // 🔹 FINAL STATUS LOGIC 🔹
  const getDerivedStatus = (item) => {
    // Standardize text (lowercase, no spaces)
    const coll = (item.collectorStatus || '').toLowerCase().trim();
    const pay = (item.paymentStatus || '').toLowerCase().trim();

    // 1. COMPLETED: If payment is done
    if (pay === 'completed') {
      return 'completed';
    }

    // 2. PENDING: If collector has accepted (Work in Progress)
    // Check for any word that means "Accepted"
    if (coll === 'accepted' || coll === 'assigned' || coll === 'on the way' || coll === 'approved') {
      return 'pending';
    }

    // 3. REQUESTED: Everything else falls here.
    // If it's "", "requested", "new", "open", "pending approval" -> It is REQUESTED.
    return 'requested';
  };

  // 🔹 Filter Handler
  const handleFilterChange = (status) => {
    setSelectedStatus(status);
    if (status === 'all') {
      setFilteredPickups(pickups);
    } else {
      const filtered = pickups.filter((item) => getDerivedStatus(item) === status);
      setFilteredPickups(filtered);
    }
  };

  // 🔹 Helper for Counts
  const getCount = (status) => {
    return pickups.filter((item) => getDerivedStatus(item) === status).length;
  };

  // 🔹 Styling Helpers
  const getStatusBadgeClass = (item) => {
    const status = getDerivedStatus(item);
    if (status === 'completed') return 'status-badge status-completed';
    if (status === 'pending') return 'status-badge status-pending';
    return 'status-badge status-requested';
  };

  const getStatusText = (item) => {
    const status = getDerivedStatus(item);
    if (status === 'completed') return 'Completed';
    if (status === 'pending') return 'Pending';
    return 'Requested';
  };

  return (
    <div className="history-container">
      <h2>Field History</h2>

      {/* Filter Buttons */}
          {/* Filter Buttons */}
          <div className="filter-buttons">
            {['all', 'requested', 'completed'].map((status) => (
              <button
                key={status}
                className={`filter-btn ${selectedStatus === status ? 'active' : ''}`}
                onClick={() => handleFilterChange(status)}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="history-stats">
            <div className="stat-card">
              <h4>Total</h4>
              <p className="stat-number">{pickups.length}</p>
            </div>
            <div className="stat-card">
              <h4>Completed</h4>
              <p className="stat-number completed">{getCount('completed')}</p>
            </div>
            <div className="stat-card">
              <h4>Requested</h4>
              <p className="stat-number requested">{getCount('requested')}</p>
            </div>
          </div>

          {/* List */}
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
                    <Detail label="Waste Type" value={item.wasteType} />
                    <Detail label="Description" value={item.description} />
                    <Detail label="Location" value={item.location || 'Not specified'} />
                    <Detail label="Date" value={item.pickupDate ? new Date(item.pickupDate).toLocaleDateString() : 'N/A'} />
                    <Detail label="Coll. Status" value={item.collectorStatus || "-(Empty)-"} />
                    <Detail label="Pay. Status" value={item.paymentStatus || "-(Empty)-"} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-data">No pickups found for "{selectedStatus}".</div>
          )}
    </div>
  );
}

const Detail = ({ label, value }) => (
  <div className="detail-row">
    <span className="label">{label}:</span>
    <span className="value">{value}</span>
  </div>
);

export default Collectorhistory;