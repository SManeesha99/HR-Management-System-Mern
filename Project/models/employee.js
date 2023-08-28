const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    
    empNo: {
        type: String,
        required: true
    },
    empName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    empType: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    NIC: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    empField: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },


});

module.exports = mongoose.model('Employees', EmployeeSchema);