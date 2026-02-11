const mongoose = require('mongoose');

const pickupSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    wasteType: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: Object },
    pickupDate: { type: Date, required: true },
    paymentStatus: { type: String, default: 'Pending' },
    collectorStatus: { type: String, default: 'Not Ready' },
    collectorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Collector' },
});

module.exports = mongoose.model('Pickup', pickupSchema);
