import React from 'react'
import './Adminuser.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function AdminviewallUsers() {

    const [data, setData] = useState([])

    const fetchData = () => {
        axios.post("http://localhost:3888/userviewall")
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

    const deleteUser = (id) => {
        axios.post(`http://localhost:3888/userdelete/${id}`)
            .then((result) => {
                console.log(result.data);

            })
            .catch((error) => {
                console.log(error);

            })
    }


    return (
        <div className="users-container-flex">
            {
                data.map((items) => (
                    <div className='display-users' key={items._id}>
                        <h2 className='display-user-head'>Name:{items.name}</h2>
                        <h2 className='display-user-head'>Email:{items.email}</h2>
                        <h2 className='display-user-head'>Phone:{items.phone}</h2>
                        <h2 className='display-user-head'>Password:{items.password}</h2>
                        <h2 className='display-user-head'>Address:{items.address}</h2>
                        <h2 className='display-user-head'>User Type:{items.userType}</h2>
                        <div className="user-btn-group">
                            <button className='button-user-common-delete' onClick={() => deleteUser(items._id)}>Delete</button>

                            <Link to={`/adminviewoneuser/${items._id}`}>
                                <button className='button-user-common'>View</button>
                            </Link>
                        </div>

                    </div>

                ))
            }
        </div>
    )
}

export default AdminviewallUsers
