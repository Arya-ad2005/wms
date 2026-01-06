import React from 'react';
import './WasteAdd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Userside from './Userside';

function WasteAdd() {
  return (
    <div>
      <Userside/>
    <div className="container user-dashboard-container mt-5">
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">Request a Pickup</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your full name" />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <textarea className="form-control" id="address" rows="3" placeholder="Enter your full address"></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image of Waste</label>
            <input type="file" className="form-control" id="image" />
          </div>

          <div className="mb-3">
            <label htmlFor="time" className="form-label">Preferred Pickup Time</label>
            <select className="form-select" id="time">
              <option selected>Choose a time slot...</option>
              <option value="1">9:00 AM - 11:00 AM</option>
              <option value="2">11:00 AM - 1:00 PM</option>
              <option value="3">1:00 PM - 3:00 PM</option>
              <option value="4">3:00 PM - 5:00 PM</option>
            </select>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-pickup">Request to Pick Up</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default WasteAdd;