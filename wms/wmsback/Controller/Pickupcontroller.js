const pickupSchema = require('../schema/Pickupschema');
const multer = require("multer");

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads"); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname); // avoid duplicate filenames
    }
});

const uploadPickup = multer({ storage: storage }).single("image");

// Add new pickup request
const addPickup = (req, res) => {
    const newPickup = new pickupSchema({
        userId: req.body.userId,
        wasteType: req.body.wasteType,
        description: req.body.description,
        image: req.file,
        pickupDate: req.body.pickupDate,
    });

    newPickup.save()
        .then(result => {
            res.status(201).json({
                success: true,
                message: "Pickup request submitted successfully!",
                data: result
            });
        })
        .catch(error => {
            res.status(500).json({
                success: false,
                message: "Error saving pickup request.",
                error: error.message
            });
        });
};

// View pickups by user
const viewByUser = (req, res) => {
    const { id } = req.params;
    pickupSchema.find({ userId: id })
        .populate('collectorId', 'name email')
        .then(result => {
            res.status(200).json({
                success: true,
                message: "User pickup requests fetched successfully.",
                data: result
            });
        })
        .catch(error => {
            res.status(500).json({
                success: false,
                message: "Error fetching user pickup requests.",
                error: error.message
            });
        });
};

// View all pickups
const viewAll = (req, res) => {
    pickupSchema.find()
        .populate('userId', 'name email')
        .populate('collectorId', 'name email')
        .then(result => {
            res.status(200).json({
                success: true,
                message: "All pickup requests fetched successfully.",
                data: result
            });
        })
        .catch(error => {
            res.status(500).json({
                success: false,
                message: "Error fetching all pickups.",
                error: error.message
            });
        });
};

// Update payment status
const updatePayment = (req, res) => {
    const { paymentStatus, amount, paymentMethod } = req.body;

    pickupSchema.findByIdAndUpdate(
        req.params.id,
        { paymentStatus, amount, paymentMethod },
        { new: true }
    )
    .then(result => {
        if (!result) {
            return res.status(404).json({ success: false, message: "Pickup request not found." });
        }
        res.status(200).json({
            success: true,
            message: "Payment status updated successfully.",
            data: result
        });
    })
    .catch(error => {
        res.status(500).json({
            success: false,
            message: "Error updating payment status.",
            error: error.message
        });
    });
};

// Mark collector as ready for pickup
const markReadyForPickup = (req, res) => {
    const { collectorId } = req.body;

    pickupSchema.findByIdAndUpdate(
        req.params.id,
        { collectorStatus: 'Ready for Pickup', collectorId },
        { new: true }
    )
    .then(result => {
        if (!result) {
            return res.status(404).json({ success: false, message: "Pickup not found." });
        }
        res.status(200).json({
            success: true,
            message: "Collector marked as ready for pickup!",
            data: result
        });
    })
    .catch(error => {
        res.status(500).json({
            success: false,
            message: "Error updating collector status",
            error: error.message
        });
    });
};

// Update pickup status (collector & payment)
const updatePickupStatus = (req, res) => {
    const { collectorId, collectorStatus, paymentStatus } = req.body;

    pickupSchema.findByIdAndUpdate(
        req.params.id,
        { collectorId, collectorStatus, paymentStatus },
        { new: true }
    )
    .then(result => {
        if (!result) {
            return res.status(404).json({ success: false, message: "Pickup not found." });
        }
        res.status(200).json({
            success: true,
            message: "Pickup status updated successfully.",
            data: result
        });
    })
    .catch(error => {
        res.status(500).json({
            success: false,
            message: "Error updating pickup status.",
            error: error.message
        });
    });
};

module.exports = {
    addPickup,
    viewByUser,
    viewAll,
    updatePayment,
    markReadyForPickup,
    updatePickupStatus,
    uploadPickup
};
