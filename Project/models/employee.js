const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
    
    number: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    type: {
        type: String,
    },
    gender: {
        type: String,
    },
    NIC: {
        type: String,
    },
    salary: {
        type: String,
    },
    attendance: {
        type: String,
        default: 'Not Available',
    },
    checkIn: {
        type: String,
    },
    checkOut: {
        type: String,
    }


});

module.exports = mongoose.model('HRManagement', leaveSchema);