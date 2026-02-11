const contactSchema = require('../schema/Contactschema');

// Add a new enquiry
const addEnquiry = (req, res) => {
    const { name, email, phone, textarea } = req.body;

    if (!name || !email || !phone || !textarea) {
        return res.status(400).json({
            success: false,
            message: "All fields are required (name, email, phone, textarea)."
        });
    }

    const enquiry = new contactSchema({
        name,
        email,
        phone,
        textarea
    });

    enquiry.save()
        .then(result => {
            res.status(201).json({
                success: true,
                message: "Your enquiry added successfully.",
                data: result
            });
        })
        .catch(error => {
            res.status(500).json({
                success: false,
                message: "Error in adding enquiry.",
                error: error.message
            });
        });
};

// View all enquiries
const viewAllEnquiry = (req, res) => {
    contactSchema.find().sort({ createdAt: -1 }) // newest first
        .then(result => {
            res.status(200).json({
                success: true,
                message: "All enquiries fetched successfully.",
                data: result
            });
        })
        .catch(error => {
            res.status(500).json({
                success: false,
                message: "Error fetching enquiries.",
                error: error.message
            });
        });
};

module.exports = { addEnquiry, viewAllEnquiry };
