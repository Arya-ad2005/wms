import React, { useEffect, useState } from 'react'
import './Viewonecollector.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
function AdminviewOnecollector() {
    const {id} = useParams()
    const [data,setData] = useState([])
    const navigate = useNavigate()
    const fetchData = () => {
        axios.get(`http://localhost:3888/collecterviewone/${id}`)
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
        <div className='collecter-profile-container'>
            <h1>Name:{data.name}</h1>
            <p>Email:{data.email}</p>
            <p>Phone:{data.phone}</p>
            <p>licenceno:{data.licenceno}</p>
            <p>location:{data.location}</p>
           
        </div>
      }
    </div>
  )
}

export default AdminviewOnecollector
