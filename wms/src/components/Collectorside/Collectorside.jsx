import React from 'react'
import './Collecctorside.css'
import { Link, useParams } from 'react-router-dom'
function Sidebar() {
  const { id } = useParams()
  return (
    <div>
      <div className='collecter-dashboard'>
        <h3 className='collecter-panelheading'>Collecter Panel</h3>
        <hr />
        <ul className='collecter-ul'>
          <li className="dash-collecter">
            <Link to={`/collecterdashboard/${id}`}>Dashboard</Link>
          </li>
          <li className="dash-collecter">
            <Link to={`/collecterprofile/${id}`}>Profile</Link>
          </li>
          {/* <li className="dash-collecter">
                  <Link to={`/collecterpayment/${id}`}>Payment Status</Link>
        </li> */}
          <li className="dash-collecter">
            <Link to={`/collecterpickup/${id}`} className='pickup-link'>Pick up Manage</Link>
          </li>
          <li className="dash-collecter">
            <Link to={`/collectorhistory/${id}`}>Field History</Link>
          </li>



          <li className="dash-collecter">
            <Link to={`/home`}>Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
