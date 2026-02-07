import React, { useEffect, useState } from 'react'
import './CollectorProfile.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
function Collectorprofile() {
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
          <img
            src={`http://localhost:3888/upload/${data.image?.filename}`}
            alt="Collector"
            className="image-style"
          />
            <h1>Name:{data.name}</h1>
            <p>Email:{data.email}</p>
            <p>Phone:{data.phone}</p>
            <p>licenceno:{data.licenceno}</p>
            <p>Location:{data.location}</p>
            <Link to={`/collecteredit/${id}`} key ={id} >
            <button>Edit</button>
            </Link>
           
        </div>
      }
    </div>
  )
}

export default Collectorprofile
