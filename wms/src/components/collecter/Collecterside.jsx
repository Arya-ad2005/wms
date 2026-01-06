import React from 'react'
import './Collecterside.css'
import { Link } from 'react-router-dom'
import { FaBell, FaChartLine, FaHistory, FaRegCommentDots } from 'react-icons/fa'

function Collecterside() {
  return (
    <div className="collecter-sidebar-wrapper">
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/usernotification">
              <FaBell className="icon" />
              <span>pickup status</span>
            </Link>
          </li>
          <li>
            <Link to="/usertrack">
              <FaChartLine className="icon" />
              <span>completed</span>
            </Link>
          </li>
          <li>
            <Link to="/userhistory">
              <FaHistory className="icon" />
              <span>missed</span>
            </Link>
          </li>
          <li>
            <Link to="/Userfeed">
              <FaRegCommentDots className="icon" />
              <span>Feedback</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Collecterside
