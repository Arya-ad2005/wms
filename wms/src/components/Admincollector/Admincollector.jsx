import React from 'react'
import './Admincollector.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function AdminviewallCollecters() {

    const [data, setData] = useState([])

    const fetchData = () => {
        axios.post("http://localhost:3888/collecterviewall")
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



    const deactivateCollecter = (id) => {
        axios.post(`http://localhost:3888/collecterdeactivate/${id}`)
            .then((result) => {
                alert(result.data.message);
                setData(prev =>
                    prev.map(item =>
                        item._id === id ? { ...item, isActive: false } : item
                    )
                );
            })
            .catch((error) => console.log(error));
    };

    const activateCollecter = (id) => {
        axios.post(`http://localhost:3888/ActivateCollecter/${id}`)
            .then((res) => {
                alert(res.data.message);
                setData(prev =>
                    prev.map(item =>
                        item._id === id ? { ...item, isActive: true } : item
                    )
                );
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className='collecter-container-flex'>
            {
                data.map((items) => (
                    <div className='display-users' key={items._id}>
                        <h3>Name:{items.name}</h3>
                        <h3>Email:{items.email}</h3>
                        <h3>Phone:{items.phone}</h3>
                        <h3>licenceno:{items.licenceno}</h3>
                        <h3>Location:{items.location}</h3>

                        <div className="user-btn-group">
                            <button
                                className={`button-user-common btn-deactivate`}
                                disabled={!items.isActive}
                                onClick={() => deactivateCollecter(items._id)}
                            >
                                {items.isActive ? "Deactivate" : "Deactivated"}
                            </button>

                            <button
                                className={`button-user-common btn-activate`}
                                disabled={items.isActive}
                                onClick={() => activateCollecter(items._id)}
                            >
                                {items.isActive ? "Activated" : "Activate"}
                            </button>

                            <Link to={`/adminviewonecollector/${items._id}`}>
                                <button className="button-user-common">View</button>
                            </Link>
                        </div>


                    </div>

                ))
            }
        </div>
    )
}

export default AdminviewallCollecters
