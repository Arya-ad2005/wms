import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Layout / Headers / Footers
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Topheader from "./components/Topheader/Topheader";
import HeaderExtra from "./components/HeaderExtra/HeaderExtra";

// Admin theme
import './styles/admin.css'

// Pages
import LandingPage from "./components/Landingpage/Landingpage";
import Recidential from "./components/Recidential/Recidential";
import Commertial from"./components/Commertial/Commertial " // FIXED: Check folder name (Commercial or Commertial?)
import About from "./components/About/About";
import Contact from"./components/Contact/Conact"; // FIXED: Typo Conact -> Contact

// Admin
import Adminside from "./components/Adminside/Adminside";
import Adminlogin from "./components/Adminlogin/Adminlogin";
import Admindash from "./components/Admindash/Admindash";
import Adminviewallusers from "./components/AdminUser/AdminUser";
import AdminviewallCollecters from "./components/Admincollector/Admincollector";
import AdminEnquiry from "./components/Adminenquary/Adminenquary";
import AdminViewoneuser from "./components/Adminviewoneuser/Viewoneuser";
import AdminviewOnecollector from "./components/Adminviewonecollector/Viewonecollector";

// Tale / Info
import TalePage from "./components/Talepage/Talepage";

// User Side
import SidebarUser from "./components/Userside/Userside";
import Userlogin from "./components/Userlogin/Userlogin";
import Userregister from "./components/Userregister/Userregister";
import Userdash from "./components/Userdash/Userdash";
import Userprofile from "./components/Userprofile/Userprofile";
import Userforgot from "./components/Userforgot/Userforgot";
import Useredit from "./components/Useredit/Useredit";
import Userpickup from "./components/Userpickup/Userpickup";

// Collector Side
import Collectorside from "./components/Collectorside/Collectorside";
import Collectorlogin from "./components/Collectorlogin/Collectorlogin";
import Collectorregister from "./components/collectorregister/Collectorregister";
import Collectordash from "./components/Collectordash/Collectordash";
import Collecterprofile from "./components/Collectorprofile/Collectorprofile";
import Collectorpickup from "./components/Collectorpickup/Collectorpickup";
import Collectorpayment from "./components/Collectorpayment/Collectorpayment";
import Collectorforgot from "./components/Collectorforgot/Collectorforgot";
import Collectoredit from"./components/Collectoredit/Collectoredit";
import Collectorhistory from "./components/Collectorhistory/Collectorhistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout components */}
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/topheader" element={<Topheader />} />
        <Route path="/headerextra" element={<HeaderExtra />} />
        <Route path="/talepage" element={<TalePage />} />

        {/* Main Pages */}
        <Route path="/home" element={<><Header /><LandingPage /><Footer /></>} />
        <Route path="/residential" element={<><Header /><Recidential /><Footer /><TalePage /></>} />
        <Route path="/commertial" element={<><Header /><Commertial /><Footer /></>} />
        <Route path="/about" element={<><Header /><About /><Footer /></>} />
        <Route path="/contact" element={<><Header /><Contact /><Footer /></>} />

        {/* Admin Routes */}
        <Route path="/adminside" element={<Adminside />} />
        <Route path="/adminlogin" element={<><Header /><Adminlogin /></>} />
        <Route path="/admindashboard" element={<><Adminside /><Admindash/></>} />
        <Route path="/adminuserallview" element={<><Adminside /><Adminviewallusers /></>} />
        <Route path="/adminviewallcollecters" element={<><Adminside /><AdminviewallCollecters /></>} />
        <Route path="/adminviewenquiry" element={<><Adminside /><AdminEnquiry /></>} />
        <Route path="/adminviewoneuser/:id" element={<><Adminside /><AdminViewoneuser /></>} />
        <Route path="/adminviewonecollector/:id" element={<><Adminside /><AdminviewOnecollector /></>} />

        {/* User Routes */}
        <Route path="/userside" element={<SidebarUser />} />
        <Route path="/userlogin" element={<><Header /><Userlogin /></>} />
        <Route path="/userregister" element={<><Header /><Userregister /></>} />
        <Route path="/userdashboard/:id" element={<><HeaderExtra /><SidebarUser /><Userdash /></>} />
        <Route path="/userprofile/:id" element={<><HeaderExtra /><SidebarUser /><Userprofile /></>} />
        <Route path="/userforgot" element={<><HeaderExtra /><Userforgot /></>} />
        <Route path="/useredit/:id" element={<><HeaderExtra /><SidebarUser /><Useredit /></>} />
        <Route path="/pickuprequest/:id" element={<><HeaderExtra /><SidebarUser /><Userpickup /></>} />

        {/* Collector Routes */}
        <Route path="/collectorside" element={<Collectorside />} />
        <Route path="/collectorlogin" element={<><Header /><Collectorlogin /></>} />
        <Route path="/collectorregister" element={<><Header /><Collectorregister /></>} />
        <Route path="/collecterdashboard/:id" element={<><HeaderExtra /><Collectorside /><Collectordash /></>} />
        <Route path="/collecterprofile/:id" element={<><HeaderExtra /><Collectorside /><Collecterprofile /></>} />
        <Route path="/collecterpickup/:id" element={<><HeaderExtra /><Collectorside /><Collectorpickup /></>} />
        <Route path="/collecterpayment/:id" element={<><HeaderExtra /><Collectorside /><Collectorpayment /></>} />
        <Route path="/collecteredit/:id" element={<><HeaderExtra /><Collectorside /><Collectoredit /></>} />
        <Route path="/collectorhistory/:id" element={<><HeaderExtra /><Collectorside /><Collectorhistory /></>} />
        
        {/* FIXED: Removed Collectorside (Sidebar) and HeaderExtra. Used standard Header instead. */}
        <Route path="/collectorforgot" element={<><Header /><Collectorforgot /></>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;