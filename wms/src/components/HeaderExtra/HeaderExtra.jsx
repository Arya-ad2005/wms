import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function HeaderExtra() {
  return (
    <div>
       <div className='full'>
      <nav className='headings'>
        <div className='brandpic'>
          <Link to="/" className='brandname'>WMS</Link>
        </div>

        {/* <ul className="nav">
          <li><NavLink to="/" className="drpdwnfont" activeClassName="active">Home</NavLink></li>
          </ul> */}
        </nav>
    </div>
    </div>
  )
}

export default HeaderExtra
