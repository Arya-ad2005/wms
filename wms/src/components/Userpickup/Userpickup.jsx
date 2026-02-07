import React, { useState, useEffect } from 'react';
import './Userpickup.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Userpickup() {
    const { id } = useParams();
    const [pickup, setPickup] = useState({
        wasteType: '',
        frequency: '',
        description: '',
        pickupDate: '',
        image: '',
    });
    const [allRequests, setAllRequests] = useState([]);

    const inputData = (e) => {
        setPickup({ ...pickup, [e.target.name]: e.target.value });
    };

    const imageChange = (e) => {
        setPickup({ ...pickup, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem('user'));
        const userId = user?._id;

        const formData = new FormData();
        formData.append('userId', userId);
        formData.append('wasteType', pickup.wasteType);
        formData.append('frequency', pickup.frequency);
        formData.append('description', pickup.description);
        formData.append('pickupDate', pickup.pickupDate);
        formData.append('image', pickup.image);

        axios.post('http://localhost:3888/addpickup', formData)
            .then((result) => {
                if (result.data) {
                    alert(result.data.message);
                    fetchAllRequests();
                } else {
                    alert(result.data.message || 'Failed to submit pickup request.');
                }
            })
            .catch((error) => {
                console.error(error);
                alert('Network error while submitting pickup request!');
            });
    };

    const fetchAllRequests = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const userId = user?._id;

        if (!userId) {
            console.error("User ID not found in localStorage!");
            return;
        }
        axios.post(`http://localhost:3888/viewbyuserpickup/${userId}`)
            .then((result) => {
                if (result.data) {
                    setAllRequests(result.data.data);
                } else {
                    setAllRequests([]);
                }
            })
            .catch((error) => {
                console.error(error);
                alert('Error fetching pickup requests!');
            });
    };

    useEffect(() => {
        fetchAllRequests();
    }, []);

    return (
        <div>
            <div className='pickup-container'>
                <h2>Pickup Requests</h2>

                <form onSubmit={handleSubmit} className='pickup-form'>
                    <label>Preferred Waste Type:</label>
                    <select className='select-userpick' name="wasteType" value={pickup.wasteType} onChange={inputData} required>
                        <option value="">-- Select Waste Type --</option>
                        <option value="plastic">Plastic</option>
                        <option value="organic">Organic</option>
                        <option value="ewaste">E-Waste</option>
                        <option value="metal">Metal</option>
                        <option value="paper">Paper</option>
                        <option value="mixed">Mixed</option>
                    </select>

                    {/* <label>Pickup Frequency:</label>
                <select name="frequency" value={pickup.frequency} onChange={inputData} required>
                    <option value="">-- Select Frequency --</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select> */}

                    <label>Description:</label>
                    <textarea name='description' value={pickup.description} onChange={inputData} required />

                    <label>Preferred Pickup Date:</label>
                    <input type="date" name="pickupDate" value={pickup.pickupDate} onChange={inputData} min={new Date().toISOString().split("T")[0]} required />


                    <label>Upload Waste Image:</label>
                    <input type='file' name='image' onChange={imageChange} required />


                    <button type='submit'>Submit Request</button>
                </form>
            </div>
            <h3 className='head-pick-history'>Your Pickup History</h3>

            <div className='pickup-list'>
                {allRequests.map((items) => (
                    <div className='display-pickups' key={items._id}>
                        <h3>Waste Type: {items.wasteType}</h3>
                        {/* <h3>Frequency: {items.frequency}</h3> */}
                        <h3>Description: {items.description}</h3>
                        <h3>Pickup Date: {new Date(items.pickupDate).toLocaleDateString()}</h3>
                        <h3>Payment Status: {items.paymentStatus}</h3>
                        <h3>Status: {items.collectorStatus}</h3>
                        <img className='pickup-image' src={`http://localhost:3888/upload/${items?.image?.filename}`} alt='?'
                        />
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Userpickup;
