import React, { useEffect, useState } from 'react'
import './Viewoneuser.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
function AdminViewoneuser() {
    const {id} = useParams()
    const [data,setData] = useState([])
    const navigate = useNavigate()
    const fetchData = () => {
        axios.get(`http://localhost:3888/userviewone/${id}`)
            .then((result) => {
                console.log(result.data);
                setData(result.data.data)

            })
            .catch((error) => {
                console.log(error);

            })
    }
    useEffect(() => {
        fetchData()
    }, [])
  return (
    
    <div>
      {
        <div className='user-profile-container'>
            <h1>Name:{data.name}</h1>
            <p>Email:{data.email}</p>
            <p>Phone:{data.phone}</p>
            <p>Address:{data.address}</p>
            <p>UserType:{data.userType}</p>
        </div>
      }
    </div>
  )
}

export default AdminViewoneuser
