const Admin = require('../schema/Adminschema');
const bcrypt = require('bcrypt'); // for hashing passwords
const SALT_ROUNDS = 10;

// Admin registration (optional if you want to create admins via API)
const AdminRegistration = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if email already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ success: false, message: "Email already registered." });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        const admin = new Admin({
            name,
            email,
            password: hashedPassword
        });

        const result = await admin.save();
        res.status(201).json({ success: true, message: "Admin registered successfully", data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error registering admin", error: error.message });
    }
};

// Admin login
const AdminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        if (!admin.isActive) {
            return res.status(403).json({ success: false, message: "Admin account is deactivated" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        res.status(200).json({ success: true, message: "Admin logged in successfully", data: admin });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error logging in", error: error.message });
    }
};

// View all admins
const viewAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json({ success: true, message: "All admins fetched", data: admins });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching admins", error: error.message });
    }
};

// View one admin
const viewAdminById = async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id);
        if (!admin) return res.status(404).json({ success: false, message: "Admin not found" });

        res.status(200).json({ success: true, message: "Admin fetched", data: admin });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching admin", error: error.message });
    }
};

// Activate admin
const activateAdmin = async (req, res) => {
    try {
        const admin = await Admin.findByIdAndUpdate(req.params.id, { isActive: true }, { new: true });
        if (!admin) return res.status(404).json({ success: false, message: "Admin not found" });

        res.status(200).json({ success: true, message: "Admin activated", data: admin });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error activating admin", error: error.message });
    }
};

// Deactivate admin
const deactivateAdmin = async (req, res) => {
    try {
        const admin = await Admin.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
        if (!admin) return res.status(404).json({ success: false, message: "Admin not found" });

        res.status(200).json({ success: true, message: "Admin deactivated", data: admin });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error deactivating admin", error: error.message });
    }
};

// Reset admin password
const resetPassword = async (req, res) => {
    try {
        const { email, newPassword } = req.body;
        const admin = await Admin.findOne({ email });
        if (!admin) return res.status(404).json({ success: false, message: "Admin not found" });

        const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);
        admin.password = hashedPassword;
        await admin.save();

        res.status(200).json({ success: true, message: "Password updated successfully", data: admin });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error resetting password", error: error.message });
    }
};

module.exports = {
    AdminRegistration,
    AdminLogin,
    viewAllAdmins,
    viewAdminById,
    activateAdmin,
    deactivateAdmin,
    resetPassword
};
