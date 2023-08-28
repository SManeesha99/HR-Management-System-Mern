const mongoose = require('mongoose');

const EmpUserSchema = new mongoose.Schema({
    userID : { type: String, required: true, ref: "User", },
    name:{type: String, requried: true, trim: true},
    email:{type: String, requried: true,trim: true},
    password: {type: String,required: false},
    empType:{type: String, requried: true,trim: true},
})

const EmpUserModel = mongoose.model('EmpUser', EmpUserSchema);
module.exports = EmpUserModel;