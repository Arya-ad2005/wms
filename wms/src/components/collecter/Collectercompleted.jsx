import React from 'react'
import './Collectercompleted.css'

function Collectercompleted() {
  return (
    <div className="collecter-completed">
      <h2>Completed Pickup Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Pickup Request</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Request A</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>Request B</td>
            <td>Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Collectercompleted

  