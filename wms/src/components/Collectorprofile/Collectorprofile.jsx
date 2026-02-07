import React, { useEffect, useState } from 'react'
import './CollectorProfile.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
function Collectorprofile() {
    const {id} = useParams()
    const [data,setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    
    // Get collector id from route params or localStorage
    const getCollectorId = () => {
      if (id && !id.startsWith(':')) {
        return id;
      }
      const collector = JSON.parse(localStorage.getItem('collector'));
      return collector?._id;
    }
    
    const collectorId = getCollectorId();
    
    const fetchData = () => {
      // First, try to load from localStorage (faster and avoids API call)
      const storedCollector = JSON.parse(localStorage.getItem('collector'));
      if (storedCollector) {
        console.log('Loaded collector from localStorage:', storedCollector);
        setData(storedCollector);
        setLoading(false);
        return;
      }

      // If not in localStorage, fetch from API
      const url = `http://localhost:3888/collecterviewone/${collectorId}`;
      console.log('Fetching collector URL:', url);

      if (!collectorId) {
        setError('No collector id found. Please log in again.');
        setLoading(false);
        return;
      }

      axios.get(url)
        .then((result) => {
          console.log('collecterviewone response:', result.data);
          const collectorData = result.data?.data || {};
          setData(collectorData);
          // Update localStorage with fresh data
          localStorage.setItem('collector', JSON.stringify(collectorData));
        })
        .catch((error) => {
          console.error('collecterviewone error:', error);
          // Even if API fails, show cached data from localStorage if available
          if (storedCollector) {
            setData(storedCollector);
            setError(null);
            setLoading(false);
            return;
          }
          if (error.response?.status === 404) {
            setError('Collector profile not found. The record may have been deleted.');
          } else if (error.response?.status === 500) {
            setError('Server error. Please try again later.');
          } else {
            setError('Failed to load collector data.');
          }
        })
        .finally(() => setLoading(false));
    }
    useEffect(() => {
      fetchData()
    }, [collectorId])


  return (
    
    <div>
      {loading ? (
        <div className="loading">Loading collector...</div>
      ) : error ? (
        <div className="error">
          <p>{error}</p>
          <button onClick={() => navigate('/collecterdashboard/:id')}>Go Back</button>
        </div>
      ) : (
        <div className='collecter-profile-container'>
          {
            (() => {
              const img = data.image;
              let src = '';
              if (img && typeof img === 'object' && img.filename) src = `http://localhost:3888/upload/${img.filename}`;
              else if (img && typeof img === 'string') src = `http://localhost:3888/upload/${img}`;
              return (
                <img src={src} alt="Collector" className="image-style" />
              )
            })()
          }
          <h1>Name: {data.name || 'N/A'}</h1>
          <p>Email: {data.email || 'N/A'}</p>
          <p>Phone: {data.phone || 'N/A'}</p>
          <p>licenceno: {data.licenceno || 'N/A'}</p>
          <p>Location: {data.location || 'N/A'}</p>
          <Link to={`/collecteredit/${collectorId}`} key={collectorId}>
            <button>Edit</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Collectorprofile
