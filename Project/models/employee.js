const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
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
    chaeckIn:{
        type: Date,
    },
    chechOut:{
        type: Date,
    }
    

});

module.exports = mongoose.model('HRManagement', leaveSchema);