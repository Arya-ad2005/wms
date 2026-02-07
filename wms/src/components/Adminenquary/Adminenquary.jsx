import React from 'react'
import './Adminenguary.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function AdminEnquiry() {

    const [data, setData] = useState([])

    const fetchData = () => {
        axios.post("http://localhost:3888/viewallenquiries")
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

        <div className="admin-enqry-container">
            {data.map((items) => (
                <div className='display-enquiries' key={items._id}>
                    <h2>Name: {items.name}</h2>
                    <h3>Email: {items.email}</h3>
                    <p>Phone: {items.phone}</p>
                    <p>Message: {items.textarea}</p>
                </div>
            ))}
        </div>
    )

}

export default AdminEnquiry
