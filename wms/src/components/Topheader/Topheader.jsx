import React from 'react'
import './topHeader.css'
import { useNavigate } from 'react-router-dom';
function Topheader() {
    const navigate = useNavigate();
    const goToNextPage = () => {
        navigate("/userlogin")
    };
    const goToReg = () => {
        navigate("/userregistration")
    };
    return (
        
            <div>
                <div className="dropdowns">
                   
                        <div className="eng">
                            <select id="country" name="country">

                                <option value="english">English</option>
                                <option value="hindi">हिन्दी</option>
                            </select>
                    
                        </div>

                
                    <ul className="navbar">
                        <li><a className="drpdwnfont" >Join Us</a></li>
                        <li><a className="drpdwnfont">Make a Payment</a></li>
                    </ul>


                    <div className='rightside'>
                        <button className='loginbutton' onClick={goToNextPage}>Sign In</button>
                        <button className='registration' onClick={goToReg}> Register </button>
                    </div>
                </div>
            </div>
        
    )
}

export default Topheader
