const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    empNo: {
        type: String,
    },
    attendance: [{
        date: { type: Date, default: Date.now },
        checkIn: String,
        checkOut: String,
    }]
});


module.exports = mongoose.model('attendance', attendanceSchema);