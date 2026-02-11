const collecterSchema = require('../schema/Collectorschema');
const multer = require("multer");

// Multer setup for image uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads"); // folder for storing images
    },
    filename: function (req, file, cb) {
        // prepend timestamp to avoid duplicate names
        cb(null, Date.now() + "-" + file.originalname);
    }
});
const uploadcollecter = multer({ storage: storage }).single("image");

// Register a new collector
const CollecterRegistration = (req, res) => {
    collecterSchema.findOne({ email: req.body.email })
    .then((existingUser) => {
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already registered. Please use a different email."
            });
        }

        // store image path instead of full object
        const collecter = new collecterSchema({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            image: req.file,
            location: req.body.location,
            licenceno: req.body.licenceno,
            password: req.body.password,
            confirmpassword: req.body.confirmpassword
        });

        collecter.save()
        .then((result) => {
            res.status(201).json({
                success: true,
                message: "Waste collector registration completed successfully.",
                data: result
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: "Error in registering waste collector",
                error: error.message
            });
        });
    })
    .catch((error) => {
        res.status(500).json({
            success: false,
            message: "Error checking existing email.",
            error: error.message
        });
    });
};

// Collector login
const CollecterLogin = (req, res) => {
    const { email, password } = req.body;

    collecterSchema.findOne({ email, password })
    .then((result) => {
        if (!result) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        if (!result.isActive) {
            return res.status(403).json({ message: "Your account is deactivated. Contact admin." });
        }

        return res.status(200).json({
            message: "Collector login successful",
            data: result
        });
    })
    .catch((error) => {
        res.status(500).json({ message: "Error during login", error: error.message });
    });
};

// Forgot password
const ForgotPassword = (req, res) => {
    const { email, password } = req.body;

    collecterSchema.findOneAndUpdate({ email }, { password }, { new: true })
    .then((result) => {
        if (result) {
            res.status(200).json({
                message: "Password updated successfully",
                data: result
            });
        } else {
            res.status(404).json({ message: "Collector not found" });
        }
    })
    .catch((error) => {
        res.status(500).json({ message: "Error updating password", error: error.message });
    });
};

// View all collectors
const viewCollecters = (req, res) => {
    collecterSchema.find()
    .then((result) => {
        res.status(200).json({
            message: "All collectors fetched successfully",
            data: result
        });
    })
    .catch((error) => {
        res.status(500).json({ message: "Error fetching collectors", error: error.message });
    });
};

// View one collector
const ViewOneCollecter = (req, res) => {
    collecterSchema.findById(req.params.id)
    .then((result) => {
        if (result) {
            res.status(200).json({
                message: "Collector fetched successfully",
                data: result
            });
        } else {
            res.status(404).json({ message: "Collector not found" });
        }
    })
    .catch((error) => {
        res.status(500).json({ message: "Error fetching collector", error: error.message });
    });
};

// Deactivate collector
const DeactivateCollecter = (req, res) => {
    collecterSchema.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true })
    .then((result) => {
        if (result) {
            res.status(200).json({ message: "Collector deactivated", data: result });
        } else {
            res.status(404).json({ message: "Collector not found" });
        }
    })
    .catch((error) => {
        res.status(500).json({ message: "Error deactivating collector", error: error.message });
    });
};

// Activate collector
const ActivateCollecter = (req, res) => {
    collecterSchema.findByIdAndUpdate(req.params.id, { isActive: true }, { new: true })
    .then((result) => {
        if (result) {
            res.status(200).json({ message: "Collector activated", data: result });
        } else {
            res.status(404).json({ message: "Collector not found" });
        }
    })
    .catch((error) => {
        res.status(500).json({ message: "Error activating collector", error: error.message });
    });
};

// Update collector details
const updatecollecterById = (req, res) => {
    const updateData = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        image: req.file,
        location: req.body.location,
        licenceno: req.body.licenceno,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword
    };

    // Remove undefined fields
    Object.keys(updateData).forEach(key => updateData[key] === undefined && delete updateData[key]);

    collecterSchema.findByIdAndUpdate(req.params.id, updateData, { new: true })
    .then((result) => {
        if (result) {
            res.status(200).json({ message: "Collector details updated successfully", data: result });
        } else {
            res.status(404).json({ message: "Collector not found" });
        }
    })
    .catch((error) => {
        res.status(500).json({ message: "Error updating collector", error: error.message });
    });
};

module.exports = { 
    CollecterRegistration, 
    CollecterLogin, 
    ForgotPassword, 
    viewCollecters, 
    ViewOneCollecter, 
    DeactivateCollecter, 
    ActivateCollecter, 
    updatecollecterById,
    uploadcollecter
};
