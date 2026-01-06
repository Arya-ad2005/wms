import React from 'react'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Landing from './components/commen/Landing'
import Nav from './components/commen/Nav'
import Home from './components/commen/Home'
import About from './components/commen/About' 
import Contact from './components/commen/Contact'
import Register from './components/user/Register'
import Userlogin from './components/user/Userlogin'
import Userside from './components/user/Userside'
import WasteAdd from './components/user/WasteAdd'
import Userdash from './components/user/Userdash'
import Usernotification from './components/user/Usernotification'
import Usertrack from './components/user/Usertrack'
import Userhistory from './components/user/Userhistory'
import Userfeed from './components/user/Userfeed'
import CollecterReg from './components/collecter/CollecterReg'
import Collecterlogin from './components/collecter/Collecterlogin'
import Collecterside from './components/collecter/Collecterside'
import Collecterdash from './components/collecter/Collecterdash'
import Collecterpickup from './components/collecter/Collecterpickup'
import CollectorMissed from './components/collecter/collectormissed'
import Adminlogin from './components/admin/Adminlogin'
import Adminside from './components/admin/Adminside'
import Collectors from './components/admin/Collectors'
import Users from './components/admin/Users'
import Report from './components/admin/Report'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contact />} /> 
          <Route path='/registers' element={<Register/>}/>
          <Route path='/Userlogin' element={<Userlogin/>}/>
          <Route path='/Userside' element={<Userside/>}/>
          <Route path='/wasteAdd' element={<WasteAdd/>}/>
          <Route path='/userdashbord' element={<Userdash/>}/>
          <Route path='/usernotification' element={<Usernotification/>}/>
          <Route path='/usertrack' element={<Usertrack/>}/>
          <Route path='/userhistory' element={<Userhistory/>}/>
          <Route path='/Userfeed' element={<Userfeed/>}/>
          <Route path='/CollecterReg' element={<CollecterReg/>}/>
          <Route path='/Collecterlogin' element={<Collecterlogin/>}/>
          <Route path='/Collecterside' element={<Collecterside/>}/>
          <Route path='/Collecterdash' element={<Collecterdash/>}/>
          <Route path='/Collecterpickup' element={<Collecterpickup/>}/>
          <Route path='/Collectormissed' element={<CollectorMissed/>}/>
          <Route path='/adminlogin' element={<Adminlogin/>}/>
          <Route path='/adminside'element={<Adminside/>}/>
          <Route path='/collectors' element={<Collectors/>}/>
          <Route path='/Users' element={<Users/>}/>
          <Route path='/report' element={<Report/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
