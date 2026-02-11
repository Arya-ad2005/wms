const userSchema = require('../schema/Userschema');
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const uploaduser = multer({ storage: storage }).single("image");

const UserRegistration = (req, res) => {
    userSchema.findOne({ email: req.body.email })
        .then((existingUser) => {
            if (existingUser) {
                return res.status(400).json({
                    success: false,
                    message: "Email already exists. Please use a different email."
                });
            }

            let user = new userSchema({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                image: req.file,
                password: req.body.password,
                address: req.body.address,
                userType: req.body.userType,
            });

            user.save()
                .then((result) => {
                    res.status(201).json({
                        success: true,
                        message: "User Registration Successfully",
                        data: result
                    });
                })
                .catch((error) => {
                    res.status(500).json({
                        success: false,
                        message: "Error in registering User",
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

const UserLogin = (req, res) => {
    const { email, password } = req.body;
    userSchema.findOne({ email, password })
        .then((result) => {
            if (!result) {
                return res.json({ success: false, message: "Invalid Email or Password" });
            }
            if (!result.isActive) {
                return res.json({ success: false, message: "Your account is deactivated." });
            }
            res.json({ success: true, message: "User Login Successfully", data: result });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ success: false, message: "Server error", error });
        });
};

const ForgotPassword = (req, res) => {
    userSchema.findOneAndUpdate(
        { email: req.body.email },
        { password: req.body.password },
        { new: true }
    )
    .then((result) => {
        if (result) {
            res.status(200).json({
                success: true,
                message: "Password updated successfully",
                data: result
            });
        } else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error", error });
    });
};

const viewUsers = (req, res) => {
    userSchema.find()
        .then((result) => res.json({ success: true, message: "View all users", data: result }))
        .catch((error) => res.status(500).json({ success: false, message: "Error in view users", error }));
};

const ViewOneUser = (req, res) => {
    userSchema.findById(req.params.id)
        .then((result) => res.json({ success: true, message: "Viewed one user successfully", data: result }))
        .catch((error) => res.status(500).json({ success: false, message: "Error in view user", error }));
};

const deleteuserById = (req, res) => {
    userSchema.findByIdAndDelete(req.params.id)
        .then((result) => res.json({ success: true, message: "Deleted user successfully", data: result }))
        .catch((error) => res.status(500).json({ success: false, message: "Error in delete", error }));
};

const updateuserById = (req, res) => {
    userSchema.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            image: req.file,
            password: req.body.password,
            address: req.body.address,
            userType: req.body.userType
        },
        { new: true }
    )
    .then((result) => res.json({ success: true, message: "User details updated successfully", data: result }))
    .catch((error) => res.status(500).json({ success: false, message: "Error in updating user details", error }));
};

module.exports = { UserRegistration, UserLogin, ForgotPassword, viewUsers, ViewOneUser, deleteuserById, updateuserById, uploaduser };
