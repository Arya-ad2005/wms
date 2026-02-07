import React, { useState } from 'react';
import './Collectordash.css';
import {Link, useParams} from 'react-router-dom'
function Collectordash() {
 const {id} = useParams()
  return (
    <div className="dashboard-wrapper">
      <div className="sidebar-h2">
        <h2 className="sidebar-h2">Waste Management</h2>
      </div>
      <div className="main-content">

        <div className='coll-container'>
          <h2>Profile</h2>
          <Link to={`/collecterprofile/${id}`} className='pickup-link-coll'>
            Go To Your Profile
          </Link>
        </div>

         <div className='coll-container'>
          <h2>Payment status</h2>
          <Link to={`/collecterpayment/${id}`} className='profile-link'>
            Go To  Payment
          </Link>
        </div>

        <div className='coll-container'>
          <h2>Pick up Manage</h2>
          <Link to={`/collecterpickup/${id}`} className='pickup-link-coll'>Pick up Manage</Link>
        </div>

     
      </div>
    </div >
  );
}

export default Collectordash;
