const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name:{type: String, requried: true, trim: true},
    email:{type: String, requried: true,trim: true},
    password: {type: String,required: false},
    empType:{type: String, requried: true,trim: true},
})

const EmployeeModel = mongoose.model('Employee', EmployeeSchema);
module.exports = EmployeeModel;