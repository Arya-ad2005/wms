import React from 'react';
import './Userside.css'; // Import the external CSS file
import { FaBell, FaChartLine, FaHistory, FaRegCommentDots } from 'react-icons/fa'; // Example icons from react-icons
import { Link } from 'react-router-dom';

function Userside() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/usernotification">
            <FaBell className="icon" />
            <span>Notification</span>
          </Link>
        </li>
        <li>
          <Link to="/usertrack">
            <FaChartLine className="icon" />
            <span>Track</span>
          </Link>
        </li>
        <li>
          <Link to="/userhistory">
            <FaHistory className="icon" />
            <span>History</span>
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
  );
}

export default Userside;