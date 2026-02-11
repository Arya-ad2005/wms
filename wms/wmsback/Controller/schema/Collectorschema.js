const mongoose = require ('mongoose')

const collecterSchema = new mongoose.Schema({
        name: { type: String, required: true},
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true},
        image:{type:Object},
        location: { type: String, required: true},
        licenceno: { type: String, required: true},
        password:{ type: String, required: true},
        confirmpassword:{ type: String, required: true},
        isActive: { type: Boolean, default: true, required: true }
})

module.exports=mongoose.model('Collector',collecterSchema)