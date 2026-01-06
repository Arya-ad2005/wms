import React from 'react'
import './CollectorReg.css'

function CollectorReg() {
  return (
    <div className="collector-reg">
      <h2>Collector Registration</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default CollectorReg
