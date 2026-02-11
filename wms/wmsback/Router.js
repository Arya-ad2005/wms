const express = require('express');
const router = express.Router();

// Controllers (lowercase variables, paths match filenames exactly)
const usercontroller = require('./Controller/Usercontroller');
const collectercontroller = require('./Controller/Collectorcontroller');

const admincontroller = require('./Controller/Admincontroller');
const contactcontroller = require('./Controller/Contactcontroller');
const pickupcontroller = require('./Controller/Pickupcontroller');

// ----------------- USER ROUTES -----------------
router.post('/userregistration', usercontroller.uploaduser, usercontroller.UserRegistration);
router.post('/userlogin', usercontroller.UserLogin);
router.post('/forgotpassword', usercontroller.ForgotPassword);
router.post('/userviewall', usercontroller.viewUsers);
router.get('/userviewone/:id', usercontroller.ViewOneUser);
router.post('/userdelete/:id', usercontroller.deleteuserById);
router.post('/userupdate/:id', usercontroller.uploaduser, usercontroller.updateuserById);

// ----------------- COLLECTER ROUTES -----------------
router.post('/collecterreg', collectercontroller.uploadcollecter, collectercontroller.CollecterRegistration);
router.post('/collecterlogin', collectercontroller.CollecterLogin);
router.post('/forgotcollecterpass', collectercontroller.ForgotPassword);
router.post('/collecterviewall', collectercontroller.viewCollecters);
router.get('/collecterviewone/:id', collectercontroller.ViewOneCollecter);
router.post('/collecterdeactivate/:id', collectercontroller.DeactivateCollecter);
router.post('/activatecollecter/:id', collectercontroller.ActivateCollecter);
router.post('/collecterupdate/:id', collectercontroller.uploadcollecter, collectercontroller.updatecollecterById);

// ----------------- ADMIN ROUTES -----------------
router.post('/adminlogin', admincontroller.AdminLogin);

// ----------------- CONTACT ROUTES -----------------
router.post('/createenquiry', contactcontroller.addEnquiry);
router.post('/viewallenquiries', contactcontroller.viewAllEnquiry);

// ----------------- PICKUP ROUTES -----------------
router.post('/addpickup', pickupcontroller.uploadPickup, pickupcontroller.addPickup);
router.post('/viewbyuserpickup/:id', pickupcontroller.viewByUser);
router.post('/viewallpickup', pickupcontroller.viewAll);
router.post('/updatepaymentpickup/:id', pickupcontroller.updatePayment);
router.post('/pickupready/:id', pickupcontroller.markReadyForPickup);
router.post('/updatePickupStatus', pickupcontroller.updatePickupStatus);

module.exports = router;
