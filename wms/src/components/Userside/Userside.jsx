import React from 'react'
import './Userside.css'
import { Link, useParams } from 'react-router-dom'
function SidebarUser() {
  const {id} = useParams()
  return (
    
    <div>
       <div className='user-dashboard'>
       <h3 className='user-panelheading'>User Panel</h3>
       <hr/>
      <ul className='user-ul'>
        <li className="dash-user">
          <Link to={`/userdashboard/${id}`}>Dashboard</Link>
        </li>
         <li className="dash-user">
          <Link to={`/userprofile/${id}`}>Profile</Link>
        </li>
  
        <li className="dash-user">
          <Link to={`/pickuprequest/${id}`}>Pickup Requests</Link>
        </li>
         
        <li className="dash-user">
          <Link to="/home">Logout</Link>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default SidebarUser
