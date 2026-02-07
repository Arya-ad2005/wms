import React from 'react'
import './Userdash.css'
import { Link, useParams } from 'react-router-dom'

function Userdash() {

  const { id } = useParams()

  return (
    <div>
      <h1 className='user-mainhead'>Waste Management system</h1>
      <div className='user-container-form'>

        <div className='user-container'>
          <h2>Profile</h2>
          <Link to={`/userprofile/${id}`} className='profile-link'>
            Go To Your Profile
          </Link>
        </div>

        <div className='user-container'>
          <h2>Pickup Requests</h2>
          <Link to={`/pickuprequest/${id}`} className='profile-link'>
            Pickup Requests</Link>
        </div>

      </div>
    </div>
  )
}

export default Userdash
