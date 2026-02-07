import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admindash.css";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalCollectors, setTotalCollectors] = useState(0);

  useEffect(() => {

  axios.post("http://localhost:3888/userviewall")
    .then((result) => {
      setTotalUsers(result.data.data.length);
    })
    .catch((error) => {
      console.log(error);
    });

  axios.post("http://localhost:3888/collecterviewall")
    .then((result) => {
      setTotalCollectors(result.data.data.length);
    })
    .catch((error) => {
      console.log(error);
    });

}, []);
  return (
    <div>
      <h1 className="headingone">Waste Management</h1>
      <div className="admin-container-form">
        <div className="admin-container">
          <h2>Total users</h2>
          <h1 className="total-user-and-coll">{totalUsers}</h1>
          {/* <Link to={'/adminuserallview'}>
            <button className="total-user-viewbtn">View({totalUsers})</button></Link> */}
        </div>

        <div className="admin-container">
          <h2>Total collecters</h2>
          <h1 className="total-user-and-coll">{totalCollectors}</h1>
          {/* <Link to={'/adminviewallcollecters'}>
            <button className="total-collecter-viewbtn">View({totalCollectors})</button></Link> */}
        </div>
        <div className="admin-container">
          <h2 className="enqryh2">Enquiries</h2>
          <Link className="link-enqry" to="/adminviewenquiry"><button className="enquiry-viewbtn">Enquiries</button></Link>
        </div>
      </div>
    </div>




  )
}
export default AdminDashboard;
